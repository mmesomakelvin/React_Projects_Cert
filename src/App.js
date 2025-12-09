import React, { useRef, useState } from 'react';
import { toPng, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import OnlineCourseLunch from './Onlinecourse_lunch';

const SIZE_OPTIONS = [
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
];

export default function App() {
  const designRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[0]);

  const exportAsPng = async () => {
    if (designRef.current) {
      const dataUrl = await toPng(designRef.current, {
        width: selectedSize.width,
        height: selectedSize.height,
        pixelRatio: 2
      });
      saveAs(dataUrl, `${selectedSize.label.replace(/\s+/g, '-').toLowerCase()}-${selectedSize.width}x${selectedSize.height}.png`);
    }
  };

  const exportAsSvg = async () => {
    if (designRef.current) {
      const dataUrl = await toSvg(designRef.current, {
        width: selectedSize.width,
        height: selectedSize.height
      });
      saveAs(dataUrl, `${selectedSize.label.replace(/\s+/g, '-').toLowerCase()}-${selectedSize.width}x${selectedSize.height}.svg`);
    }
  };

  const exportAsHtml = () => {
    if (designRef.current) {
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduBridge Flier - ${selectedSize.label}</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #111; }
  </style>
</head>
<body>
  ${designRef.current.innerHTML}
</body>
</html>`;
      
      const blob = new Blob([htmlContent], { type: 'text/html' });
      saveAs(blob, `${selectedSize.label.replace(/\s+/g, '-').toLowerCase()}-${selectedSize.width}x${selectedSize.height}.html`);
    }
  };

  const maxPreviewHeight = 600;
  const previewScale = Math.min(1, maxPreviewHeight / selectedSize.height, 900 / selectedSize.width);

  return (
    <div style={{ background: '#111', minHeight: '100vh', padding: '20px' }}>
      
      {/* Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        
        {/* Dropdown */}
        <select
          value={SIZE_OPTIONS.findIndex(s => s.label === selectedSize.label)}
          onChange={(e) => setSelectedSize(SIZE_OPTIONS[e.target.value])}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#333',
            color: 'white',
            cursor: 'pointer',
            minWidth: '220px'
          }}
        >
          {SIZE_OPTIONS.map((size, index) => (
            <option key={index} value={index}>
              {size.label} ({size.width}x{size.height})
            </option>
          ))}
        </select>

        {/* Export PNG Button */}
        <button 
          onClick={exportAsPng}
          style={{
            padding: '12px 24px',
            background: '#5EB229',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Export as PNG
        </button>

        {/* Export SVG Button */}
        <button 
          onClick={exportAsSvg}
          style={{
            padding: '12px 24px',
            background: '#F2C94C',
            color: '#154B54',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Export as SVG
        </button>

        {/* Export HTML Button */}
        <button 
          onClick={exportAsHtml}
          style={{
            padding: '12px 24px',
            background: '#E44D26',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Export as HTML
        </button>
      </div>

      {/* Size Info */}
      <div style={{ textAlign: 'center', marginBottom: '20px', color: '#888' }}>
        Current size: {selectedSize.width} x {selectedSize.height} px
      </div>

      {/* Design Preview */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        transform: `scale(${previewScale})`,
        transformOrigin: 'top center'
      }}>
        <div ref={designRef}>
          <OnlineCourseLunch width={selectedSize.width} height={selectedSize.height} />
        </div>
      </div>
    </div>
  );
}