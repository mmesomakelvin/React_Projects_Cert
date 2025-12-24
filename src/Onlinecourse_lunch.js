export default function OnlineCourseLunch({ width = 1080, height = 1080 }) {
  const scale = Math.min(width, height) / 1080;

  const fontSize = {
    eyebrow: Math.round(12 * scale),
    brand: Math.round(26 * scale),
    title: Math.round(44 * scale),
    subtitle: Math.round(20 * scale),
    body: Math.round(16 * scale),
    badge: Math.round(13 * scale),
    cta: Math.round(17 * scale),
    tiny: Math.round(12 * scale),
  };

  const spacing = {
    cardPadding: Math.round(56 * scale),
    badgePaddingX: Math.round(18 * scale),
    badgePaddingY: Math.round(8 * scale),
    pillPaddingX: Math.round(20 * scale),
    pillPaddingY: Math.round(10 * scale),
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontFamily: 'Montserrat, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0E2E2C',
        color: '#F7F8F5',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #0E2E2C 0%, #11463E 55%, #0B2623 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 15%, rgba(94, 178, 41, 0.14), transparent 55%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `${height * 0.08}px`,
          right: `${width * 0.1}px`,
          height: `${height * 0.2}px`,
          width: `${width * 0.5}px`,
          background: 'rgba(255, 255, 255, 0.05)',
          transform: 'rotate(-8deg)',
          borderRadius: `${40 * scale}px`,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${height * 0.08}px ${width * 0.08}px`,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: `${40 * scale}px`,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.35)',
            padding: `${spacing.cardPadding}px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p
              style={{
                fontSize: `${fontSize.eyebrow}px`,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'rgba(247, 248, 245, 0.7)',
                margin: 0,
              }}
            >
              Edubridge Academy
            </p>
            <div
              style={{
                padding: `${spacing.badgePaddingY}px ${spacing.badgePaddingX}px`,
                borderRadius: `${30 * scale}px`,
                background: 'rgba(94, 178, 41, 0.15)',
                border: '1px solid rgba(94, 178, 41, 0.4)',
                color: '#BFE86B',
                fontSize: `${fontSize.badge}px`,
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              Coming Soon
            </div>
          </div>

          <div style={{ marginTop: `${24 * scale}px` }}>
            <h2
              style={{
                fontSize: `${fontSize.brand}px`,
                fontWeight: 700,
                margin: 0,
                color: '#E9F5ED',
              }}
            >
              EliteBridge Learning
            </h2>
            <h1
              style={{
                fontSize: `${fontSize.title}px`,
                fontWeight: 800,
                margin: `${12 * scale}px 0 ${8 * scale}px`,
                lineHeight: 1.1,
              }}
            >
              Financial Instruments
            </h1>
            <p
              style={{
                fontSize: `${fontSize.subtitle}px`,
                margin: 0,
                color: 'rgba(247, 248, 245, 0.82)',
              }}
            >
              The first course on our new e-learning platform.
            </p>
          </div>

          <div
            style={{
              marginTop: `${28 * scale}px`,
              padding: `${spacing.pillPaddingY}px ${spacing.pillPaddingX}px`,
              borderRadius: `${24 * scale}px`,
              background: 'rgba(1, 105, 56, 0.35)',
              color: '#F2C94C',
              fontSize: `${fontSize.body}px`,
              fontWeight: 600,
              alignSelf: 'flex-start',
            }}
          >
            No free access • Waitlist only
          </div>

          <div style={{ marginTop: `${30 * scale}px` }}>
            <p
              style={{
                fontSize: `${fontSize.body}px`,
                margin: 0,
                color: 'rgba(247, 248, 245, 0.8)',
                lineHeight: 1.6,
              }}
            >
              Join the waitlist to get early access and help us test a mini version of the product.
            </p>
            <p
              style={{
                fontSize: `${fontSize.tiny}px`,
                margin: `${10 * scale}px 0 0`,
                color: 'rgba(247, 248, 245, 0.6)',
              }}
            >
              Limited seats · Priority review for active testers
            </p>
          </div>

          <div
            style={{
              marginTop: `${36 * scale}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: `${16 * scale}px`,
            }}
          >
            <div
              style={{
                padding: `${12 * scale}px ${24 * scale}px`,
                borderRadius: `${32 * scale}px`,
                background: '#5EB229',
                color: '#0E2E2C',
                fontSize: `${fontSize.cta}px`,
                fontWeight: 700,
              }}
            >
              bit.ly/finance-waitlist
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                fontSize: `${fontSize.tiny}px`,
                color: 'rgba(247, 248, 245, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                gap: `${6 * scale}px`,
              }}
            >
              <span>November 2025</span>
              <span>Waitlist Priority</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
