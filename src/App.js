import React, { useRef, useState } from 'react';
import { toPng, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import Data_School_Discount_flier from './Data_School_Discount_flier';

const FLIER_SIZE_OPTIONS = [
  { label: 'Instagram Square', width: 1080, height: 1080 },
  { label: 'Instagram Portrait', width: 1080, height: 1350 },
  { label: 'Instagram Story / Reel', width: 1080, height: 1920 },
  { label: 'Facebook Post', width: 1200, height: 630 },
  { label: 'Facebook Story', width: 1080, height: 1920 },
  { label: 'Twitter / X Post', width: 1600, height: 900 },
  { label: 'LinkedIn Post', width: 1200, height: 627 },
  { label: 'Pinterest Pin', width: 1000, height: 1500 },
  { label: 'YouTube Thumbnail', width: 1280, height: 720 },
  { label: 'WhatsApp Status', width: 1080, height: 1920 },
  { label: 'US Letter Flier (Portrait)', width: 2550, height: 3300 },
  { label: 'US Letter Flier (Landscape)', width: 3300, height: 2550 },
  { label: 'A4 Flier (Portrait)', width: 2480, height: 3508 },
  { label: 'A4 Flier (Landscape)', width: 3508, height: 2480 },
];

const CERTIFICATE_SIZE_OPTIONS = [
  { label: 'A4 Certificate (Landscape)', width: 3508, height: 2480 },
  { label: 'A4 Certificate (Portrait)', width: 2480, height: 3508 },
  { label: 'US Letter Certificate (Landscape)', width: 3300, height: 2550 },
  { label: 'US Letter Certificate (Portrait)', width: 2550, height: 3300 },
  { label: 'A3 Certificate (Landscape)', width: 4961, height: 3508 },
  { label: 'A3 Certificate (Portrait)', width: 3508, height: 4961 },
  { label: 'Tabloid Certificate (17x11 in)', width: 5100, height: 3300 },
  { label: 'Legal Certificate (Landscape)', width: 4200, height: 2550 },
  { label: 'Legal Certificate (Portrait)', width: 2550, height: 4200 },
  { label: 'Screen HD Certificate (16:9)', width: 1920, height: 1080 },
  { label: 'Screen Widescreen Certificate (3:2)', width: 1800, height: 1200 },
];

export default function App() {
  const designRef = useRef(null);
  const DesignComponent = Data_School_Discount_flier;
  const designComponentName =
    DesignComponent.displayName || DesignComponent.name || 'design';
  const isCertificate = designComponentName.toLowerCase().endsWith('_cert');
  const sizeOptions = isCertificate ? CERTIFICATE_SIZE_OPTIONS : FLIER_SIZE_OPTIONS;
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [isExporting, setIsExporting] = useState(false);
  const designSlug = isCertificate ? 'certificate' : 'flier';
  const fileNameBase = `${designSlug}-${designComponentName.replace(/_/g, '-').toLowerCase()}`;

  React.useEffect(() => {
    setSelectedSize(sizeOptions[0]);
  }, [sizeOptions]);

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
          `${fileNameBase}-${selectedSize.label
            .replace(/\s+/g, '-')
            .toLowerCase()}-${selectedSize.width}x${selectedSize.height}.png`
        );
      } catch (error) {
        console.error('Export failed:', error);
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
          `${fileNameBase}-${selectedSize.label
            .replace(/\s+/g, '-')
            .toLowerCase()}-${selectedSize.width}x${selectedSize.height}.svg`
        );
      } catch (error) {
        console.error('Export failed:', error);
      }
      setIsExporting(false);
    }
  };

  const exportAsHtml = () => {
    if (designRef.current) {
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduBridge Designer - ${selectedSize.label}</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      min-height: 100vh; 
      background: #111; 
    }
  </style>
</head>
<body>
  ${designRef.current.innerHTML}
</body>
</html>`;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      saveAs(
        blob,
        `${fileNameBase}-${selectedSize.label
          .replace(/\s+/g, '-')
          .toLowerCase()}-${selectedSize.width}x${selectedSize.height}.html`
      );
    }
  };

  // Calculate preview scale to fit in viewport
  const maxPreviewHeight = 600;
  const maxPreviewWidth = 900;
  const previewScale = Math.min(
    1,
    maxPreviewHeight / selectedSize.height,
    maxPreviewWidth / selectedSize.width
  );

  return (
    <div style={{ background: '#111', minHeight: '100vh', padding: '20px' }}>
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '24px',
          color: '#fff',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#5EB229',
            marginBottom: '8px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          EduBridge Academy
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>
          {isCertificate ? 'Certificate Designer & Exporter' : 'Flier Designer & Exporter'}
        </p>
        <p style={{ color: '#aaa', fontSize: '12px', marginTop: '4px' }}>
          Detected design: <strong style={{ color: '#F2C94C' }}>{designComponentName}</strong>{' '}
          ({isCertificate ? 'certificate' : 'flier'} mode)
        </p>
      </div>

      {/* Controls */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Size Dropdown */}
        <select
          value={sizeOptions.findIndex((s) => s.label === selectedSize.label)}
          onChange={(e) => setSelectedSize(sizeOptions[e.target.value])}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#154B54',
            color: 'white',
            cursor: 'pointer',
            minWidth: '240px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          {sizeOptions.map((size, index) => (
            <option key={index} value={index}>
              {size.label} ({size.width}×{size.height})
            </option>
          ))}
        </select>

        {/* Export PNG Button */}
        <button
          onClick={exportAsPng}
          disabled={isExporting}
          style={{
            padding: '12px 24px',
            background: '#5EB229',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: isExporting ? 'wait' : 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif',
            opacity: isExporting ? 0.7 : 1,
          }}
        >
          {isExporting ? 'Exporting...' : 'Export as PNG'}
        </button>

        {/* Export SVG Button */}
        <button
          onClick={exportAsSvg}
          disabled={isExporting}
          style={{
            padding: '12px 24px',
            background: '#F2C94C',
            color: '#154B54',
            border: 'none',
            borderRadius: '8px',
            cursor: isExporting ? 'wait' : 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif',
            opacity: isExporting ? 0.7 : 1,
          }}
        >
          Export as SVG
        </button>

        {/* Export HTML Button */}
        <button
          onClick={exportAsHtml}
          style={{
            padding: '12px 24px',
            background: '#016938',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Export as HTML
        </button>
      </div>

      {/* Size Info */}
      <div style={{ textAlign: 'center', marginBottom: '20px', color: '#888' }}>
        Current size: <span style={{ color: '#F2C94C', fontWeight: '600' }}>{selectedSize.width} × {selectedSize.height}</span> px
      </div>

      {/* Design Preview */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          transform: `scale(${previewScale})`,
          transformOrigin: 'top center',
        }}
      >
        <div
          ref={designRef}
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <DesignComponent
            width={selectedSize.width}
            height={selectedSize.height}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: 'center',
          marginTop: `${Math.max(40, selectedSize.height * previewScale + 40)}px`,
          paddingTop: '20px',
          borderTop: '1px solid #333',
          color: '#666',
          fontSize: '12px',
        }}
      >
        <p>Brand Colors: Teal #154B54 • Green #5EB229 • Dark Green #016938 • Gold #F2C94C</p>
      </div>
    </div>
  );
}
