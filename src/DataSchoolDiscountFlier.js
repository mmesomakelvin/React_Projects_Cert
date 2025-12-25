export default function DataSchoolDiscountFlier({ width = 1080, height = 1080 }) {
  const scale = Math.min(width, height) / 1080;

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
  };

  const fontSize = {
    tag: Math.round(15 * scale),
    tiny: Math.round(12 * scale),
    logo: Math.round(28 * scale),
    question: Math.round(38 * scale),
    body: Math.round(18 * scale),
    pill: Math.round(14 * scale),
    priceMain: Math.round(26 * scale),
    priceNote: Math.round(14 * scale),
    ctaLabel: Math.round(16 * scale),
    ctaButton: Math.round(20 * scale),
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Base background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: brand.teal,
        }}
      />

      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 0% 0%, rgba(94,178,41,0.2) 0%, transparent 50%), 
                       radial-gradient(circle at 100% 100%, rgba(1,105,56,0.25) 0%, transparent 50%)`,
        }}
      />

      {/* Dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: `${22 * scale}px ${22 * scale}px`,
        }}
      />

      {/* Diagonal accent */}
      <div
        style={{
          position: "absolute",
          width: width * 1.5,
          height: height * 0.5,
          background: "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 100%)",
          top: height * 0.32,
          left: -width * 0.15,
          transform: "rotate(-6deg)",
        }}
      />

      {/* ========== GRADUATION CAP - TOP RIGHT ========== */}
      <div
        style={{
          position: "absolute",
          top: `${80 * scale}px`,
          right: `${60 * scale}px`,
          transform: "rotate(8deg)",
          zIndex: 5,
        }}
      >
        {/* Cap Top */}
        <div
          style={{
            width: `${200 * scale}px`,
            height: `${100 * scale}px`,
            borderRadius: `${20 * scale}px`,
            background: `linear-gradient(135deg, ${brand.green} 0%, ${brand.darkGreen} 100%)`,
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
          }}
        />
        {/* Cap Band */}
        <div
          style={{
            position: "absolute",
            bottom: `${-12 * scale}px`,
            left: `${25 * scale}px`,
            width: `${150 * scale}px`,
            height: `${22 * scale}px`,
            borderRadius: `${12 * scale}px`,
            background: `linear-gradient(90deg, ${brand.teal} 0%, #1a6068 50%, ${brand.teal} 100%)`,
            boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
          }}
        />
        {/* Tassel */}
        <div
          style={{
            position: "absolute",
            top: `${15 * scale}px`,
            right: `${50 * scale}px`,
            width: `${3 * scale}px`,
            height: `${70 * scale}px`,
            background: brand.gold,
            borderRadius: `${3 * scale}px`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: `${80 * scale}px`,
            right: `${42 * scale}px`,
            width: `${22 * scale}px`,
            height: `${30 * scale}px`,
            borderRadius: `${12 * scale}px`,
            background: `linear-gradient(to bottom, ${brand.gold}, ${brand.goldLight})`,
          }}
        />
      </div>

      {/* ========== CONTENT CONTAINER ========== */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          padding: `${55 * scale}px ${60 * scale}px`,
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* ========== HEADER ========== */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: `${35 * scale}px`,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: `${12 * scale}px` }}>
            <div
              style={{
                width: `${38 * scale}px`,
                height: `${38 * scale}px`,
                borderRadius: "50%",
                border: `2px solid ${brand.green}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: `${18 * scale}px`,
                  height: `${18 * scale}px`,
                  borderRadius: "50%",
                  background: brand.green,
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: fontSize.tiny,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                }}
              >
                EduBridge Academy
              </div>
              <div
                style={{
                  fontSize: fontSize.logo,
                  color: brand.white,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  marginTop: `${2 * scale}px`,
                }}
              >
                Data School
              </div>
            </div>
          </div>

          {/* Cohort Badge - positioned to avoid cap */}
          <div
            style={{
              padding: `${10 * scale}px ${20 * scale}px`,
              borderRadius: `${999}px`,
              border: "1px solid rgba(255,255,255,0.35)",
              background: "rgba(0,0,0,0.35)",
              color: brand.white,
              fontSize: fontSize.tag,
              fontWeight: 600,
              marginTop: `${120 * scale}px`,
            }}
          >
            Cohort starts <span style={{ fontWeight: 800, color: brand.goldLight }}>17th Jan 2026</span>
          </div>
        </div>

        {/* ========== MAIN HEADLINE ========== */}
        <div
          style={{
            fontSize: fontSize.question,
            color: brand.white,
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: `${600 * scale}px`,
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            marginBottom: `${20 * scale}px`,
          }}
        >
          Are you ready to <span style={{ color: brand.gold }}>level up</span> as a{" "}
          <span style={{ color: brand.green }}>Data Analyst?</span>
        </div>

        {/* ========== BODY TEXT ========== */}
        <div
          style={{
            fontSize: fontSize.body,
            fontWeight: 500,
            color: "rgba(255,255,255,0.92)",
            maxWidth: `${580 * scale}px`,
            lineHeight: 1.55,
            marginBottom: `${22 * scale}px`,
          }}
        >
          Master <strong>SQL, Excel, Power BI &amp; Business Communication</strong> in a hands-on,
          project-based <span style={{ color: brand.gold, fontWeight: 700 }}>hybrid program</span> designed
          to make you job-ready.
        </div>

        {/* ========== SKILL PILLS ========== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: `${10 * scale}px`,
            marginBottom: `${30 * scale}px`,
          }}
        >
          {["SQL", "Excel", "Power BI", "Business Communication"].map((skill) => (
            <div
              key={skill}
              style={{
                padding: `${8 * scale}px ${16 * scale}px`,
                borderRadius: `${999}px`,
                background: "rgba(0,0,0,0.4)",
                border: `1px solid ${brand.green}`,
                fontSize: fontSize.pill,
                color: brand.white,
                fontWeight: 600,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* ========== PRICING + ILLUSTRATION ROW ========== */}
        <div
          style={{
            display: "flex",
            gap: `${30 * scale}px`,
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          {/* Pricing Card */}
          <div
            style={{
              flex: 1,
              padding: `${20 * scale}px`,
              borderRadius: `${20 * scale}px`,
              background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div style={{ display: "flex", gap: `${20 * scale}px`, flexWrap: "wrap" }}>
              {/* Regular Price */}
              <div
                style={{
                  paddingRight: `${20 * scale}px`,
                  borderRight: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: fontSize.priceNote,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: `${6 * scale}px`,
                    fontWeight: 600,
                  }}
                >
                  Program fee
                </div>
                <div style={{ fontSize: fontSize.priceMain, fontWeight: 900, color: brand.white }}>
                  ₦175,000
                </div>
              </div>

              {/* Early Bird */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: fontSize.priceNote,
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: `${8 * scale}px`,
                    fontWeight: 600,
                  }}
                >
                  Early bird offer
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: `${12 * scale}px`, flexWrap: "wrap" }}>
                  <div
                    style={{
                      padding: `${8 * scale}px ${14 * scale}px`,
                      borderRadius: `${999}px`,
                      background: `linear-gradient(120deg, ${brand.gold} 0%, ${brand.goldLight} 100%)`,
                      color: brand.teal,
                      fontWeight: 900,
                      fontSize: fontSize.priceMain,
                      boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                    }}
                  >
                    ₦150,000
                  </div>
                  <div style={{ fontSize: fontSize.priceNote, color: "rgba(255,255,255,0.9)" }}>
                    before <strong>31st Dec 2025</strong>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: `${10 * scale}px`,
                    fontSize: fontSize.priceNote,
                    color: brand.goldLight,
                    fontWeight: 500,
                  }}
                >
                  Hybrid — online + in-person in Lagos
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Illustrations */}
          <div
            style={{
              width: `${280 * scale}px`,
              height: `${200 * scale}px`,
              position: "relative",
            }}
          >
            {/* Data Bars */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                display: "flex",
                gap: `${8 * scale}px`,
              }}
            >
              {[0.4, 0.65, 0.9, 0.55, 0.8].map((h, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `${22 * scale}px`,
                    height: `${120 * h * scale}px`,
                    borderRadius: `${10 * scale}px`,
                    background: `linear-gradient(to top, ${brand.darkGreen}, ${brand.green})`,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>

            {/* Coin Stack */}
            <div style={{ position: "absolute", bottom: 0, right: 0 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: `${140 * scale}px`,
                    height: `${22 * scale}px`,
                    borderRadius: `${14 * scale}px`,
                    background: `linear-gradient(90deg, ${brand.darkGreen} 0%, ${brand.green} 50%, ${brand.darkGreen} 100%)`,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                    marginTop: i === 0 ? 0 : -Math.round(6 * scale),
                  }}
                />
              ))}
            </div>

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: `${-20 * scale}px`,
                right: `${50 * scale}px`,
                width: `${100 * scale}px`,
                height: `${100 * scale}px`,
                borderRadius: "50%",
                background: `conic-gradient(from 180deg, ${brand.gold} 0deg, ${brand.goldLight} 120deg, ${brand.gold} 240deg, ${brand.goldLight} 360deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  width: `${74 * scale}px`,
                  height: `${74 * scale}px`,
                  borderRadius: "50%",
                  background: brand.teal,
                  border: "2px solid rgba(255,255,255,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: `${10 * scale}px`,
                    fontWeight: 800,
                    color: brand.white,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Data School
                </div>
                <div style={{ fontSize: `${11 * scale}px`, color: brand.goldLight, fontWeight: 600, marginTop: `${2 * scale}px` }}>
                  2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== CTA ROW ========== */}
        <div
          style={{
            marginTop: `${25 * scale}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: `${20 * scale}px`,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: fontSize.ctaLabel,
                color: "rgba(255,255,255,0.8)",
                marginBottom: `${4 * scale}px`,
                fontWeight: 500,
              }}
            >
              Register here:
            </div>
            <div style={{ fontSize: fontSize.ctaButton, fontWeight: 800, color: brand.white }}>
              bit.ly/EA_Data_School
            </div>
          </div>

          <div
            style={{
              padding: `${14 * scale}px ${32 * scale}px`,
              borderRadius: `${999}px`,
              background: `linear-gradient(120deg, ${brand.green} 0%, ${brand.darkGreen} 100%)`,
              color: brand.white,
              fontWeight: 900,
              fontSize: fontSize.ctaButton,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
          >
            Secure your spot
          </div>
        </div>

        {/* ========== FOOTER ========== */}
        <div
          style={{
            marginTop: `${20 * scale}px`,
            paddingTop: `${14 * scale}px`,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: fontSize.priceNote,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <div>EduBridge Academy — Building Africa's next generation of analysts.</div>
          <div style={{ color: brand.gold, fontWeight: 600 }}>Upskill • Reskill • Get Job-Ready</div>
        </div>
      </div>
    </div>
  );
}