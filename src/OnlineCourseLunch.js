import React from 'react';

export default function OnlineCourseLunch({ width = 1080, height = 1080 }) {
  const scale = Math.min(width, height) / 1080;

  const fontSize = {
    mainHeading: Math.round(64 * scale),
    dateTag: Math.round(18 * scale),
    learnMore: Math.round(14 * scale),
    urlButton: Math.round(16 * scale),
    mention: Math.round(14 * scale),
    ribbonText: Math.round(14 * scale),
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${8 * scale}px`,
        backgroundColor: '#f3f4f6',
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
          borderRadius: `${8 * scale}px`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Background with gradient and texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at center, #1a5c3f 0%, #164a34 50%, #0f3323 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'normal, overlay'
          }}
        />

        {/* Diagonal ribbons with "COMING SOON" text */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {/* First ribbon */}
          <div
            style={{
              position: 'absolute',
              width: '200%',
              height: `${24 * scale}px`,
              backgroundColor: '#2d7a54',
              opacity: 0.4,
              transform: 'rotate(45deg) translateY(-50%)',
              top: '20%',
              left: '-50%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
              {[...Array(12)].map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: `${4 * scale}px`, color: 'rgba(255, 255, 255, 0.6)', fontSize: `${fontSize.ribbonText}px`, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  <span>COMING SOON</span>
                  <span>•</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second ribbon */}
          <div
            style={{
              position: 'absolute',
              width: '200%',
              height: `${24 * scale}px`,
              backgroundColor: '#2d7a54',
              opacity: 0.4,
              transform: 'rotate(45deg) translateY(-50%)',
              top: '80%',
              left: '-50%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
              {[...Array(12)].map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: `${4 * scale}px`, color: 'rgba(255, 255, 255, 0.6)', fontSize: `${fontSize.ribbonText}px`, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  <span>COMING SOON</span>
                  <span>•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top-right logo mark */}
        <div style={{ position: 'absolute', top: `${12 * scale}px`, right: `${12 * scale}px`, zIndex: 20 }}>
          <svg width={48 * scale} height={48 * scale} viewBox="0 0 48 48" fill="none">
            <path
              d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8Z"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M18 24C18 20.686 20.686 18 24 18C27.314 18 30 20.686 30 24C30 27.314 27.314 30 24 30"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M24 30C24 30 28 28 28 24"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Main content container */}
        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: `${16 * scale}px ${20 * scale}px` }}>

          {/* Stacked card scene */}
          <div style={{ position: 'relative', marginBottom: `${16 * scale}px` }}>

            {/* Cartoon hand gripping the card */}
            <div
              style={{
                position: 'absolute',
                top: `${-12 * scale}px`,
                left: '50%',
                transform: 'translateX(-50%) rotate(7deg)',
                zIndex: 30
              }}
            >
              <svg width={80 * scale} height={80 * scale} viewBox="0 0 80 80" fill="none">
                {/* Palm */}
                <path
                  d="M25 45C25 45 22 35 28 30C34 25 42 28 42 28L45 40L38 48C38 48 30 50 25 45Z"
                  fill="#FBBF77"
                  stroke="#2d2d2d"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Thumb */}
                <path
                  d="M28 30C28 30 26 25 30 22C34 19 38 24 38 24"
                  fill="#FBBF77"
                  stroke="#2d2d2d"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Fingers gripping */}
                <path
                  d="M42 28L44 18C44 16 46 16 46 18L46 28"
                  fill="#FBBF77"
                  stroke="#2d2d2d"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M46 28L47 20C47 18 49 18 49 20L49 30"
                  fill="#FBBF77"
                  stroke="#2d2d2d"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M49 30L50 22C50 20 52 20 52 22L51 32"
                  fill="#FBBF77"
                  stroke="#2d2d2d"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Orange backing card (bottom layer) */}
            <div
              style={{
                position: 'absolute',
                width: `${480 * scale}px`,
                height: `${540 * scale}px`,
                backgroundColor: '#E87C3E',
                borderRadius: `${24 * scale}px`,
                transform: 'rotate(7deg)',
                boxShadow: '0 40px 60px rgba(0, 0, 0, 0.25)',
                top: `${32 * scale}px`,
                left: `${32 * scale}px`,
              }}
            />

            {/* Mustard folder (middle layer) */}
            <div
              style={{
                position: 'absolute',
                width: `${480 * scale}px`,
                height: `${540 * scale}px`,
                backgroundColor: '#E8A63E',
                borderRadius: `${24 * scale}px`,
                transform: 'rotate(7deg)',
                boxShadow: '0 35px 50px rgba(0, 0, 0, 0.2)',
                top: `${16 * scale}px`,
                left: `${16 * scale}px`,
              }}
            />

            {/* Cream paper card (top layer) */}
            <div
              style={{
                position: 'relative',
                width: `${480 * scale}px`,
                height: `${540 * scale}px`,
                backgroundColor: '#FFF8E7',
                borderRadius: `${24 * scale}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: `${12 * scale}px ${16 * scale}px`,
                transform: 'rotate(7deg)',
                boxShadow: '0 30px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Headline */}
              <div style={{ textAlign: 'center', marginBottom: `${8 * scale}px` }}>
                <h1 style={{ color: '#164a34', lineHeight: 1.1, fontWeight: 800, fontSize: `${fontSize.mainHeading}px`, margin: 0 }}>
                  Cowrywise
                </h1>
                <h1 style={{ color: '#164a34', lineHeight: 1.1, fontWeight: 800, fontSize: `${fontSize.mainHeading}px`, margin: 0 }}>
                  Ambassadors
                </h1>
                <h1 style={{ color: '#164a34', lineHeight: 1.1, fontWeight: 800, fontSize: `${fontSize.mainHeading}px`, margin: 0 }}>
                  Scholarship Program
                </h1>
              </div>

              {/* Date tag */}
              <div
                style={{
                  backgroundColor: '#E8A63E',
                  padding: `${8 * scale}px ${3 * scale}px`,
                  borderRadius: `${30 * scale}px`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span style={{ color: '#164a34', fontWeight: 700, fontSize: `${fontSize.dateTag}px`, letterSpacing: '0.1em' }}>
                  NOVEMBER, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA area */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: `${4 * scale}px` }}>
            {/* Learn more text */}
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', letterSpacing: '0.1em', fontWeight: 600, fontSize: `${fontSize.learnMore}px`, margin: 0 }}>
              LEARN MORE HERE ▾
            </p>

            {/* URL button */}
            <a
              href="https://ambassadors.cowrywise.com/scholarship"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#2d7a54',
                padding: `${10 * scale}px ${4 * scale}px`,
                borderRadius: `${30 * scale}px`,
                color: 'white',
                fontWeight: 600,
                fontSize: `${fontSize.urlButton}px`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#236347'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2d7a54'}
            >
              ambassadors.cowrywise.com/scholarship
            </a>

            {/* LinkedIn mention */}
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: `${fontSize.mention}px`, marginTop: `${2 * scale}px`, margin: 0 }}>
              Cowrywise Ambassadors
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
