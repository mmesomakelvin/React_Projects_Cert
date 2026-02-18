export default function StackronAcademyCertBADS({
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
    teal: "#18a7a5",
    tealDeep: "#0a6e6d",
    tealDark: "#0f4f4d",
    ink: "#1b2b2c",
    muted: "#5f6f70",
    background: "#f2f6f3",
    card: "#fbfaf6",
    borderOuter: "#cfe5df",
    borderInner: "#dbece7",
    panelTop: "#f3f7f5",
    panelMid: "#ecf2ef",
    panelBottom: "#e2ece7",
    gold: "#d8b568",
    borderPattern: "#d6f0eb",
    borderLine: "#bfe2da",
  };

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
        background: brand.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer card with subtle double border */}
      <div
        style={{
          position: "relative",
          width: `${baseWidth * scale}px`,
          height: `${baseHeight * scale}px`,
          background: brand.card,
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
            border: `${1 * scale}px solid ${brand.borderOuter}`,
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
            border: `${1 * scale}px solid ${brand.borderInner}`,
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent ${6 * scale}px,
                rgba(214, 240, 235, 0.35) ${6 * scale}px,
                rgba(214, 240, 235, 0.35) ${7 * scale}px
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
          {/* Subtle wave pattern */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.035,
              pointerEvents: "none",
            }}
          >
            <defs>
              <pattern
                id="stackronWave"
                x="0"
                y="0"
                width={60 * scale}
                height={60 * scale}
                patternUnits="userSpaceOnUse"
              >
                <path
                  d={`M0 ${30 * scale} Q${15 * scale} ${20 * scale} ${30 * scale} ${30 * scale} T${
                    60 * scale
                  } ${30 * scale}`}
                  fill="none"
                  stroke={brand.teal}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stackronWave)" />
          </svg>

          {/* RIGHT PANEL */}
          <div
            style={{
              position: "absolute",
              top: `${18 * scale}px`,
              bottom: `${18 * scale}px`,
              right: `${20 * scale}px`,
              width: `${rightPanelWidth}px`,
              background: `linear-gradient(180deg, ${brand.panelTop} 0%, ${brand.panelMid} 45%, ${brand.panelBottom} 100%)`,
              borderLeft: `${1 * scale}px solid ${brand.borderInner}`,
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
                  color: brand.muted,
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
                  color: brand.ink,
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
                  background: `linear-gradient(90deg, ${brand.gold} 0%, #e7d19a 100%)`,
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
                  color: brand.muted,
                }}
              >
                of Completion
              </p>
            </div>

            <div style={{ flex: 1 }} />

            {/* Bottom: VERIFIED stamp + Certificate ID */}
            <div
              style={{
                width: "100%",
                padding: `${18 * scale}px ${12 * scale}px ${16 * scale}px`,
                borderTop: `${1 * scale}px solid #d6decf`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: `${10 * scale}px`,
              }}
            >
              {/* Circular VERIFIED stamp */}
              <div
                style={{
                  width: `${72 * scale}px`,
                  height: `${72 * scale}px`,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 20%, #2f7a78 0%, #1c5f5d 55%, #144948 100%)",
                  boxShadow: `0 ${10 * scale}px ${22 * scale}px rgba(0,0,0,0.25)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: `${58 * scale}px`,
                    height: `${58 * scale}px`,
                    borderRadius: "50%",
                    background: `linear-gradient(145deg, ${brand.gold} 0%, #e7d19a 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `inset 0 ${2 * scale}px ${4 * scale}px rgba(255,255,255,0.45)`,
                  }}
                >
                  <div
                    style={{
                      width: `${46 * scale}px`,
                      height: `${46 * scale}px`,
                      borderRadius: "50%",
                      background: "linear-gradient(145deg, #2f7a78 0%, #1c5f5d 100%)",
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

              {/* Certificate ID */}
              <div
                style={{
                  padding: `${6 * scale}px ${18 * scale}px`,
                  borderRadius: `${999 * scale}px`,
                  background: brand.tealDeep,
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
                  Certificate ID: {certId}
                </span>
              </div>

              <div
                style={{
                  marginTop: `${8 * scale}px`,
                  fontSize: `${fontSize.verify}px`,
                  color: brand.muted,
                  textAlign: "center",
                }}
              >
                Verify: {verifyUrl}
              </div>
            </div>
          </div>

          {/* LEFT MAIN CONTENT */}
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
                marginBottom: `${18 * scale}px`,
                display: "flex",
                alignItems: "center",
                gap: `${10 * scale}px`,
              }}
            >
              <img
                src="/stackron-logo.png"
                alt="Stackron Academy logo"
                style={{
                  width: `${110 * scale}px`,
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Date */}
            <p
              style={{
                fontSize: `${fontSize.date}px`,
                fontWeight: 500,
                color: brand.muted,
                margin: 0,
                marginBottom: `${6 * scale}px`,
                textTransform: "uppercase",
                letterSpacing: `${0.7 * scale}px`,
              }}
            >
              {issueDate}
            </p>

            {/* Certificate Title */}
            <p
              style={{
                fontSize: `${fontSize.title}px`,
                fontWeight: 600,
                color: brand.ink,
                margin: 0,
                marginBottom: `${14 * scale}px`,
                letterSpacing: `${1.5 * scale}px`,
                textTransform: "uppercase",
              }}
            >
              Certificate of Completion
            </p>

            {/* Candidate Name */}
            <h2
              style={{
                fontSize: `${fontSize.candidateName}px`,
                fontWeight: 700,
                color: brand.ink,
                margin: 0,
                marginBottom: `${10 * scale}px`,
                lineHeight: 1.1,
              }}
            >
              {fullName}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: `${fontSize.subtitle}px`,
                fontWeight: 400,
                color: brand.muted,
                margin: 0,
                marginBottom: `${6 * scale}px`,
                fontStyle: "italic",
              }}
            >
              has successfully completed
            </p>

            {/* Program Name */}
            <h3
              style={{
                fontSize: `${fontSize.eventName}px`,
                fontWeight: 700,
                color: brand.tealDeep,
                margin: 0,
                marginBottom: `${12 * scale}px`,
                lineHeight: 1.3,
              }}
            >
              {programName}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: `${fontSize.description}px`,
                fontWeight: 400,
                color: brand.muted,
                margin: 0,
                lineHeight: 1.7,
                maxWidth: `${440 * scale}px`,
              }}
            >
              Completed during the training period of {duration} with demonstrated mastery of data science
              fundamentals and business analytics applications.
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
                    color: "#c7c7c7",
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
                    backgroundColor: brand.tealDeep,
                    marginBottom: `${6 * scale}px`,
                  }}
                />
                <p
                  style={{
                    fontSize: `${fontSize.signatoryName}px`,
                    fontWeight: 600,
                    color: brand.ink,
                    margin: 0,
                    marginBottom: `${2 * scale}px`,
                  }}
                >
                  {signatureName}
                </p>
                <p
                  style={{
                    fontSize: `${fontSize.signatoryTitle}px`,
                    fontWeight: 700,
                    color: brand.tealDeep,
                    margin: 0,
                  }}
                >
                  {signatureTitle}
                </p>
              </div>

              {/* Issuer */}
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: `${fontSize.issuedBy}px`,
                    fontWeight: 500,
                    color: brand.muted,
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
                    color: brand.tealDeep,
                    margin: 0,
                  }}
                >
                  Stackron Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
