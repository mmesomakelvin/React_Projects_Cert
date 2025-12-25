import React from 'react';

export default function OnlineCourseLunch({ width = 1080, height = 1080 }) {
  const scale = Math.min(width, height) / 1080;

  // ===== CONFIGURATION - Edit these to customize =====

  // Colors
  const colors = {
    background: '#f3f4f6',
    greenDark: '#0f3323',
    greenMid: '#164a34',
    greenLight: '#1a5c3f',
    greenAccent: '#2d7a54',
    greenHover: '#236347',
    orange: '#E87C3E',
    mustard: '#E8A63E',
    cream: '#FFF8E7',
    white: '#ffffff',
  };

  // Font sizes
  const fontSize = {
    mainHeading: Math.round(64 * scale),
    dateTag: Math.round(18 * scale),
    learnMore: Math.round(14 * scale),
    urlButton: Math.round(16 * scale),
    mention: Math.round(14 * scale),
    ribbonText: Math.round(14 * scale),
  };

  // Spacing & Sizes
  const spacing = {
    containerPadding: 8 * scale,
    cardPadding: 16 * scale,
    borderRadius: 8 * scale,
    cardBorderRadius: 24 * scale,
    buttonBorderRadius: 30 * scale,
  };

  // Card dimensions & positions
  const cardConfig = {
    width: 480 * scale,
    height: 540 * scale,
    rotation: 7, // degrees
    layers: [
      { color: colors.orange, offsetTop: 32 * scale, offsetLeft: 32 * scale },
      { color: colors.mustard, offsetTop: 16 * scale, offsetLeft: 16 * scale },
      { color: colors.cream, offsetTop: 0, offsetLeft: 0 },
    ],
  };

  // Hand position & size
  const handConfig = {
    size: 80 * scale,
    offsetTop: -12 * scale,
    rotation: 7, // degrees
    color: '#FBBF77',
    strokeColor: '#2d2d2d',
  };

  // Logo position & size
  const logoConfig = {
    size: 48 * scale,
    position: { top: 12 * scale, right: 12 * scale },
  };

  // Ribbons
  const ribbonConfig = {
    height: 24 * scale,
    color: colors.greenAccent,
    opacity: 0.4,
    rotation: 45, // degrees
    positions: ['20%', '80%'], // top positions
    text: 'COMING SOON',
    repeatCount: 12,
  };

  // Text content
  const content = {
    heading: ['Cowrywise', 'Ambassadors', 'Scholarship Program'],
    date: 'NOVEMBER, 2025',
    learnMore: 'LEARN MORE HERE ▾',
    url: 'ambassadors.cowrywise.com/scholarship',
    mention: 'Cowrywise Ambassadors',
  };

  // Button/CTA config
  const ctaConfig = {
    gap: 4 * scale,
    buttonPadding: { vertical: 10 * scale, horizontal: 4 * scale },
    dateTagPadding: { vertical: 8 * scale, horizontal: 3 * scale },
  };

  // ===== END CONFIGURATION =====

  // SVG Components (extracted for easy editing)
  const LogoSVG = () => (
    <svg width={logoConfig.size} height={logoConfig.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8Z"
        stroke={colors.white}
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M18 24C18 20.686 20.686 18 24 18C27.314 18 30 20.686 30 24C30 27.314 27.314 30 24 30"
        stroke={colors.white}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 30C24 30 28 28 28 24"
        stroke={colors.white}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const HandSVG = () => (
    <svg width={handConfig.size} height={handConfig.size} viewBox="0 0 80 80" fill="none">
      {/* Palm */}
      <path
        d="M25 45C25 45 22 35 28 30C34 25 42 28 42 28L45 40L38 48C38 48 30 50 25 45Z"
        fill={handConfig.color}
        stroke={handConfig.strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Thumb */}
      <path
        d="M28 30C28 30 26 25 30 22C34 19 38 24 38 24"
        fill={handConfig.color}
        stroke={handConfig.strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Fingers gripping */}
      <path
        d="M42 28L44 18C44 16 46 16 46 18L46 28"
        fill={handConfig.color}
        stroke={handConfig.strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M46 28L47 20C47 18 49 18 49 20L49 30"
        fill={handConfig.color}
        stroke={handConfig.strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M49 30L50 22C50 20 52 20 52 22L51 32"
        fill={handConfig.color}
        stroke={handConfig.strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${spacing.containerPadding}px`,
        backgroundColor: colors.background,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: `${1080 * scale}px`,
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          borderRadius: `${spacing.borderRadius}px`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Background with gradient and texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at center, ${colors.greenLight} 0%, ${colors.greenMid} 50%, ${colors.greenDark} 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'normal, overlay'
          }}
        />

        {/* Diagonal ribbons with "COMING SOON" text */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {ribbonConfig.positions.map((topPosition, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                width: '200%',
                height: `${ribbonConfig.height}px`,
                backgroundColor: ribbonConfig.color,
                opacity: ribbonConfig.opacity,
                transform: `rotate(${ribbonConfig.rotation}deg) translateY(-50%)`,
                top: topPosition,
                left: '-50%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                {[...Array(ribbonConfig.repeatCount)].map((_, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: `${4 * scale}px`, color: 'rgba(255, 255, 255, 0.6)', fontSize: `${fontSize.ribbonText}px`, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                    <span>{ribbonConfig.text}</span>
                    <span>•</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Top-right logo mark */}
        <div style={{ position: 'absolute', top: `${logoConfig.position.top}px`, right: `${logoConfig.position.right}px`, zIndex: 20 }}>
          <LogoSVG />
        </div>

        {/* Main content container */}
        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: `${spacing.cardPadding}px ${20 * scale}px` }}>

          {/* Stacked card scene */}
          <div style={{ position: 'relative', marginBottom: `${16 * scale}px` }}>

            {/* Cartoon hand gripping the card */}
            <div
              style={{
                position: 'absolute',
                top: `${handConfig.offsetTop}px`,
                left: '50%',
                transform: `translateX(-50%) rotate(${handConfig.rotation}deg)`,
                zIndex: 30
              }}
            >
              <HandSVG />
            </div>

            {/* Card layers (bottom to top) */}
            {cardConfig.layers.slice(0, -1).map((layer, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  width: `${cardConfig.width}px`,
                  height: `${cardConfig.height}px`,
                  backgroundColor: layer.color,
                  borderRadius: `${spacing.cardBorderRadius}px`,
                  transform: `rotate(${cardConfig.rotation}deg)`,
                  boxShadow: idx === 0 ? '0 40px 60px rgba(0, 0, 0, 0.25)' : '0 35px 50px rgba(0, 0, 0, 0.2)',
                  top: `${layer.offsetTop}px`,
                  left: `${layer.offsetLeft}px`,
                }}
              />
            ))}

            {/* Cream paper card (top layer with content) */}
            <div
              style={{
                position: 'relative',
                width: `${cardConfig.width}px`,
                height: `${cardConfig.height}px`,
                backgroundColor: cardConfig.layers[cardConfig.layers.length - 1].color,
                borderRadius: `${spacing.cardBorderRadius}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: `${12 * scale}px ${16 * scale}px`,
                transform: `rotate(${cardConfig.rotation}deg)`,
                boxShadow: '0 30px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Headline */}
              <div style={{ textAlign: 'center', marginBottom: `${8 * scale}px` }}>
                {content.heading.map((line, idx) => (
                  <h1 key={idx} style={{ color: colors.greenMid, lineHeight: 1.1, fontWeight: 800, fontSize: `${fontSize.mainHeading}px`, margin: 0 }}>
                    {line}
                  </h1>
                ))}
              </div>

              {/* Date tag */}
              <div
                style={{
                  backgroundColor: colors.mustard,
                  padding: `${ctaConfig.dateTagPadding.vertical}px ${ctaConfig.dateTagPadding.horizontal}px`,
                  borderRadius: `${spacing.buttonBorderRadius}px`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span style={{ color: colors.greenMid, fontWeight: 700, fontSize: `${fontSize.dateTag}px`, letterSpacing: '0.1em' }}>
                  {content.date}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA area */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: `${ctaConfig.gap}px` }}>
            {/* Learn more text */}
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', letterSpacing: '0.1em', fontWeight: 600, fontSize: `${fontSize.learnMore}px`, margin: 0 }}>
              {content.learnMore}
            </p>

            {/* URL button */}
            <a
              href={`https://${content.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: colors.greenAccent,
                padding: `${ctaConfig.buttonPadding.vertical}px ${ctaConfig.buttonPadding.horizontal}px`,
                borderRadius: `${spacing.buttonBorderRadius}px`,
                color: colors.white,
                fontWeight: 600,
                fontSize: `${fontSize.urlButton}px`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.greenHover}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.greenAccent}
            >
              {content.url}
            </a>

            {/* LinkedIn mention */}
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: `${fontSize.mention}px`, marginTop: `${2 * scale}px`, margin: 0 }}>
              {content.mention}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
