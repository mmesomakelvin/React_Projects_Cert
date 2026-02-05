import React from "react";

export default function StackronAcademyCert({
  width = 3508,
  height = 2480,
  recipient = "{{FULL_NAME}}",
  award = "CERTIFICATE OF COMPLETION",
  course = "Data Science and Business Analytics Training",
  programCode = "BA/DS Training",
  dateRange = "July 2025 - January 2026",
  issueDate = "January 31, 2026",
  certificateId = "{{CERT_ID}}",
  verifyUrl = "{{VERIFY_URL}}",
  signatory1Name = "Program Director",
  signatory1Title = "Stackron Academy",
  signatory2Name = "Lead Instructor",
  signatory2Title = "Stackron Academy",
}) {
  const BASE_W = 3508;
  const BASE_H = 2480;
  const scale = Math.min(width / BASE_W, height / BASE_H);

  const safe = Math.round(120 * scale);
  const gap = Math.round(40 * scale);
  const rightPanelW = Math.round(width * 0.29);

  const brand = {
    teal: "#18a7a5",
    tealDeep: "#0a6e6d",
    greenDark: "#0f4f4d",
    ink: "#1b2b2c",
    cream: "#f8f4eb",
    mist: "#eef6f2",
    panel: "#eef1e7",
    gold: "#d8b568",
    line: "rgba(15,79,77,0.18)",
    muted: "rgba(27,43,44,0.55)",
  };

  const fontSize = {
    label: Math.round(24 * scale),
    body: Math.round(28 * scale),
    small: Math.round(26 * scale),
    title: Math.round(72 * scale),
    name: Math.round(78 * scale),
    course: Math.round(36 * scale),
    eyebrow: Math.round(28 * scale),
    signature: Math.round(30 * scale),
    id: Math.round(26 * scale),
  };

  const headerEmblemSize = Math.round(70 * scale);
  const borderRadius = Math.round(26 * scale);

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: brand.ink,
        background: `linear-gradient(135deg, ${brand.cream} 0%, ${brand.mist} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Double border */}
      <div
        style={{
          position: "absolute",
          inset: safe,
          borderRadius: borderRadius,
          border: `2px solid rgba(15,79,77,0.35)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: safe + Math.round(18 * scale),
          borderRadius: borderRadius,
          border: `2px solid rgba(15,79,77,0.2)`,
          pointerEvents: "none",
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "55%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: Math.round(18 * scale),
          opacity: 0.07,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: Math.round(220 * scale),
            height: Math.round(140 * scale),
            position: "relative",
          }}
        >
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: idx * Math.round(26 * scale),
                height: Math.round(44 * scale),
                borderRadius: Math.round(8 * scale),
                background: idx === 0 ? brand.teal : idx === 1 ? brand.tealDeep : brand.greenDark,
                transform: `skewX(-12deg)`,
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontSize: Math.round(72 * scale),
            fontWeight: 700,
            letterSpacing: 6,
            color: brand.tealDeep,
          }}
        >
          STACKRONACADEMY
        </div>
      </div>

      {/* Right panel */}
      <div
        style={{
          position: "absolute",
          top: safe,
          right: safe,
          bottom: safe,
          width: rightPanelW,
          background: brand.panel,
          borderRadius: borderRadius,
          boxShadow: "0 20px 40px rgba(15,79,77,0.12)",
          padding: `${Math.round(36 * scale)}px`,
          display: "flex",
          flexDirection: "column",
          gap: Math.round(20 * scale),
        }}
      >
        {/* Verification card */}
        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            borderRadius: Math.round(20 * scale),
            border: `1px solid ${brand.line}`,
            padding: `${Math.round(28 * scale)}px`,
            boxShadow: "0 12px 24px rgba(15,79,77,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: Math.round(18 * scale),
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: fontSize.label,
                fontWeight: 700,
                letterSpacing: 2.4,
                color: brand.muted,
              }}
            >
              VERIFIED CERTIFICATE
            </div>
            <div
              style={{
                margin: `${Math.round(10 * scale)}px auto 0`,
                height: Math.max(2, Math.round(2 * scale)),
                width: "60%",
                background: `linear-gradient(90deg, ${brand.gold}, #f5d98d)`,
                borderRadius: 999,
              }}
            />
          </div>

          {/* Seal */}
          <div
            style={{
              width: Math.round(150 * scale),
              height: Math.round(150 * scale),
              borderRadius: "50%",
              border: `${Math.round(6 * scale)}px solid ${brand.gold}`,
              display: "grid",
              placeItems: "center",
              alignSelf: "center",
              boxShadow: "0 10px 18px rgba(15,79,77,0.12)",
            }}
          >
            <div
              style={{
                width: Math.round(40 * scale),
                height: Math.round(40 * scale),
                borderRadius: "50%",
                background: brand.tealDeep,
              }}
            />
          </div>

          {/* Fields */}
          {[
            { label: "PROGRAM", value: programCode },
            { label: "DURATION", value: dateRange },
            { label: "ISSUE DATE", value: issueDate },
            { label: "CERT ID", value: certificateId },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontSize: fontSize.label,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: brand.muted,
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: fontSize.body, fontWeight: 700 }}>{item.value}</div>
            </div>
          ))}

          {/* QR + verify */}
          <div style={{ marginTop: Math.round(6 * scale) }}>
            <div
              style={{
                fontSize: fontSize.label,
                fontWeight: 700,
                letterSpacing: 2,
                color: brand.muted,
                marginBottom: Math.round(10 * scale),
              }}
            >
              Scan to verify
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: Math.round(16 * scale),
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: fontSize.small,
                  color: brand.ink,
                  lineHeight: 1.3,
                  wordBreak: "break-all",
                }}
              >
                {verifyUrl}
              </div>
              <div
                style={{
                  width: Math.round(140 * scale),
                  height: Math.round(140 * scale),
                  background: "#fff",
                  border: `2px solid rgba(15,79,77,0.2)`,
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridTemplateRows: "repeat(6, 1fr)",
                  gap: Math.round(4 * scale),
                  padding: Math.round(8 * scale),
                }}
              >
                {[...Array(36)].map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      background:
                        [0, 1, 4, 5, 6, 11, 12, 18, 19, 24, 30, 31, 34, 35].includes(idx)
                          ? brand.greenDark
                          : "transparent",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left content */}
      <div
        style={{
          position: "absolute",
          top: safe,
          left: safe,
          right: safe + rightPanelW + gap,
          bottom: safe,
          display: "flex",
          flexDirection: "column",
          gap: Math.round(16 * scale),
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: Math.round(20 * scale) }}>
          <div
            style={{
              width: headerEmblemSize,
              height: headerEmblemSize,
              borderRadius: Math.round(12 * scale),
              background: brand.tealDeep,
              boxShadow: "0 10px 18px rgba(15,79,77,0.18)",
              display: "grid",
              placeItems: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: Math.round(32 * scale),
            }}
          >
            S
          </div>
          <div>
            <div
              style={{
                fontSize: fontSize.eyebrow,
                letterSpacing: 2.4,
                fontWeight: 700,
                color: brand.tealDeep,
              }}
            >
              STACKRONACADEMY
            </div>
            <div style={{ fontSize: fontSize.small, color: brand.muted }}>
              Where innovation begins and futures are built
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: Math.round(20 * scale),
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: fontSize.title,
            fontWeight: 700,
            letterSpacing: 2,
            color: brand.tealDeep,
          }}
        >
          {award}
        </div>

        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: fontSize.name,
            fontWeight: 700,
            color: brand.greenDark,
          }}
        >
          {recipient}
        </div>

        <div style={{ fontSize: fontSize.body, color: brand.muted, fontStyle: "italic" }}>
          has successfully completed
        </div>

        <div style={{ fontSize: fontSize.course, fontWeight: 700, color: brand.tealDeep }}>
          {course}
        </div>

        <div
          style={{
            fontSize: fontSize.body,
            color: brand.muted,
            lineHeight: 1.6,
            maxWidth: "88%",
          }}
        >
          Completed during the training period of {dateRange} with demonstrated mastery of data science
          fundamentals and business analytics applications.
        </div>

        <div style={{ flex: 1 }} />

        {/* Signatures */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: Math.round(32 * scale),
            alignItems: "end",
            maxWidth: "85%",
          }}
        >
          {[{ name: signatory1Name, title: signatory1Title }, { name: signatory2Name, title: signatory2Title }].map(
            (sig, idx) => (
              <div key={idx}>
                <div
                  style={{
                    height: Math.max(1, Math.round(2 * scale)),
                    background: `linear-gradient(90deg, transparent, ${brand.tealDeep}, transparent)`,
                    marginBottom: Math.round(10 * scale),
                  }}
                />
                <div style={{ fontSize: fontSize.signature, fontWeight: 700 }}>{sig.name}</div>
                <div style={{ fontSize: fontSize.small, color: brand.muted }}>{sig.title}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
