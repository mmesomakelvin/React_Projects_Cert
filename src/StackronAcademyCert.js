import React from "react";

export default function StackronAcademyCert({
  width = 3508,
  height = 2480,
  recipient = "FULL NAME",
  award = "CERTIFICATE OF COMPLETION",
  course = "Data Science and Business Analytics Training",
  dateRange = "July 2025 - January 2026",
  issueDate = "January 31, 2026",
  certificateId = "CERT-ID: SA-DSBA-2026-0001",
  signatory1Name = "Program Director",
  signatory1Title = "Stackron Academy",
  signatory2Name = "Lead Instructor",
  signatory2Title = "Stackron Academy",
}) {
  const BASE_W = 3508;
  const BASE_H = 2480;
  const scale = Math.min(width / BASE_W, height / BASE_H);

  const brand = {
    teal: "#18a7a5",
    tealDeep: "#0a6e6d",
    greenDark: "#0f4f4d",
    ink: "#1b2b2c",
    cream: "#f6f2e7",
    paper: "#fbfaf6",
    gold: "#d8b568",
  };

  const fontSize = {
    eyebrow: Math.round(20 * scale),
    title: Math.round(90 * scale),
    subtitle: Math.round(26 * scale),
    name: Math.round(78 * scale),
    body: Math.round(26 * scale),
    label: Math.round(18 * scale),
    small: Math.round(16 * scale),
    signature: Math.round(22 * scale),
    id: Math.round(15 * scale),
    cardValue: Math.round(22 * scale),
  };

  const frameInset = Math.round(36 * scale);
  const padding = Math.round(180 * scale);
  const headerHeight = Math.round(150 * scale);
  const contentTop = Math.round(frameInset * 2.2 + headerHeight + 40 * scale);
  const cardRadius = Math.round(18 * scale);

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
        background: brand.cream,
        color: brand.ink,
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 18%, rgba(24,167,165,0.12) 0%, transparent 45%), radial-gradient(circle at 80% 78%, rgba(15,79,77,0.10) 0%, transparent 48%)",
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img
          src="/stackron-logo.png"
          alt=""
          style={{
            width: "62%",
            opacity: 0.06,
            filter: "grayscale(1)",
          }}
        />
      </div>

      {/* Double frame */}
      <div
        style={{
          position: "absolute",
          inset: frameInset,
          borderRadius: Math.round(30 * scale),
          border: `${Math.max(2, Math.round(2 * scale))}px solid rgba(15,79,77,0.35)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: frameInset * 2,
          borderRadius: Math.round(22 * scale),
          border: `${Math.max(1, Math.round(1 * scale))}px solid rgba(15,79,77,0.2)`,
        }}
      />

      {/* Top band */}
      <div
        style={{
          position: "absolute",
          top: frameInset * 2.2,
          left: frameInset * 2.2,
          right: frameInset * 2.2,
          height: headerHeight,
          borderRadius: Math.round(22 * scale),
          background: `linear-gradient(120deg, ${brand.teal} 0%, ${brand.tealDeep} 40%, ${brand.greenDark} 100%)`,
          boxShadow: "0 16px 30px rgba(15,79,77,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${Math.round(52 * scale)}px`,
          color: "white",
          gap: Math.round(30 * scale),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: Math.round(18 * scale) }}>
          <img
            src="/stackron-logo.png"
            alt="Stackron Academy logo"
            style={{
              height: Math.round(86 * scale),
              width: "auto",
              display: "block",
            }}
          />
          <div>
            <div style={{ fontSize: fontSize.eyebrow, letterSpacing: 2.6, fontWeight: 700 }}>
              STACKRON ACADEMY
            </div>
            <div style={{ fontSize: fontSize.small, opacity: 0.85 }}>
              Where innovation begins and futures are built
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: fontSize.label,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 700,
            opacity: 0.85,
          }}
        >
          Official Certificate
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          position: "absolute",
          top: contentTop,
          left: padding,
          right: padding,
          bottom: padding,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: Math.round(22 * scale),
        }}
      >
        <div
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: fontSize.title,
            letterSpacing: 2,
            color: brand.tealDeep,
            fontWeight: 700,
          }}
        >
          {award}
        </div>

        <div
          style={{
            width: "58%",
            height: Math.max(1, Math.round(2 * scale)),
            background: `linear-gradient(90deg, transparent, ${brand.gold}, transparent)`,
          }}
        />

        <div
          style={{
            fontSize: fontSize.subtitle,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(27,43,44,0.65)",
            fontWeight: 700,
          }}
        >
          Presented to
        </div>

        <div
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: fontSize.name,
            color: brand.greenDark,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          {recipient}
        </div>

        <div
          style={{
            maxWidth: "72%",
            fontSize: fontSize.body,
            lineHeight: 1.65,
            color: "rgba(27,43,44,0.75)",
          }}
        >
          This certificate is awarded for the successful completion of the{" "}
          <strong>{course}</strong> held from <strong>{dateRange}</strong>.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: Math.round(16 * scale),
            width: "100%",
            maxWidth: Math.round(1800 * scale),
            marginTop: Math.round(8 * scale),
          }}
        >
          {[
            { label: "Program", value: "Professional Training" },
            { label: "Duration", value: dateRange },
            { label: "Issue Date", value: issueDate },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(15,79,77,0.18)",
                borderRadius: cardRadius,
                padding: `${Math.round(14 * scale)}px ${Math.round(18 * scale)}px`,
                boxShadow: "0 10px 18px rgba(15,79,77,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: fontSize.label,
                  textTransform: "uppercase",
                  letterSpacing: 2.2,
                  color: "rgba(27,43,44,0.55)",
                  fontWeight: 700,
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: fontSize.cardValue, fontWeight: 700 }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Seal */}
        <div
          style={{
            marginTop: Math.round(4 * scale),
            width: Math.round(230 * scale),
            height: Math.round(230 * scale),
            borderRadius: "50%",
            background: `conic-gradient(from 160deg, ${brand.gold} 0deg, #f5d98d 120deg, ${brand.gold} 240deg, #f5d98d 360deg)`,
            display: "grid",
            placeItems: "center",
            boxShadow: "0 18px 30px rgba(15,79,77,0.25)",
          }}
        >
          <div
            style={{
              width: Math.round(150 * scale),
              height: Math.round(150 * scale),
              borderRadius: "50%",
              background: brand.paper,
              border: `${Math.max(2, Math.round(2 * scale))}px solid rgba(15,79,77,0.25)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: Math.round(6 * scale),
              textTransform: "uppercase",
              fontWeight: 800,
              color: brand.tealDeep,
              letterSpacing: 2,
              fontSize: Math.round(16 * scale),
            }}
          >
            <div>Stackron</div>
            <div style={{ fontSize: Math.round(12 * scale), letterSpacing: 1.5 }}>Academy</div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "end",
            gap: Math.round(24 * scale),
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: fontSize.label,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(27,43,44,0.5)",
              }}
            >
              Certificate ID
            </div>
            <div style={{ fontSize: fontSize.id, fontWeight: 700, letterSpacing: 1 }}>
              {certificateId}
            </div>
          </div>

          {[{ name: signatory1Name, title: signatory1Title }, { name: signatory2Name, title: signatory2Title }].map(
            (sig, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: Math.round(1 * scale),
                    background: `linear-gradient(90deg, transparent, ${brand.tealDeep}, transparent)`,
                    marginBottom: Math.round(8 * scale),
                  }}
                />
                <div style={{ fontSize: fontSize.signature, fontWeight: 700 }}>{sig.name}</div>
                <div style={{ fontSize: fontSize.small, color: "rgba(27,43,44,0.6)" }}>{sig.title}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
