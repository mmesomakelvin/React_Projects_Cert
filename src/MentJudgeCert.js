import React from "react";

export default function MentJudgeCert({
  width = 1100,
  height = 700,

  award = "CERTIFICATE",
  subtitle = "OF APPRECIATION",
  recipient = "FULL NAME",
  citation =
    "This certificate is proudly presented in recognition of outstanding mentorship, guidance, and contribution to learner growth.",
  program = "EduBridge Academy - Mentorship Program",
  dateLabel = "DATE",
  dateValue = "12 Dec 2025",
  certId = "CERT ID: EBA-MENT-2025-0001",

  signatory1Name = "Program Director",
  signatory1Title = "EduBridge Academy",
  signatory2Name = "Head Judge",
  signatory2Title = "EduBridge Academy",

  // optional
  roleTag = "MENTOR / JUDGE",
}) {
  const BASE_W = 1100;
  const BASE_H = 700;
  const scale = Math.min(width / BASE_W, height / BASE_H);

  // EduBridge Brand Colors
  const brand = {
    teal: "#154B54",
    green: "#5EB229",
    darkGreen: "#016938",
    deepBlue: "#040084",
    purple: "#4A154B",
    goldLight: "#FFE76C",
    gold: "#F2C94C",
    white: "#FFFFFF",
    offWhite: "#F5FAFB",
    ink: "#0E1B1E",
  };

  const rgba = (hex, a) => {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `rgba(${r},${g},${b},${a})`;
  };

  const fontSize = {
    tiny: Math.round(11 * scale),
    small: Math.round(12 * scale),
    body: Math.round(15 * scale),
    program: Math.round(13 * scale),
    chip: Math.round(12 * scale),
    title: Math.round(54 * scale),
    subtitle: Math.round(18 * scale),
    name: Math.round(44 * scale),
    sigName: Math.round(13 * scale),
    sigTitle: Math.round(11 * scale),
    id: Math.round(12 * scale),
    value: Math.round(15 * scale),
  };

  const padX = Math.round(74 * scale);
  const padY = Math.round(52 * scale);
  const leftBarW = Math.round(width * 0.19);

  const medalSize = Math.round(width * 0.22);
  const medalX = Math.round(leftBarW * 0.52 - medalSize * 0.22);
  const medalY = Math.round(height * 0.18);

  const qrSize = Math.round(110 * scale);

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        borderRadius: Math.round(18 * scale),
        fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
        color: brand.ink,
        background: `
          radial-gradient(${Math.round(860 * scale)}px ${Math.round(
          420 * scale
        )}px at 78% 18%, ${rgba(brand.green, 0.10)}, transparent 60%),
          radial-gradient(${Math.round(760 * scale)}px ${Math.round(
          520 * scale
        )}px at 22% 80%, ${rgba(brand.deepBlue, 0.09)}, transparent 60%),
          linear-gradient(180deg, ${brand.white} 0%, ${brand.offWhite} 100%)
        `,
        boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
      }}
    >
      {/* ===================== SUBTLE PATTERN ===================== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 14px 14px, ${rgba(brand.teal, 0.07)} 2px, transparent 2.2px),
            radial-gradient(circle at 56px 56px, ${rgba(brand.teal, 0.045)} 2px, transparent 2.2px)
          `,
          backgroundSize: `${Math.round(78 * scale)}px ${Math.round(78 * scale)}px`,
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      {/* ===================== OUTER FRAME ===================== */}
      <div
        style={{
          position: "absolute",
          inset: Math.round(16 * scale),
          borderRadius: Math.round(16 * scale),
          border: `${Math.max(2, Math.round(2 * scale))}px solid ${rgba(brand.teal, 0.55)}`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: Math.round(34 * scale),
          borderRadius: Math.round(12 * scale),
          border: `${Math.max(1, Math.round(1 * scale))}px solid ${rgba(brand.teal, 0.18)}`,
          pointerEvents: "none",
        }}
      />

      {/* ===================== LEFT FEATURE STRIPE ===================== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: leftBarW,
          height: "100%",
          background: `
            linear-gradient(180deg,
              ${rgba(brand.deepBlue, 0.14)} 0%,
              ${rgba(brand.teal, 0.08)} 55%,
              ${rgba(brand.green, 0.10)} 100%
            )
          `,
        }}
      />

      {/* Accent ribbon with cut */}
      <div
        style={{
          position: "absolute",
          top: Math.round(36 * scale),
          left: Math.round(leftBarW * 0.32),
          width: Math.round(leftBarW * 0.30),
          height: Math.round(height * 0.80),
          borderRadius: Math.round(14 * scale),
          background: `linear-gradient(180deg,
            ${brand.deepBlue} 0%,
            ${brand.teal} 40%,
            ${brand.green} 100%
          )`,
          boxShadow: "0 14px 32px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}
      >
        {/* diagonal sheen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.22) 38%, rgba(255,255,255,0.00) 62%)",
            transform: "translateX(-30%)",
          }}
        />
        {/* bottom notch */}
        <div
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            right: 0,
            height: Math.round(38 * scale),
            background: brand.offWhite,
            clipPath: "polygon(0 0, 50% 75%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* ===================== TOP RIGHT "ROLE" CHIP ===================== */}
      <div
        style={{
          position: "absolute",
          top: Math.round(34 * scale),
          right: Math.round(34 * scale),
          display: "flex",
          alignItems: "center",
          gap: Math.round(10 * scale),
          padding: `${Math.round(10 * scale)}px ${Math.round(14 * scale)}px`,
          borderRadius: 999,
          background: rgba(brand.teal, 0.08),
          border: `1px solid ${rgba(brand.teal, 0.20)}`,
          backdropFilter: "blur(6px)",
        }}
      >
        <span
          style={{
            width: Math.round(10 * scale),
            height: Math.round(10 * scale),
            borderRadius: 999,
            background: `linear-gradient(180deg, ${brand.goldLight}, ${brand.gold})`,
            boxShadow: "0 8px 18px rgba(242,201,76,0.28)",
          }}
        />
        <span
          style={{
            fontSize: fontSize.chip,
            fontWeight: 900,
            letterSpacing: 1.8,
            color: brand.teal,
            textTransform: "uppercase",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {roleTag}
        </span>
      </div>

      {/* ===================== CERT ID ===================== */}
      <div
        style={{
          position: "absolute",
          bottom: Math.round(28 * scale),
          right: Math.round(34 * scale),
          fontSize: fontSize.id,
          fontWeight: 800,
          letterSpacing: 0.8,
          color: rgba(brand.ink, 0.55),
        }}
      >
        {certId}
      </div>

      {/* ===================== MEDAL / SEAL (SVG) ===================== */}
      <svg
        width={medalSize}
        height={medalSize}
        viewBox="0 0 240 240"
        style={{
          position: "absolute",
          left: medalX,
          top: medalY,
          filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.22))",
        }}
      >
        <defs>
          <radialGradient id="gGold" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor={brand.goldLight} />
            <stop offset="55%" stopColor={brand.gold} />
            <stop offset="100%" stopColor="#D6A900" />
          </radialGradient>
          <radialGradient id="gShine" cx="30%" cy="22%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.90)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id="gRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={rgba(brand.teal, 0.35)} />
            <stop offset="100%" stopColor={rgba(brand.deepBlue, 0.25)} />
          </linearGradient>
        </defs>

        {/* scalloped edge */}
        <g transform="translate(120 120)">
          {Array.from({ length: 26 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.cos((i * Math.PI) / 13) * 94}
              cy={Math.sin((i * Math.PI) / 13) * 94}
              r="12"
              fill="url(#gGold)"
              opacity="0.96"
            />
          ))}
        </g>

        {/* main disc */}
        <circle cx="120" cy="120" r="84" fill="url(#gGold)" />
        <circle cx="120" cy="120" r="70" fill="none" stroke="url(#gRing)" strokeWidth="3" />

        {/* inner badge */}
        <circle cx="120" cy="120" r="56" fill={rgba(brand.white, 0.22)} />
        <circle cx="120" cy="120" r="56" fill="none" stroke={rgba(brand.white, 0.35)} strokeWidth="1" />

        {/* icon */}
        <path
          d="M120 76l11 30h32l-26 17 10 31-27-19-27 19 10-31-26-17h32z"
          fill={brand.teal}
          opacity="0.95"
        />

        {/* shine */}
        <circle cx="98" cy="98" r="62" fill="url(#gShine)" />

        {/* micro text ring */}
        <text x="120" y="178" textAnchor="middle" fontSize="10" fontWeight="900" fill={rgba(brand.ink, 0.7)}>
          EDUBRIDGE - ACADEMY - EXCELLENCE
        </text>
      </svg>

      {/* ===================== MAIN CONTENT ===================== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: leftBarW,
          right: 0,
          bottom: 0,
          padding: `${padY}px ${padX}px`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: Math.round(10 * scale),
              padding: `${Math.round(10 * scale)}px ${Math.round(14 * scale)}px`,
              borderRadius: 999,
              background: rgba(brand.teal, 0.08),
              border: `1px solid ${rgba(brand.teal, 0.18)}`,
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: Math.round(12 * scale),
                height: Math.round(12 * scale),
                borderRadius: 999,
                background: `linear-gradient(180deg, ${brand.green}, ${brand.teal})`,
                boxShadow: "0 6px 16px rgba(94,178,41,0.25)",
              }}
            />
            <span style={{ fontWeight: 900, letterSpacing: 0.8, color: brand.teal, fontSize: fontSize.small }}>
              EDUBRIDGE ACADEMY
            </span>
          </div>

          {/* tiny verifier block */}
          <div style={{ display: "flex", alignItems: "center", gap: Math.round(12 * scale) }}>
            <div
              style={{
                width: qrSize,
                height: qrSize,
                borderRadius: Math.round(12 * scale),
                background: "linear-gradient(180deg, rgba(21,75,84,0.08), rgba(4,0,132,0.06))",
                border: `1px solid ${rgba(brand.teal, 0.18)}`,
                display: "grid",
                placeItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
              aria-hidden="true"
              title="Place verification QR here (optional)"
            >
              {/* faux-QR pattern */}
              <div
                style={{
                  width: "74%",
                  height: "74%",
                  opacity: 0.7,
                  backgroundImage: `
                    linear-gradient(90deg, rgba(14,27,30,0.18) 1px, transparent 1px),
                    linear-gradient(rgba(14,27,30,0.18) 1px, transparent 1px)
                  `,
                  backgroundSize: `${Math.round(8 * scale)}px ${Math.round(8 * scale)}px`,
                  borderRadius: Math.round(8 * scale),
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.22) 40%, rgba(255,255,255,0.00) 70%)",
                  transform: "translateX(-35%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Title block */}
        <div style={{ marginTop: Math.round(18 * scale), textAlign: "center" }}>
          <div
            style={{
              fontSize: fontSize.title,
              fontWeight: 900,
              letterSpacing: 3,
              color: brand.teal,
              lineHeight: 1.02,
            }}
          >
            {award}
          </div>
          <div
            style={{
              marginTop: Math.round(6 * scale),
              fontSize: fontSize.subtitle,
              fontWeight: 800,
              letterSpacing: 5,
              color: rgba(brand.ink, 0.62),
            }}
          >
            {subtitle}
          </div>

          {/* Decorative divider with center dot */}
          <div
            style={{
              width: "62%",
              margin: `${Math.round(14 * scale)}px auto 0`,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${rgba(brand.teal, 0.55)}, transparent)`,
              position: "relative",
              opacity: 0.7,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -Math.round(4 * scale),
                left: "50%",
                transform: "translateX(-50%)",
                width: Math.round(10 * scale),
                height: Math.round(10 * scale),
                borderRadius: 999,
                background: `linear-gradient(180deg, ${brand.goldLight}, ${brand.gold})`,
                boxShadow: "0 10px 18px rgba(242,201,76,0.25)",
              }}
            />
          </div>
        </div>

        {/* Presented to */}
        <div
          style={{
            textAlign: "center",
            marginTop: Math.round(26 * scale),
            fontSize: fontSize.small,
            letterSpacing: 2.4,
            color: rgba(brand.ink, 0.55),
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          THIS CERTIFICATE IS PRESENTED TO
        </div>

        {/* Recipient name with glow underline */}
        <div
          style={{
            textAlign: "center",
            marginTop: Math.round(10 * scale),
            fontSize: fontSize.name,
            fontWeight: 900,
            letterSpacing: 1.2,
            color: brand.deepBlue,
          }}
        >
          {recipient}
        </div>

        <div
          style={{
            width: "66%",
            height: Math.max(1, Math.round(1 * scale)),
            margin: `${Math.round(10 * scale)}px auto 0`,
            background: `linear-gradient(90deg, transparent, ${rgba(brand.deepBlue, 0.30)}, transparent)`,
          }}
        />

        {/* Citation */}
        <div
          style={{
            maxWidth: "78%",
            margin: `${Math.round(16 * scale)}px auto 0`,
            textAlign: "center",
            fontSize: fontSize.body,
            lineHeight: 1.75,
            color: rgba(brand.ink, 0.72),
          }}
        >
          {citation}
        </div>

        <div
          style={{
            marginTop: Math.round(12 * scale),
            textAlign: "center",
            fontSize: fontSize.program,
            letterSpacing: 1.4,
            color: rgba(brand.teal, 0.78),
            fontWeight: 900,
          }}
        >
          {program}
        </div>

        {/* Bottom row */}
        <div
          style={{
            marginTop: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: Math.round(18 * scale),
            alignItems: "end",
            paddingTop: Math.round(18 * scale),
          }}
        >
          {/* Date */}
          <div style={{ display: "flex", flexDirection: "column", gap: Math.round(6 * scale) }}>
            <div
              style={{
                fontSize: fontSize.tiny,
                letterSpacing: 2,
                color: rgba(brand.ink, 0.55),
                fontWeight: 900,
              }}
            >
              {dateLabel}
            </div>
            <div style={{ fontSize: fontSize.value, fontWeight: 900, color: brand.ink }}>{dateValue}</div>

            {/* tiny footer micro-copy */}
            <div style={{ marginTop: Math.round(10 * scale), fontSize: fontSize.tiny, color: rgba(brand.ink, 0.45) }}>
              Verified by EduBridge Academy
            </div>
          </div>

          {/* Signatures */}
          {[
            { name: signatory1Name, title: signatory1Title },
            { name: signatory2Name, title: signatory2Title },
          ].map((sig, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: Math.round(8 * scale),
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "86%",
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${rgba(brand.teal, 0.40)}, transparent)`,
                }}
              />
              <div style={{ fontSize: fontSize.sigName, fontWeight: 900, letterSpacing: 0.4 }}>{sig.name}</div>
              <div style={{ fontSize: fontSize.sigTitle, color: rgba(brand.ink, 0.55), fontWeight: 700 }}>
                {sig.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== CORNER ORNAMENTS ===================== */}
      <div
        style={{
          position: "absolute",
          top: Math.round(18 * scale),
          left: Math.round(18 * scale),
          width: Math.round(90 * scale),
          height: Math.round(90 * scale),
          borderTop: `${Math.max(2, Math.round(2 * scale))}px solid ${rgba(brand.teal, 0.35)}`,
          borderLeft: `${Math.max(2, Math.round(2 * scale))}px solid ${rgba(brand.teal, 0.35)}`,
          borderTopLeftRadius: Math.round(16 * scale),
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: Math.round(18 * scale),
          right: Math.round(18 * scale),
          width: Math.round(90 * scale),
          height: Math.round(90 * scale),
          borderBottom: `${Math.max(2, Math.round(2 * scale))}px solid ${rgba(brand.teal, 0.35)}`,
          borderRight: `${Math.max(2, Math.round(2 * scale))}px solid ${rgba(brand.teal, 0.35)}`,
          borderBottomRightRadius: Math.round(16 * scale),
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
