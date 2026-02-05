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
    panel: "#eef1e7",
  };

  const fontSize = {
    small: Math.round(16 * scale),
    label: Math.round(18 * scale),
    eyebrow: Math.round(20 * scale),
    title: Math.round(70 * scale),
    name: Math.round(74 * scale),
    body: Math.round(26 * scale),
    course: Math.round(34 * scale),
    signature: Math.round(22 * scale),
    id: Math.round(15 * scale),
  };

  const frameInset = Math.round(34 * scale);
  const innerInset = Math.round(110 * scale);
  const rightPanelWidth = Math.round(width * 0.26);

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
            width: "60%",
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

      {/* Inner layout */}
      <div
        style={{
          position: "absolute",
          inset: innerInset,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: Math.round(40 * scale),
          alignItems: "stretch",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: Math.round(18 * scale),
          }}
        >
          {/* Brand row */}
          <div style={{ display: "flex", alignItems: "center", gap: Math.round(18 * scale) }}>
            <img
              src="/stackron-logo.png"
              alt="Stackron Academy logo"
              style={{
                height: Math.round(90 * scale),
                width: "auto",
                display: "block",
              }}
            />
            <div>
              <div style={{ fontSize: fontSize.eyebrow, letterSpacing: 2.6, fontWeight: 700 }}>
                STACKRON ACADEMY
              </div>
              <div style={{ fontSize: fontSize.small, opacity: 0.8 }}>
                Where innovation begins and futures are built
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: fontSize.label,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(27,43,44,0.55)",
              fontWeight: 700,
            }}
          >
            {issueDate}
          </div>

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
              fontSize: fontSize.body,
              color: "rgba(27,43,44,0.7)",
              fontStyle: "italic",
            }}
          >
            has successfully completed
          </div>

          <div
            style={{
              fontSize: fontSize.course,
              color: brand.tealDeep,
              fontWeight: 700,
              lineHeight: 1.3,
              maxWidth: "80%",
            }}
          >
            {course}
          </div>

          <div
            style={{
              fontSize: fontSize.body,
              color: "rgba(27,43,44,0.7)",
              maxWidth: "85%",
              lineHeight: 1.6,
            }}
          >
            Completed during the training period of <strong>{dateRange}</strong> with
            demonstrated mastery of data science fundamentals and business analytics
            applications.
          </div>

          <div style={{ flex: 1 }} />

          {/* Signatures */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: Math.round(28 * scale),
              alignItems: "end",
              maxWidth: "80%",
            }}
          >
            {[{ name: signatory1Name, title: signatory1Title }, { name: signatory2Name, title: signatory2Title }].map(
              (sig, idx) => (
                <div key={idx}>
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

        {/* RIGHT PANEL */}
        <div
          style={{
            width: rightPanelWidth,
            background: brand.panel,
            borderRadius: Math.round(24 * scale),
            border: "1px solid rgba(15,79,77,0.12)",
            boxShadow: "0 18px 30px rgba(15,79,77,0.15)",
            padding: `${Math.round(36 * scale)}px ${Math.round(30 * scale)}px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: Math.round(20 * scale),
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: fontSize.label,
                textTransform: "uppercase",
                letterSpacing: 2.4,
                color: "rgba(27,43,44,0.6)",
                fontWeight: 700,
              }}
            >
              Verified
            </div>
            <div
              style={{
                fontSize: Math.round(26 * scale),
                fontWeight: 800,
                letterSpacing: 2,
                color: brand.tealDeep,
              }}
            >
              CERTIFICATE
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

          <div
            style={{
              width: Math.round(170 * scale),
              height: Math.round(170 * scale),
              borderRadius: "50%",
              background: `conic-gradient(from 160deg, ${brand.gold} 0deg, #f5d98d 120deg, ${brand.gold} 240deg, #f5d98d 360deg)`,
              display: "grid",
              placeItems: "center",
              boxShadow: "0 16px 24px rgba(15,79,77,0.2)",
            }}
          >
            <div
              style={{
                width: Math.round(110 * scale),
                height: Math.round(110 * scale),
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
                fontSize: Math.round(14 * scale),
              }}
            >
              <div>Stackron</div>
              <div style={{ fontSize: Math.round(11 * scale), letterSpacing: 1.5 }}>Academy</div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.7)",
              borderRadius: Math.round(16 * scale),
              border: "1px solid rgba(15,79,77,0.12)",
              padding: `${Math.round(14 * scale)}px ${Math.round(16 * scale)}px`,
              display: "flex",
              flexDirection: "column",
              gap: Math.round(10 * scale),
            }}
          >
            {[
              { label: "Program", value: "BA/DS Training" },
              { label: "Duration", value: dateRange },
              { label: "Issue Date", value: issueDate },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontSize: fontSize.label,
                    textTransform: "uppercase",
                    letterSpacing: 1.8,
                    color: "rgba(27,43,44,0.55)",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: fontSize.body, fontWeight: 700 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "auto",
              width: "100%",
              padding: `${Math.round(12 * scale)}px ${Math.round(16 * scale)}px`,
              borderRadius: 999,
              background: brand.tealDeep,
              color: "white",
              fontWeight: 700,
              letterSpacing: 2,
              textAlign: "center",
              fontSize: fontSize.id,
            }}
          >
            {certificateId}
          </div>
        </div>
      </div>
    </div>
  );
}
