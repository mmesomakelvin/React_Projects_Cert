import React, { useRef, useState } from "react";
import { toPng, toSvg } from "html-to-image";
import { saveAs } from "file-saver";
import OnlineCourseLunch from "./Onlinecourse_lunch";

const SIZE_OPTIONS = [
  { label: "Instagram Square", width: 1080, height: 1080 },
  { label: "Instagram Portrait", width: 1080, height: 1350 },
  { label: "Instagram Story / Reel", width: 1080, height: 1920 },
  { label: "Facebook Post", width: 1200, height: 630 },
  { label: "Facebook Story", width: 1080, height: 1920 },
  { label: "Twitter / X Post", width: 1600, height: 900 },
  { label: "LinkedIn Post", width: 1200, height: 627 },
  { label: "Pinterest Pin", width: 1000, height: 1500 },
  { label: "YouTube Thumbnail", width: 1280, height: 720 },
  { label: "WhatsApp Status", width: 1080, height: 1920 },
];

export default function App() {
  const designRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[0]);
  const [isExporting, setIsExporting] = useState(false);

  const exportAsPng = async () => {
    if (designRef.current) {
      setIsExporting(true);
      try {
        const dataUrl = await toPng(designRef.current, {
          width: selectedSize.width,
          height: selectedSize.height,
          pixelRatio: 2,
        });
        saveAs(
          dataUrl,
          `onlinecourse-launch-${selectedSize.label
            .replace(/\s+/g, "-")
            .toLowerCase()}-${selectedSize.width}x${selectedSize.height}.png`
        );
      } catch (error) {
        console.error("Export failed:", error);
      }
      setIsExporting(false);
    }
  };

  const exportAsSvg = async () => {
    if (designRef.current) {
      setIsExporting(true);
      try {
        const dataUrl = await toSvg(designRef.current, {
          width: selectedSize.width,
          height: selectedSize.height,
        });
        saveAs(
          dataUrl,
          `onlinecourse-launch-${selectedSize.label
            .replace(/\s+/g, "-")
            .toLowerCase()}-${selectedSize.width}x${selectedSize.height}.svg`
        );
      } catch (error) {
        console.error("Export failed:", error);
      }
      setIsExporting(false);
    }
  };

  const exportAsHtml = () => {
    if (!designRef.current) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EliteBridge Learning Flier - ${selectedSize.label}</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #111;
      padding: 24px;
    }
  </style>
</head>
<body>
  ${designRef.current.innerHTML}
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: "text/html" });
    saveAs(
      blob,
      `onlinecourse-launch-${selectedSize.label
        .replace(/\s+/g, "-")
        .toLowerCase()}-${selectedSize.width}x${selectedSize.height}.html`
    );
  };

  // Preview scaling
  const maxPreviewHeight = 600;
  const maxPreviewWidth = 950;
  const previewScale = Math.min(
    1,
    maxPreviewHeight / selectedSize.height,
    maxPreviewWidth / selectedSize.width
  );

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "24px", color: "#fff" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "#5EB229",
            marginBottom: "8px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          EliteBridge Learning
        </h1>
        <p style={{ color: "#888", fontSize: "14px" }}>
          Online Course Launch Flier Designer
        </p>
      </div>

      {/* Controls */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <select
          value={SIZE_OPTIONS.findIndex((s) => s.label === selectedSize.label)}
          onChange={(e) => setSelectedSize(SIZE_OPTIONS[e.target.value])}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#154B54",
            color: "white",
            cursor: "pointer",
            minWidth: "280px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {SIZE_OPTIONS.map((size, index) => (
            <option key={index} value={index}>
              {size.label} ({size.width}×{size.height})
            </option>
          ))}
        </select>

        <button
          onClick={exportAsPng}
          disabled={isExporting}
          style={{
            padding: "12px 24px",
            background: "#5EB229",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: isExporting ? "wait" : "pointer",
            fontWeight: 800,
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            opacity: isExporting ? 0.7 : 1,
          }}
        >
          {isExporting ? "Exporting..." : "Export as PNG"}
        </button>

        <button
          onClick={exportAsSvg}
          disabled={isExporting}
          style={{
            padding: "12px 24px",
            background: "#F2C94C",
            color: "#154B54",
            border: "none",
            borderRadius: "8px",
            cursor: isExporting ? "wait" : "pointer",
            fontWeight: 900,
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            opacity: isExporting ? 0.7 : 1,
          }}
        >
          Export as SVG
        </button>

        <button
          onClick={exportAsHtml}
          style={{
            padding: "12px 24px",
            background: "#016938",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 900,
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Export as HTML
        </button>
      </div>

      {/* Size Info */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#888",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Current size:{" "}
        <span style={{ color: "#F2C94C", fontWeight: 700 }}>
          {selectedSize.width} × {selectedSize.height}
        </span>{" "}
        px
      </div>

      {/* Design Preview */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          transform: `scale(${previewScale})`,
          transformOrigin: "top center",
        }}
      >
        <div
          ref={designRef}
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <OnlineCourseLunch
            width={selectedSize.width}
            height={selectedSize.height}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: `${Math.max(40, selectedSize.height * previewScale + 40)}px`,
          paddingTop: "20px",
          borderTop: "1px solid #333",
          color: "#666",
          fontSize: "12px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <p>
          Brand Colors: Deep Green #0E2E2C • Pine #11463E • Accent #5EB229 • Gold
          #F2C94C
        </p>
      </div>
    </div>
  );
}
