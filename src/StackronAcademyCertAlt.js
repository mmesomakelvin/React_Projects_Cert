export default function StackronAcademyCertAlt({
  width = 3508,
  height = 2480,
  fullName = "{{FULL_NAME}}",
  certId = "{{CERT_ID}}",
  verifyUrl = "{{VERIFY_URL}}",
  issueDate = "January 31, 2026",
  duration = "July 2025 - January 2026",
  programName = "Data Science and Business Analytics",
  signatureName = "Hamzah",
  signatureTitle = "CEO",
}) {
  const baseWidth = 768;
  const baseHeight = 515;
  const scale = Math.min(width / baseWidth, height / baseHeight);

  const brand = {
    bg: "#edf5f3",
    card: "#fbfffd",
    ink: "#193033",
    muted: "#5b6f72",
    accent: "#19a7a5",
    accentDeep: "#0b6f6e",
    accentSoft: "#d7efeb",
    line: "#cfe6e2",
    gold: "#d9b86f",
  };

  const fontSize = {
    meta: Math.round(10 * scale),
    title: Math.round(25 * scale),
    intro: Math.round(12 * scale),
    fullName: Math.round(38 * scale),
    body: Math.round(11 * scale),
    program: Math.round(19 * scale),
    signatureName: Math.round(13 * scale),
    signatureTitle: Math.round(10 * scale),
    sideTitle: Math.round(14 * scale),
    sideMeta: Math.round(9 * scale),
    verify: Math.round(9 * scale),
    seal: Math.round(8 * scale),
  };

  const panelInset = 20 * scale;
  const sidePanelWidth = 204 * scale;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontFamily: "'Montserrat', sans-serif",
        background: brand.bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `${baseWidth * scale}px`,
          height: `${baseHeight * scale}px`,
          background: brand.card,
          borderRadius: `${8 * scale}px`,
          boxShadow: `0 ${10 * scale}px ${30 * scale}px rgba(7, 38, 40, 0.14)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${7 * scale}px`,
            left: `${7 * scale}px`,
            right: `${7 * scale}px`,
            bottom: `${7 * scale}px`,
            border: `${1 * scale}px solid ${brand.line}`,
            borderRadius: `${6 * scale}px`,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: `-${26 * scale}px`,
            right: `-${58 * scale}px`,
            width: `${320 * scale}px`,
            height: `${132 * scale}px`,
            background:
              "linear-gradient(120deg, rgba(25,167,165,0.17) 0%, rgba(11,111,110,0.28) 100%)",
            clipPath: "polygon(18% 0, 100% 0, 84% 100%, 0 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: `-${42 * scale}px`,
            left: `-${48 * scale}px`,
            width: `${280 * scale}px`,
            height: `${152 * scale}px`,
            background:
              "linear-gradient(130deg, rgba(25,167,165,0.2) 0%, rgba(11,111,110,0.32) 100%)",
            clipPath: "polygon(0 0, 100% 24%, 72% 100%, 0 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: `${panelInset}px`,
            left: `${panelInset}px`,
            right: `${panelInset}px`,
            bottom: `${panelInset}px`,
            display: "flex",
            gap: `${18 * scale}px`,
          }}
        >
          <div
            style={{
              position: "relative",
              width: `${sidePanelWidth}px`,
              height: "100%",
              background: `linear-gradient(172deg, ${brand.accent} 0%, ${brand.accentDeep} 72%)`,
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
              color: "#ffffff",
              padding: `${24 * scale}px ${16 * scale}px ${22 * scale}px`,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.16,
                background: `repeating-linear-gradient(
                  -32deg,
                  transparent,
                  transparent ${11 * scale}px,
                  rgba(255,255,255,0.75) ${11 * scale}px,
                  rgba(255,255,255,0.75) ${13 * scale}px
                )`,
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: `${122 * scale}px`,
                  padding: `${7 * scale}px ${8 * scale}px`,
                  borderRadius: `${8 * scale}px`,
                  background: "rgba(255,255,255,0.96)",
                  border: `${1 * scale}px solid rgba(11,111,110,0.18)`,
                  boxShadow: `0 ${3 * scale}px ${12 * scale}px rgba(0,0,0,0.2)`,
                }}
              >
                <img
                  src="/stackron-logo.png"
                  alt="Stackron Academy logo"
                  style={{
                    width: `${106 * scale}px`,
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: `${104 * scale}px`,
                height: `${2 * scale}px`,
                marginTop: `${16 * scale}px`,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.85) 100%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                marginTop: `${16 * scale}px`,
                padding: `${9 * scale}px ${10 * scale}px`,
                border: `${1 * scale}px solid rgba(255,255,255,0.55)`,
                borderRadius: `${6 * scale}px`,
                background: "rgba(0,0,0,0.16)",
              }}
            >
              <div
                style={{
                  fontSize: `${fontSize.sideMeta}px`,
                  letterSpacing: `${1.1 * scale}px`,
                  textTransform: "uppercase",
                  opacity: 0.92,
                }}
              >
                Certificate ID
              </div>
              <div
                style={{
                  marginTop: `${4 * scale}px`,
                  fontSize: `${fontSize.meta}px`,
                  fontWeight: 700,
                  letterSpacing: `${0.5 * scale}px`,
                }}
              >
                {certId}
              </div>
            </div>

            <div style={{ flex: 1 }} />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: `${8 * scale}px`,
              }}
            >
              <div
                style={{
                  width: `${34 * scale}px`,
                  height: `${34 * scale}px`,
                  borderRadius: "50%",
                  background: `linear-gradient(145deg, ${brand.gold} 0%, #f0dfb8 100%)`,
                  boxShadow: `0 ${3 * scale}px ${10 * scale}px rgba(0,0,0,0.2)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: brand.accentDeep,
                  fontWeight: 800,
                  fontSize: `${fontSize.seal}px`,
                }}
              >
                OK
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: `${fontSize.sideMeta}px`,
                    letterSpacing: `${0.8 * scale}px`,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Verified
                </div>
                <div
                  style={{
                    marginTop: `${3 * scale}px`,
                    fontSize: `${fontSize.verify}px`,
                    lineHeight: 1.3,
                    opacity: 0.95,
                    wordBreak: "break-word",
                  }}
                >
                  {verifyUrl}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              flex: 1,
              minWidth: 0,
              paddingTop: `${8 * scale}px`,
              paddingBottom: `${8 * scale}px`,
              paddingRight: `${4 * scale}px`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: `${22 * scale}px`,
                right: `${8 * scale}px`,
                width: `${166 * scale}px`,
                height: `${166 * scale}px`,
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(25,167,165,0.17) 0%, rgba(25,167,165,0.08) 52%, rgba(25,167,165,0.02) 76%, rgba(25,167,165,0) 100%)`,
              }}
            />

            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: `${16 * scale}px`,
                marginBottom: `${18 * scale}px`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: `${fontSize.meta}px`,
                    color: brand.muted,
                    letterSpacing: `${1 * scale}px`,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: `${4 * scale}px`,
                  }}
                >
                  Issue Date
                </div>
                <div
                  style={{
                    fontSize: `${fontSize.intro}px`,
                    color: brand.ink,
                    fontWeight: 600,
                  }}
                >
                  {issueDate}
                </div>
              </div>

              <div
                style={{
                  background: brand.accentSoft,
                  border: `${1 * scale}px solid ${brand.line}`,
                  borderRadius: `${999 * scale}px`,
                  padding: `${7 * scale}px ${14 * scale}px`,
                  fontSize: `${fontSize.meta}px`,
                  letterSpacing: `${0.9 * scale}px`,
                  textTransform: "uppercase",
                  color: brand.accentDeep,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {duration}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                fontSize: `${fontSize.title}px`,
                color: brand.ink,
                fontWeight: 700,
                letterSpacing: `${1.2 * scale}px`,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              Certificate of Completion
            </div>

            <div
              style={{
                width: `${190 * scale}px`,
                height: `${4 * scale}px`,
                marginTop: `${10 * scale}px`,
                marginBottom: `${16 * scale}px`,
                borderRadius: `${999 * scale}px`,
                background: `linear-gradient(90deg, ${brand.accent} 0%, ${brand.gold} 100%)`,
              }}
            />

            <div
              style={{
                fontSize: `${fontSize.intro}px`,
                color: brand.muted,
                letterSpacing: `${0.45 * scale}px`,
                marginBottom: `${8 * scale}px`,
              }}
            >
              This certifies that
            </div>

            <div
              style={{
                fontSize: `${fontSize.fullName}px`,
                color: brand.ink,
                fontWeight: 700,
                letterSpacing: `${0.2 * scale}px`,
                lineHeight: 1.12,
                marginBottom: `${10 * scale}px`,
              }}
            >
              {fullName}
            </div>

            <div
              style={{
                fontSize: `${fontSize.intro}px`,
                color: brand.muted,
                lineHeight: 1.55,
                marginBottom: `${12 * scale}px`,
                maxWidth: `${470 * scale}px`,
              }}
            >
              Has successfully completed the program below.
            </div>

            <div
              style={{
                position: "relative",
                padding: `${14 * scale}px ${16 * scale}px`,
                marginBottom: `${12 * scale}px`,
                background: "linear-gradient(98deg, #f1fbf9 0%, #e7f5f2 100%)",
                border: `${1 * scale}px solid ${brand.line}`,
                clipPath: "polygon(0 0, 97% 0, 100% 50%, 97% 100%, 0 100%)",
              }}
            >
              <div
                style={{
                  fontSize: `${fontSize.program}px`,
                  color: brand.accentDeep,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  maxWidth: `${460 * scale}px`,
                }}
              >
                {programName}
              </div>
            </div>

            <div
              style={{
                fontSize: `${fontSize.body}px`,
                color: brand.muted,
                lineHeight: 1.65,
                maxWidth: `${490 * scale}px`,
              }}
            >
              Awarded for having satisfied all the requirements of the program.
            </div>

            <div style={{ flex: 1 }} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: `${16 * scale}px`,
                marginTop: `${12 * scale}px`,
              }}
            >
              <div style={{ minWidth: `${220 * scale}px` }}>
                <div
                  style={{
                    width: `${144 * scale}px`,
                    height: `${1 * scale}px`,
                    background: brand.accentDeep,
                    marginBottom: `${7 * scale}px`,
                  }}
                />
                <div
                  style={{
                    fontSize: `${fontSize.signatureName}px`,
                    color: brand.ink,
                    fontWeight: 700,
                    marginBottom: `${2 * scale}px`,
                  }}
                >
                  {signatureName}
                </div>
                <div
                  style={{
                    fontSize: `${fontSize.signatureTitle}px`,
                    color: brand.accentDeep,
                    letterSpacing: `${0.3 * scale}px`,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {signatureTitle}
                </div>
              </div>

              <div
                style={{
                  textAlign: "right",
                  maxWidth: `${260 * scale}px`,
                }}
              >
                <div
                  style={{
                    fontSize: `${fontSize.meta}px`,
                    textTransform: "uppercase",
                    letterSpacing: `${0.9 * scale}px`,
                    color: brand.muted,
                    marginBottom: `${4 * scale}px`,
                    fontWeight: 600,
                  }}
                >
                  Issued By
                </div>
                <div
                  style={{
                    fontSize: `${fontSize.signatureName}px`,
                    color: brand.accentDeep,
                    fontWeight: 700,
                    marginBottom: `${4 * scale}px`,
                  }}
                >
                  Stackron Academy
                </div>
                <div
                  style={{
                    fontSize: `${fontSize.verify}px`,
                    color: brand.muted,
                    fontWeight: 600,
                    marginBottom: `${6 * scale}px`,
                  }}
                >
                  academy.stackron.com
                </div>
                <div
                  style={{
                    fontSize: `${fontSize.verify}px`,
                    color: brand.muted,
                    lineHeight: 1.35,
                    wordBreak: "break-word",
                  }}
                >
                  Verification: {verifyUrl}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
