export default function SaParticipationCert({
  width = 768,
  height = 515,
}) {
  const baseWidth = 768;
  const baseHeight = 515;
  const scale = Math.min(width / baseWidth, height / baseHeight);

  const fontSize = {
    logoText: Math.round(18 * scale),
    logoSub: Math.round(10 * scale),
    date: Math.round(11 * scale),
    title: Math.round(20 * scale),
    candidateName: Math.round(30 * scale),
    subtitle: Math.round(13 * scale),
    eventName: Math.round(18 * scale),
    description: Math.round(11 * scale),
    signatoryName: Math.round(13 * scale),
    signatoryTitle: Math.round(11 * scale),
    issuedBy: Math.round(9 * scale),
    ribbonText: Math.round(10 * scale),
    ribbonTitle: Math.round(13 * scale),
    verify: Math.round(9 * scale),
  };

  const rightPanelWidth = 210 * scale;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "#F3F4EF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer card with subtle double border (Coursera/Duke feel) */}
      <div
        style={{
          position: "relative",
          width: `${baseWidth * scale}px`,
          height: `${baseHeight * scale}px`,
          background: "#FAFAF8",
          boxShadow: `0 ${6 * scale}px ${20 * scale}px rgba(0,0,0,0.08)`,
          borderRadius: `${4 * scale}px`,
        }}
      >
        {/* Decorative outer border */}
        <div
          style={{
            position: "absolute",
            top: `${6 * scale}px`,
            left: `${6 * scale}px`,
            right: `${6 * scale}px`,
            bottom: `${6 * scale}px`,
            border: `${1 * scale}px solid #C9D4C5`,
          }}
        />

        {/* Inner patterned frame */}
        <div
          style={{
            position: "absolute",
            top: `${12 * scale}px`,
            left: `${12 * scale}px`,
            right: `${12 * scale}px`,
            bottom: `${12 * scale}px`,
            border: `${1 * scale}px solid #D8E0D4`,
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent ${6 * scale}px,
                rgba(201, 212, 197, 0.25) ${6 * scale}px,
                rgba(201, 212, 197, 0.25) ${7 * scale}px
              )
            `,
          }}
        />

        {/* Inner white content area */}
        <div
          style={{
            position: "absolute",
            top: `${22 * scale}px`,
            left: `${22 * scale}px`,
            right: `${22 * scale}px`,
            bottom: `${22 * scale}px`,
            background: "#FFFFFF",
            boxShadow: `0 ${1 * scale}px ${4 * scale}px rgba(0,0,0,0.05)`,
          }}
        >
          {/* Subtle wave pattern like Duke – toned down */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.04,
              pointerEvents: "none",
            }}
          >
            <defs>
              <pattern
                id="wavePatternDuke"
                x="0"
                y="0"
                width={60 * scale}
                height={60 * scale}
                patternUnits="userSpaceOnUse"
              >
                <path
                  d={`M0 ${30 * scale} Q${15 * scale} ${
                    20 * scale
                  } ${30 * scale} ${30 * scale} T${60 * scale} ${30 * scale}`}
                  fill="none"
                  stroke="#154B54"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wavePatternDuke)" />
          </svg>

          {/* RIGHT PANEL – vertical band with VERIFIED stamp + ID */}
          <div
            style={{
              position: "absolute",
              top: `${18 * scale}px`,
              bottom: `${18 * scale}px`,
              right: `${20 * scale}px`,
              width: `${rightPanelWidth}px`,
              background:
                "linear-gradient(180deg, #F6F7F3 0%, #ECEFE4 45%, #E4E8DA 100%)",
              borderLeft: `${1 * scale}px solid #D0D7CE`,
              boxShadow: `-${3 * scale}px 0 ${8 * scale}px rgba(0,0,0,0.08)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Top: Verified Certificate text */}
            <div
              style={{
                width: "100%",
                padding: `${14 * scale}px ${10 * scale}px`,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: `${fontSize.ribbonText}px`,
                  fontWeight: 600,
                  color: "#4B5C4F",
                  letterSpacing: `${1.5 * scale}px`,
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                Verified
              </span>
              <span
                style={{
                  fontSize: `${fontSize.ribbonTitle}px`,
                  fontWeight: 700,
                  color: "#2F3C32",
                  letterSpacing: `${1 * scale}px`,
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: `${4 * scale}px`,
                }}
              >
                Certificate
              </span>
              <div
                style={{
                  marginTop: `${8 * scale}px`,
                  height: `${3 * scale}px`,
                  width: "60%",
                  marginInline: "auto",
                  background:
                    "linear-gradient(90deg, #F2C94C 0%, #D9A441 100%)",
                  borderRadius: `${999 * scale}px`,
                }}
              />
              <p
                style={{
                  margin: 0,
                  marginTop: `${10 * scale}px`,
                  fontSize: `${fontSize.verify}px`,
                  textTransform: "uppercase",
                  letterSpacing: `${1 * scale}px`,
                  color: "#5B6B5F",
                }}
              >
                of Participation
              </p>
            </div>

            {/* spacer to push stamp towards the lower half */}
            <div style={{ flex: 1 }} />

            {/* Bottom: VERIFIED stamp + Certificate ID */}
            <div
              style={{
                width: "100%",
                padding: `${18 * scale}px ${12 * scale}px ${16 * scale}px`,
                borderTop: `${1 * scale}px solid #D6DECF`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: `${10 * scale}px`,
              }}
            >
              {/* Circular VERIFIED stamp with check mark */}
              <div
                style={{
                  width: `${72 * scale}px`,
                  height: `${72 * scale}px`,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 20%, #4D5C4F 0%, #39473C 55%, #2F3B30 100%)",
                  boxShadow: `0 ${10 * scale}px ${22 * scale}px rgba(0,0,0,0.25)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Gold ring */}
                <div
                  style={{
                    width: `${58 * scale}px`,
                    height: `${58 * scale}px`,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(145deg, #F2C94C 0%, #D9A441 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `inset 0 ${2 * scale}px ${4 * scale}px rgba(255,255,255,0.45)`,
                  }}
                >
                  {/* Inner circle with check + VERIFIED text */}
                  <div
                    style={{
                      width: `${46 * scale}px`,
                      height: `${46 * scale}px`,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(145deg, #4D5C4F 0%, #3A483D 100%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: `${2 * scale}px`,
                    }}
                  >
                    <svg
                      width={18 * scale}
                      height={18 * scale}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      style={{
                        fontSize: `${fontSize.verify}px`,
                        fontWeight: 700,
                        letterSpacing: `${1.2 * scale}px`,
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate ID – bold, like a digital label */}
              <div
                style={{
                  padding: `${6 * scale}px ${18 * scale}px`,
                  borderRadius: `${999 * scale}px`,
                  background: "#154B54",
                  boxShadow: `0 ${3 * scale}px ${8 * scale}px rgba(0,0,0,0.2)`,
                  border: `${1 * scale}px solid rgba(0,0,0,0.18)`,
                }}
              >
                <span
                  style={{
                    fontSize: `${fontSize.verify}px`,
                    fontWeight: 700,
                    letterSpacing: `${1.6 * scale}px`,
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Certificate ID: XXXXX-YYYY
                </span>
              </div>
            </div>
          </div>

          {/* LEFT MAIN CONTENT AREA */}
          <div
            style={{
              position: "absolute",
              top: `${26 * scale}px`,
              left: `${30 * scale}px`,
              right: `${rightPanelWidth + 40 * scale}px`,
              bottom: `${48 * scale}px`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Logo */}
            <div
              style={{
                marginBottom: `${20 * scale}px`,
                display: "flex",
                alignItems: "center",
                gap: `${8 * scale}px`,
              }}
            >
              <div
                style={{
                  width: `${38 * scale}px`,
                  height: `${38 * scale}px`,
                  borderRadius: `${6 * scale}px`,
                  background:
                    "linear-gradient(145deg, #154B54 0%, #0f3a42 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 ${3 * scale}px ${8 * scale}px rgba(0,0,0,0.25)`,
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: `${15 * scale}px`,
                    fontWeight: 700,
                  }}
                >
                  E
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: `${fontSize.logoText}px`,
                    fontWeight: 700,
                    color: "#154B54",
                    display: "block",
                    lineHeight: 1.1,
                  }}
                >
                  EduBridge
                </span>
                <span
                  style={{
                    fontSize: `${fontSize.logoSub}px`,
                    fontWeight: 500,
                    color: "#5EB229",
                    letterSpacing: `${2 * scale}px`,
                    textTransform: "uppercase",
                  }}
                >
                  Academy
                </span>
              </div>
            </div>

            {/* Date */}
            <p
              style={{
                fontSize: `${fontSize.date}px`,
                fontWeight: 500,
                color: "#777777",
                margin: 0,
                marginBottom: `${6 * scale}px`,
                textTransform: "uppercase",
                letterSpacing: `${0.7 * scale}px`,
              }}
            >
              December 2025
            </p>

            {/* Certificate Title */}
            <p
              style={{
                fontSize: `${fontSize.title}px`,
                fontWeight: 600,
                color: "#333333",
                margin: 0,
                marginBottom: `${14 * scale}px`,
                letterSpacing: `${1.5 * scale}px`,
                textTransform: "uppercase",
              }}
            >
              Certificate of Participation
            </p>

            {/* Candidate Name */}
            <h2
              style={{
                fontSize: `${fontSize.candidateName}px`,
                fontWeight: 700,
                color: "#222222",
                margin: 0,
                marginBottom: `${10 * scale}px`,
                lineHeight: 1.1,
              }}
            >
              Candidate Name
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: `${fontSize.subtitle}px`,
                fontWeight: 400,
                color: "#555555",
                margin: 0,
                marginBottom: `${6 * scale}px`,
                fontStyle: "italic",
              }}
            >
              has successfully participated in
            </p>

            {/* Event Name */}
            <h3
              style={{
                fontSize: `${fontSize.eventName}px`,
                fontWeight: 700,
                color: "#154B54",
                margin: 0,
                marginBottom: `${12 * scale}px`,
                lineHeight: 1.3,
              }}
            >
              The African Universities Student Challenge 2025
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: `${fontSize.description}px`,
                fontWeight: 400,
                color: "#555555",
                margin: 0,
                lineHeight: 1.7,
                maxWidth: `${430 * scale}px`,
              }}
            >
              Your dedication, creativity, and enthusiasm throughout the
              challenge truly embody the spirit of innovation and excellence
              that this challenge seeks to promote.
            </p>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Signature & Issuer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: `${10 * scale}px`,
              }}
            >
              {/* Signature */}
              <div>
                <div
                  style={{
                    height: `${30 * scale}px`,
                    marginBottom: `${4 * scale}px`,
                    color: "#CCCCCC",
                    fontSize: `${11 * scale}px`,
                    fontStyle: "italic",
                  }}
                >
                  [Signature]
                </div>
                <div
                  style={{
                    width: `${115 * scale}px`,
                    height: `${1 * scale}px`,
                    backgroundColor: "#154B54",
                    marginBottom: `${6 * scale}px`,
                  }}
                />
                <p
                  style={{
                    fontSize: `${fontSize.signatoryName}px`,
                    fontWeight: 600,
                    color: "#222222",
                    margin: 0,
                    marginBottom: `${2 * scale}px`,
                  }}
                >
                  Olaide Oladosu
                </p>
                <p
                  style={{
                    fontSize: `${fontSize.signatoryTitle}px`,
                    fontWeight: 700,
                    color: "#154B54",
                    margin: 0,
                  }}
                >
                  CEO
                </p>
              </div>

              {/* Issuer */}
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: `${fontSize.issuedBy}px`,
                    fontWeight: 500,
                    color: "#888888",
                    margin: 0,
                    marginBottom: `${4 * scale}px`,
                    letterSpacing: `${0.5 * scale}px`,
                    textTransform: "uppercase",
                  }}
                >
                  Certificate Issued By
                </p>
                <p
                  style={{
                    fontSize: `${fontSize.signatoryName}px`,
                    fontWeight: 700,
                    color: "#154B54",
                    margin: 0,
                  }}
                >
                  EduBridge Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}