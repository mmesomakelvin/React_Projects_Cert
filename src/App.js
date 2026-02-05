import React, { useMemo, useRef, useState } from "react";
import { toPng, toSvg } from "html-to-image";
import { saveAs } from "file-saver";
import MentJudgeCert from "./MentJudgeCert";
import SaParticipationCert from "./SaParticipationCert";
import "./App.css";

const CERTIFICATE_TEMPLATES = [
  {
    id: "mentor-judge",
    name: "Mentor and Judge Appreciation",
    component: MentJudgeCert,
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

export default function App() {
  const designRef = useRef(null);
  const [templateId, setTemplateId] = useState(CERTIFICATE_TEMPLATES[0].id);
  const [sizeId, setSizeId] = useState(CERTIFICATE_SIZES[0].id);
  const [isExporting, setIsExporting] = useState(false);

  const selectedTemplate =
    useMemo(
      () => CERTIFICATE_TEMPLATES.find((t) => t.id === templateId),
      [templateId]
    ) || CERTIFICATE_TEMPLATES[0];
  const selectedSize =
    useMemo(() => CERTIFICATE_SIZES.find((s) => s.id === sizeId), [sizeId]) ||
    CERTIFICATE_SIZES[0];

  const TemplateComponent = selectedTemplate.component;
  const exportBaseName = `certificate-${selectedTemplate.id}-${selectedSize.id}-${selectedSize.width}x${selectedSize.height}`;

  const exportAsPng = async () => {
    if (!designRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(designRef.current, {
        width: selectedSize.width,
        height: selectedSize.height,
        pixelRatio: 1,
        cacheBust: true,
      });
      saveAs(dataUrl, `${exportBaseName}.png`);
    } catch (error) {
      console.error("Export failed:", error);
    }
    setIsExporting(false);
  };

  const exportAsSvg = async () => {
    if (!designRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toSvg(designRef.current, {
        width: selectedSize.width,
        height: selectedSize.height,
      });
      saveAs(dataUrl, `${exportBaseName}.svg`);
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
    <title>Certificate - ${selectedTemplate.name}</title>
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
    saveAs(blob, `${exportBaseName}.html`);
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
              PNG is best for print-ready delivery. SVG is ideal for editing.
              HTML is useful for sharing the layout with developers.
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
