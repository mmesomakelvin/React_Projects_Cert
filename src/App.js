import React, { useMemo, useRef, useState } from "react";
import { toPng, toSvg } from "html-to-image";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import MentJudgeCert from "./MentJudgeCert";
import SaParticipationCert from "./SaParticipationCert";
import StackronAcademyCert from "./StackronAcademyCertBADS";
import StackronAcademyCertAlt from "./StackronAcademyCertAlt";
import { BA_DS_COHORT_1_RECIPIENTS } from "./data/baDsCohort1Recipients";
import "./App.css";

const CERTIFICATE_TEMPLATES = [
  {
    id: "mentor-judge",
    name: "Mentor and Judge Appreciation",
    component: MentJudgeCert,
  },
  {
    id: "stackron-academy",
    name: "BA/DS Stackron Academy Certificate",
    component: StackronAcademyCert,
  },
  {
    id: "stackron-academy-alt",
    name: "BA/DS Stackron Academy Certificate (Angled)",
    component: StackronAcademyCertAlt,
  },
  {
    id: "participation",
    name: "Participation Certificate",
    component: SaParticipationCert,
  },
];

const CERTIFICATE_SIZES = [
  { id: "a4-landscape", name: "A4 Landscape", width: 3508, height: 2480 },
  {
    id: "letter-landscape",
    name: "US Letter Landscape",
    width: 3300,
    height: 2550,
  },
  { id: "a4-portrait", name: "A4 Portrait", width: 2480, height: 3508 },
  {
    id: "letter-portrait",
    name: "US Letter Portrait",
    width: 2550,
    height: 3300,
  },
];

const formatSizeLabel = (size) =>
  `${size.name} (${size.width} x ${size.height})`;

const BA_DS_TEMPLATE_IDS = new Set(["stackron-academy", "stackron-academy-alt"]);

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "recipient";

const waitForNextPaint = () =>
  new Promise((resolve) => {
    if (
      typeof window === "undefined" ||
      typeof window.requestAnimationFrame !== "function"
    ) {
      setTimeout(resolve, 20);
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });

const getPdfPageConfig = (size) => {
  const widthMm = (size.width * 25.4) / 300;
  const heightMm = (size.height * 25.4) / 300;

  return {
    widthMm,
    heightMm,
    orientation: size.width >= size.height ? "l" : "p",
  };
};

export default function App() {
  const designRef = useRef(null);
  const [templateId, setTemplateId] = useState(CERTIFICATE_TEMPLATES[0].id);
  const [sizeId, setSizeId] = useState(CERTIFICATE_SIZES[0].id);
  const [isExporting, setIsExporting] = useState(false);
  const [baDsRecipientId, setBaDsRecipientId] = useState(
    BA_DS_COHORT_1_RECIPIENTS[0]?.certId || ""
  );

  const selectedTemplate =
    useMemo(
      () => CERTIFICATE_TEMPLATES.find((t) => t.id === templateId),
      [templateId]
    ) || CERTIFICATE_TEMPLATES[0];
  const selectedSize =
    useMemo(() => CERTIFICATE_SIZES.find((s) => s.id === sizeId), [sizeId]) ||
    CERTIFICATE_SIZES[0];
  const selectedBaDsRecipient =
    useMemo(
      () =>
        BA_DS_COHORT_1_RECIPIENTS.find((row) => row.certId === baDsRecipientId),
      [baDsRecipientId]
    ) || BA_DS_COHORT_1_RECIPIENTS[0] || null;
  const isBaDsTemplate = BA_DS_TEMPLATE_IDS.has(templateId);
  const previewRecipient = isBaDsTemplate ? selectedBaDsRecipient : null;

  const TemplateComponent = selectedTemplate.component;
  const templateDataProps = previewRecipient
    ? {
        fullName: previewRecipient.fullName,
        certId: previewRecipient.certId,
        verifyUrl: previewRecipient.verifyUrl,
        issueDate: previewRecipient.issueDate,
        duration: previewRecipient.duration,
        programName: previewRecipient.programName,
        signatureName: previewRecipient.signatureName,
        signatureTitle: previewRecipient.signatureTitle,
      }
    : {};

  const buildExportBaseName = (recipient = previewRecipient) => {
    if (recipient && isBaDsTemplate) {
      return `certificate-${selectedTemplate.id}-${selectedSize.id}-${recipient.certId}-${slugify(
        recipient.fullName
      )}`;
    }

    return `certificate-${selectedTemplate.id}-${selectedSize.id}-${selectedSize.width}x${selectedSize.height}`;
  };

  const renderPngDataUrl = async () =>
    toPng(designRef.current, {
      width: selectedSize.width,
      height: selectedSize.height,
      pixelRatio: 1,
      cacheBust: true,
    });

  const renderSvgDataUrl = async () =>
    toSvg(designRef.current, {
      width: selectedSize.width,
      height: selectedSize.height,
    });

  const exportDataUrlAsPdf = (dataUrl, filename) => {
    const page = getPdfPageConfig(selectedSize);
    const pdf = new jsPDF({
      orientation: page.orientation,
      unit: "mm",
      format: [page.widthMm, page.heightMm],
      compress: true,
    });

    pdf.addImage(
      dataUrl,
      "PNG",
      0,
      0,
      page.widthMm,
      page.heightMm,
      undefined,
      "FAST"
    );
    pdf.save(filename);
  };

  const exportAsPng = async () => {
    if (!designRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await renderPngDataUrl();
      saveAs(dataUrl, `${buildExportBaseName()}.png`);
    } catch (error) {
      console.error("Export failed:", error);
    }
    setIsExporting(false);
  };

  const exportAsSvg = async () => {
    if (!designRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await renderSvgDataUrl();
      saveAs(dataUrl, `${buildExportBaseName()}.svg`);
    } catch (error) {
      console.error("Export failed:", error);
    }
    setIsExporting(false);
  };

  const exportAsPdf = async () => {
    if (!designRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await renderPngDataUrl();
      exportDataUrlAsPdf(dataUrl, `${buildExportBaseName()}.pdf`);
    } catch (error) {
      console.error("Export failed:", error);
    }
    setIsExporting(false);
  };

  const exportAsHtml = () => {
    if (!designRef.current) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Certificate - ${selectedTemplate.name}${previewRecipient ? ` - ${previewRecipient.fullName}` : ""}</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3f1ea;
        padding: 32px;
      }
    </style>
  </head>
  <body>
    ${designRef.current.innerHTML}
  </body>
</html>`;
    const blob = new Blob([htmlContent], { type: "text/html" });
    saveAs(blob, `${buildExportBaseName()}.html`);
  };

  const exportBaDsCohort1Pngs = async () => {
    if (!designRef.current || !isBaDsTemplate) return;

    const previousRecipientId = baDsRecipientId;
    setIsExporting(true);

    try {
      for (const recipient of BA_DS_COHORT_1_RECIPIENTS) {
        setBaDsRecipientId(recipient.certId);
        await waitForNextPaint();

        const dataUrl = await renderPngDataUrl();
        saveAs(dataUrl, `${buildExportBaseName(recipient)}.png`);
      }
    } catch (error) {
      console.error("Batch export failed:", error);
    } finally {
      if (previousRecipientId) {
        setBaDsRecipientId(previousRecipientId);
        await waitForNextPaint();
      }

      setIsExporting(false);
    }
  };

  const exportBaDsCohort1Pdf = async () => {
    if (!designRef.current || !isBaDsTemplate) return;

    const previousRecipientId = baDsRecipientId;
    const page = getPdfPageConfig(selectedSize);
    const batchFileName = `certificates-${selectedTemplate.id}-${selectedSize.id}-cohort-1.pdf`;
    let pdf = null;
    setIsExporting(true);

    try {
      for (const [index, recipient] of BA_DS_COHORT_1_RECIPIENTS.entries()) {
        setBaDsRecipientId(recipient.certId);
        await waitForNextPaint();

        const dataUrl = await renderPngDataUrl();
        if (index === 0) {
          pdf = new jsPDF({
            orientation: page.orientation,
            unit: "mm",
            format: [page.widthMm, page.heightMm],
            compress: true,
          });
        } else if (pdf) {
          pdf.addPage([page.widthMm, page.heightMm], page.orientation);
        }

        if (pdf) {
          pdf.addImage(
            dataUrl,
            "PNG",
            0,
            0,
            page.widthMm,
            page.heightMm,
            undefined,
            "FAST"
          );
        }
      }

      if (pdf) {
        pdf.save(batchFileName);
      }
    } catch (error) {
      console.error("Batch PDF export failed:", error);
    } finally {
      if (previousRecipientId) {
        setBaDsRecipientId(previousRecipientId);
        await waitForNextPaint();
      }

      setIsExporting(false);
    }
  };

  const maxPreviewWidth = 900;
  const maxPreviewHeight = 560;
  const previewScale = Math.min(
    1,
    maxPreviewWidth / selectedSize.width,
    maxPreviewHeight / selectedSize.height
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="title-block">
          <div className="title-eyebrow">Print Ready</div>
          <h1 className="title-main">Certificate Studio</h1>
        </div>
        <p className="title-sub">
          Build, preview, and export certificates in A4 and US Letter sizes.
        </p>
      </header>

      <div className="workspace">
        <section className="panel controls">
          <div className="panel-title">Design Controls</div>

          <div className="control-group">
            <label className="control-label" htmlFor="template-select">
              Template
            </label>
            <select
              id="template-select"
              className="control-select"
              value={templateId}
              onChange={(event) => setTemplateId(event.target.value)}
            >
              {CERTIFICATE_TEMPLATES.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="size-select">
              Certificate Size
            </label>
            <select
              id="size-select"
              className="control-select"
              value={sizeId}
              onChange={(event) => setSizeId(event.target.value)}
            >
              {CERTIFICATE_SIZES.map((size) => (
                <option key={size.id} value={size.id}>
                  {formatSizeLabel(size)}
                </option>
              ))}
            </select>
          </div>

          <div className="size-summary">
            <div className="size-value">
              {selectedSize.width} x {selectedSize.height} px
            </div>
            <div className="size-note">Optimized for 300 dpi printing.</div>
          </div>

          {isBaDsTemplate && previewRecipient ? (
            <div className="helper-card cohort-card">
              <div className="helper-title">BA/DS Cohort 1 Quick Download</div>

              <div className="control-group">
                <label className="control-label" htmlFor="bads-recipient-select">
                  Recipient Preview
                </label>
                <select
                  id="bads-recipient-select"
                  className="control-select"
                  value={baDsRecipientId}
                  onChange={(event) => setBaDsRecipientId(event.target.value)}
                  disabled={isExporting}
                >
                  {BA_DS_COHORT_1_RECIPIENTS.map((recipient) => (
                    <option key={recipient.certId} value={recipient.certId}>
                      {recipient.fullName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="cohort-meta">
                <div className="cohort-meta-line">
                  <span className="cohort-meta-label">Cert ID</span>
                  <span className="cohort-meta-value">{previewRecipient.certId}</span>
                </div>
                <div className="cohort-meta-line">
                  <span className="cohort-meta-label">Bitly Link</span>
                  <span className="cohort-meta-value">{previewRecipient.verifyUrl}</span>
                </div>
              </div>

              <div className="button-row">
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={exportBaDsCohort1Pngs}
                  disabled={isExporting}
                >
                  {isExporting ? "Exporting..." : "Export Cohort 1 PNGs"}
                </button>
                <button
                  type="button"
                  className="button button-ghost"
                  onClick={exportBaDsCohort1Pdf}
                  disabled={isExporting}
                >
                  {isExporting ? "Exporting..." : "Export Cohort 1 PDF"}
                </button>
              </div>

              <div className="helper-text">
                Use the regular export buttons below for the selected recipient.
                Batch export can download both Cohort 1 certificates as PNG files
                or as a single multi-page PDF.
              </div>
            </div>
          ) : null}

          <div className="control-group">
            <div className="control-label">Export</div>
            <div className="button-row">
              <button
                type="button"
                className="button button-primary"
                onClick={exportAsPng}
                disabled={isExporting}
              >
                {isExporting ? "Exporting..." : "Export PNG"}
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={exportAsPdf}
                disabled={isExporting}
              >
                Export PDF
              </button>
              <button
                type="button"
                className="button button-ghost"
                onClick={exportAsSvg}
                disabled={isExporting}
              >
                Export SVG
              </button>
              <button
                type="button"
                className="button button-ghost"
                onClick={exportAsHtml}
                disabled={isExporting}
              >
                Export HTML
              </button>
            </div>
          </div>

          <div className="helper-card">
            <div className="helper-title">Output Tips</div>
            <div className="helper-text">
              PDF is best for easy share/print delivery. PNG is best for
              high-resolution image output. SVG is ideal for editing, while HTML
              is useful for sharing the layout with developers.
            </div>
          </div>
        </section>

        <section className="panel preview">
          <div className="panel-title">Preview</div>
          <div className="preview-stage">
            <div
              className="preview-scale"
              style={{ transform: `scale(${previewScale})` }}
            >
              <div className="preview-frame">
                <div ref={designRef} className="design-surface">
                  <TemplateComponent
                    width={selectedSize.width}
                    height={selectedSize.height}
                    {...templateDataProps}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="preview-caption">
            Template: {selectedTemplate.name}
          </div>
        </section>
      </div>
    </div>
  );
}
