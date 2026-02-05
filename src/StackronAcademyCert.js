import React from "react";

const StackronAcademyCert = ({
  width = 3508,
  height = 2480,
  fullName = "{{FULL_NAME}}",
  certId = "{{CERT_ID}}",
  verifyUrl = "{{VERIFY_URL}}",
  programName = "Data Science and Business Analytics Training",
  programCode = "BA/DS Training",
  duration = "July 2025 - January 2026",
  issueDate = "January 31, 2026",
  signatureName = "Academy Director",
  signatureTitle = "Program Director and CEO",
}) => {
  const BASE_W = 3508;
  const BASE_H = 2480;
  const scale = Math.min(width / BASE_W, height / BASE_H);

  const safe = Math.round(120 * scale);
  const borderThickness = Math.round(64 * scale);
  const contentPadding = borderThickness + Math.round(48 * scale);
  const gap = Math.round(40 * scale);

  const brand = {
    teal: "#0d9488",
    tealDark: "#0f766e",
    tealLight: "#14b8a6",
    ink: "#1f2a2e",
    muted: "#6b7474",
    pale: "#f4f2ea",
    mist: "#eef6f2",
    border: "#dbeafe",
    borderLine: "#b9d5f5",
    panel: "#f8f8f5",
    gold: "#d6b86a",
  };

  const fontSize = {
    label: Math.round(26 * scale),
    body: Math.round(30 * scale),
    small: Math.round(26 * scale),
    title: Math.round(80 * scale),
    name: Math.round(88 * scale),
    program: Math.round(38 * scale),
    signature: Math.round(34 * scale),
  };

  const containerW = width - safe * 2;
  const containerH = height - safe * 2;
  const contentW = containerW - contentPadding * 2;
  const rightW = Math.round(contentW * 0.33);

  const HexBadge = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg
        width={Math.round(180 * scale)}
        height={Math.round(210 * scale)}
        viewBox="0 0 140 160"
        style={{ filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.18))" }}
      >
        <defs>
          <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={brand.tealLight} />
            <stop offset="100%" stopColor={brand.tealDark} />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor={brand.teal} />
          </linearGradient>
        </defs>
        <polygon
          points="70,0 140,40 140,120 70,160 0,120 0,40"
          fill="url(#badgeGradient)"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <polygon
          points="70,12 128,46 128,114 70,148 12,114 12,46"
          fill="url(#innerGradient)"
          stroke="#60a5fa"
          strokeWidth="1"
        />
        <g transform="translate(45, 55)">
          <circle cx="25" cy="25" r="22" fill="none" stroke="white" strokeWidth="2" />
          <ellipse cx="25" cy="25" rx="10" ry="22" fill="none" stroke="white" strokeWidth="1.5" />
          <line x1="3" y1="25" x2="47" y2="25" stroke="white" strokeWidth="1.5" />
          <path d="M8,15 Q25,12 42,15" fill="none" stroke="white" strokeWidth="1" />
          <path d="M8,35 Q25,38 42,35" fill="none" stroke="white" strokeWidth="1" />
        </g>
      </svg>
      <div style={{ marginTop: Math.round(18 * scale), textAlign: "center", maxWidth: Math.round(200 * scale) }}>
        <div style={{ fontSize: fontSize.small, fontWeight: 700, color: brand.ink }}>
          Data Science and
        </div>
        <div style={{ fontSize: fontSize.small, fontWeight: 700, color: brand.ink }}>
          Business Analytics
        </div>
        <div style={{ fontSize: fontSize.small, fontWeight: 700, color: brand.ink }}>
          Training
        </div>
      </div>
    </div>
  );

  const StackLogo = () => (
    <div style={{ display: "flex", alignItems: "center", gap: Math.round(16 * scale) }}>
      <svg width={Math.round(56 * scale)} height={Math.round(56 * scale)} viewBox="0 0 40 40">
        <polygon points="20,2 38,12 38,32 20,42 2,32 2,12" fill={brand.teal} opacity="0.9" />
        <polygon points="20,8 32,15 32,29 20,36 8,29 8,15" fill={brand.tealLight} />
        <polygon points="20,14 26,18 26,26 20,30 14,26 14,18" fill="white" />
      </svg>
      <span
        style={{
          fontSize: fontSize.program,
          fontWeight: 700,
          letterSpacing: 1.2,
          color: brand.tealDark,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        StackronAcademy
      </span>
    </div>
  );

  return (
    <div
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${brand.pale}, ${brand.mist})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: safe,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: containerW,
          height: containerH,
          background: "#fff",
          boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}
      >
        {/* Checkered border */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: borderThickness,
              background:
                "repeating-conic-gradient(from 0deg, #dbeafe 0deg 90deg, transparent 90deg 180deg) 0 0 / 16px 16px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: borderThickness,
              background:
                "repeating-conic-gradient(from 0deg, #dbeafe 0deg 90deg, transparent 90deg 180deg) 0 0 / 16px 16px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: borderThickness,
              background:
                "repeating-conic-gradient(from 0deg, #dbeafe 0deg 90deg, transparent 90deg 180deg) 0 0 / 16px 16px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: borderThickness,
              background:
                "repeating-conic-gradient(from 0deg, #dbeafe 0deg 90deg, transparent 90deg 180deg) 0 0 / 16px 16px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: borderThickness + Math.round(24 * scale),
              border: `2px solid ${brand.borderLine}`,
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            height: "100%",
            padding: contentPadding,
            display: "flex",
            gap,
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingRight: gap }}>
            <div style={{ marginBottom: Math.round(36 * scale) }}>
              <StackLogo />
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div
                style={{
                  fontSize: fontSize.small,
                  color: brand.muted,
                  marginBottom: Math.round(12 * scale),
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                This certificate is awarded to
              </div>

              <div
                style={{
                  fontSize: fontSize.name,
                  fontWeight: 700,
                  color: brand.ink,
                  marginBottom: Math.round(30 * scale),
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {fullName}
              </div>

              <div
                style={{
                  fontSize: fontSize.small,
                  color: brand.muted,
                  marginBottom: Math.round(10 * scale),
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                For successfully completing the
              </div>

              <div
                style={{
                  fontSize: fontSize.program,
                  fontWeight: 700,
                  color: brand.tealDark,
                  marginBottom: Math.round(14 * scale),
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {programName}
              </div>

              <div style={{ fontSize: fontSize.small, color: brand.muted, maxWidth: "80%", lineHeight: 1.6 }}>
                Completed during the training period of {duration} with demonstrated mastery of data science
                fundamentals and business analytics applications.
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: gap }}>
              <div>
                <div style={{ fontSize: fontSize.body, fontWeight: 700, color: brand.ink }}>{issueDate}</div>
                <div style={{ fontSize: fontSize.small, color: brand.muted, fontStyle: "italic" }}>
                  Date of Completion
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: fontSize.signature,
                    color: brand.muted,
                    fontStyle: "italic",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {signatureName}
                </div>
                <div style={{ fontSize: fontSize.small, color: brand.muted }}>{signatureTitle}</div>
              </div>
            </div>

            <div style={{ marginTop: Math.round(24 * scale), paddingTop: Math.round(16 * scale), borderTop: "1px solid #eef1f0" }}>
              <div style={{ fontSize: fontSize.label, color: brand.muted }}>
                Verify at: {verifyUrl} | Certificate ID: {certId}
              </div>
            </div>
          </div>

          <div style={{ width: rightW, display: "flex", justifyContent: "center", paddingTop: Math.round(20 * scale) }}>
            <HexBadge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackronAcademyCert;
