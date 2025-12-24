export default function OnlineCourseLunch({ width = 1080, height = 1080 }) {
  const scale = Math.min(width, height) / 1080;
  
  const fontSize = {
    presents: Math.round(14 * scale),
    logo: Math.round(28 * scale),
    pill: Math.round(14 * scale),
    heading: Math.round(44 * scale),
    subheading: Math.round(20 * scale),
    bigText: Math.round(100 * scale),
    cta: Math.round(16 * scale),
    ctaSub: Math.round(15 * scale),
    small: Math.round(13 * scale),
    register: Math.round(16 * scale),
    button: Math.round(18 * scale),
    naira: Math.round(80 * scale),
  };

  const shapes = {
    ring1W: Math.round(380 * scale),
    ring1H: Math.round(240 * scale),
    ring2W: Math.round(340 * scale),
    ring2H: Math.round(220 * scale),
    discW: Math.round(260 * scale),
    discH: Math.round(180 * scale),
  };

  return (
    <div 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        fontFamily: 'Montserrat, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0F3238'
      }}
    >
      {/* Base background */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#154B54' }} />
      
      {/* Radial gradient overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 35%, rgba(1, 105, 56, 0.35) 0%, transparent 60%)'
        }}
      />
      
      {/* Diagonal dark band */}
      <div 
        style={{
          position: 'absolute',
          width: `${width * 1.3}px`,
          height: `${height * 0.35}px`,
          background: 'linear-gradient(135deg, rgba(1, 105, 56, 0.2) 0%, rgba(0,0,0,0.3) 100%)',
          transform: 'rotate(-12deg)',
          top: `${height * 0.28}px`,
          left: '-100px'
        }}
      />
      
      {/* Glow effects */}
      <div 
        style={{
          position: 'absolute',
          width: `${300 * scale}px`,
          height: `${300 * scale}px`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(94, 178, 41, 0.08) 0%, transparent 70%)',
          top: '-8%',
          right: '-5%',
          filter: 'blur(40px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: `${250 * scale}px`,
          height: `${250 * scale}px`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242, 201, 76, 0.1) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(30px)'
        }}
      />
      
      {/* Dot pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: `${20 * scale}px ${20 * scale}px`
        }}
      />

      {/* Content Container - Using percentage-based layout */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        padding: `${height * 0.04}px ${width * 0.05}px`
      }}>
        
        {/* TOP SECTION - 15% */}
        <div style={{ 
          height: '15%',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p style={{ 
            fontSize: `${fontSize.presents}px`, 
            fontWeight: 600, 
            color: '#C3E2E5', 
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: 0
          }}>
            EduBridge Academy Presents
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: `${8 * scale}px`, margin: `${10 * scale}px 0` }}>
            <svg width={32 * scale} height={26 * scale} viewBox="0 0 40 32" fill="none">
              <path d="M4 28 L20 8 L36 28" stroke="#5EB229" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M10 28 L20 14 L30 28" stroke="#016938" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="20" cy="6" r="4" fill="#5EB229" />
            </svg>
            <span style={{ fontSize: `${fontSize.logo}px`, fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              EliteBridge Learning
            </span>
          </div>
          
          <div 
            style={{
              padding: `${8 * scale}px ${20 * scale}px`,
              borderRadius: `${30 * scale}px`,
              backgroundColor: 'rgba(1, 105, 56, 0.6)',
              border: '1px solid rgba(94, 178, 41, 0.3)'
            }}
          >
            <span style={{ fontSize: `${fontSize.pill}px`, fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em' }}>
              E-Learning Platform • Early Access Waitlist
            </span>
          </div>
        </div>

        {/* HEADING SECTION - 12% */}
        <div style={{ 
          height: '12%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1 style={{ 
            fontSize: `${fontSize.heading}px`, 
            fontWeight: 800, 
            color: '#5EB229',
            lineHeight: 1.1,
            textShadow: '0 2px 20px rgba(94, 178, 41, 0.3)',
            margin: 0
          }}>
            Financial Instruments
          </h1>
          <p style={{ 
            fontSize: `${fontSize.subheading}px`, 
            fontWeight: 500, 
            color: '#FFFFFF',
            marginTop: `${5 * scale}px`,
            opacity: 0.9
          }}>
            is the first course on our new e-learning platform
          </p>
          <p style={{ 
            fontSize: `${fontSize.subheading}px`, 
            fontWeight: 600, 
            color: '#F2C94C',
            marginTop: `${6 * scale}px`,
            letterSpacing: '0.02em'
          }}>
            Join the waitlist to be first in line
          </p>
        </div>

        {/* SHAPES + BIG TEXT SECTION - 43% */}
        <div style={{ 
          height: '43%',
          position: 'relative',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          
          {/* Back ring */}
          <div 
            style={{
              position: 'absolute',
              width: `${shapes.ring1W}px`,
              height: `${shapes.ring1H}px`,
              borderRadius: '50%',
              background: 'linear-gradient(120deg, #5EB229 0%, #016938 100%)',
              transform: 'rotate(-15deg)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.35), inset 0 5px 20px rgba(255,255,255,0.1)',
              left: '8%',
              top: '15%'
            }}
          />
          
          {/* Middle ring */}
          <div 
            style={{
              position: 'absolute',
              width: `${shapes.ring2W}px`,
              height: `${shapes.ring2H}px`,
              borderRadius: '50%',
              background: 'linear-gradient(120deg, #016938 0%, #154B54 100%)',
              transform: 'rotate(-15deg)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.3), inset 0 4px 15px rgba(255,255,255,0.08)',
              left: '15%',
              top: '25%'
            }}
          />
          
          {/* Gold disc with Naira */}
          <div 
            style={{
              position: 'absolute',
              width: `${shapes.discW}px`,
              height: `${shapes.discH}px`,
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, #F2C94C 0%, #D4A832 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4), inset 0 -5px 20px rgba(0,0,0,0.2)',
              right: '12%',
              top: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
                backgroundSize: '10px 10px'
              }}
            />
            <span style={{ 
              fontSize: `${fontSize.naira}px`, 
              fontWeight: 900, 
              color: '#016938',
              textShadow: '2px 2px 0 rgba(255,255,255,0.3)'
            }}>
              ₦
            </span>
          </div>

          {/* BIG TEXT */}
          <div 
            style={{
              position: 'absolute',
              textAlign: 'center',
              transform: 'rotate(-5deg)',
              zIndex: 10,
              width: '100%'
            }}
          >
            <h2 style={{ 
              fontSize: `${fontSize.bigText}px`, 
              fontWeight: 900, 
              color: '#FFFFFF',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textShadow: '0 8px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)',
              margin: 0
            }}>
              FREE
            </h2>
            <h2 style={{ 
              fontSize: `${fontSize.bigText}px`, 
              fontWeight: 900, 
              color: '#FFFFFF',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textShadow: '0 8px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)',
              margin: 0
            }}>
              ACCESS
            </h2>
          </div>

          {/* Feature cards */}
          <div 
            style={{
              position: 'absolute',
              bottom: `${height * 0.08}px`,
              left: `${width * 0.06}px`,
              display: 'flex',
              flexDirection: 'column',
              gap: `${10 * scale}px`,
              width: `${280 * scale}px`
            }}
          >
            {[
              { title: 'Live office hours', accent: '#5EB229' },
              { title: 'Interactive practice labs', accent: '#F2C94C' },
              { title: 'Career-ready projects', accent: '#8ED1FC' }
            ].map((item, idx) => (
              <div 
                key={item.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: `${10 * scale}px`,
                  padding: `${10 * scale}px ${12 * scale}px`,
                  borderRadius: `${14 * scale}px`,
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid rgba(255, 255, 255, ${idx === 1 ? 0.18 : 0.1})`,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <span style={{ 
                  width: `${10 * scale}px`, 
                  height: `${10 * scale}px`, 
                  borderRadius: '50%', 
                  backgroundColor: item.accent,
                  boxShadow: `0 0 0 6px rgba(255,255,255,0.04), 0 0 20px ${item.accent}60`
                }} />
                <span style={{ 
                  fontSize: `${fontSize.cta}px`, 
                  fontWeight: 600, 
                  color: '#FFFFFF' 
                }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Image placeholder */}
          <div
            style={{
              position: 'absolute',
              right: `${width * 0.08}px`,
              bottom: `${height * 0.05}px`,
              width: `${340 * scale}px`,
              height: `${220 * scale}px`,
              borderRadius: `${18 * scale}px`,
              border: `2px dashed rgba(255,255,255,0.4)`,
              background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              boxShadow: '0 12px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: `${60 * scale}px`, 
              background: 'linear-gradient(90deg, rgba(94,178,41,0.28), transparent)', 
              position: 'absolute', 
              top: 0 
            }} />
            <p style={{ 
              fontSize: `${fontSize.heading}px`, 
              fontWeight: 800, 
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              + Image
            </p>
            <p style={{ 
              fontSize: `${fontSize.cta}px`, 
              fontWeight: 600, 
              color: 'rgba(255,255,255,0.75)',
              marginTop: `${6 * scale}px`
            }}>
              Drop course visual here
            </p>
            <p style={{ 
              fontSize: `${fontSize.small}px`, 
              fontWeight: 500, 
              color: 'rgba(255,255,255,0.6)',
              marginTop: `${4 * scale}px`
            }}>
              Keeps your design balanced
            </p>
          </div>
        </div>

        {/* BOTTOM CTA SECTION - 30% */}
        <div style={{ 
          height: '30%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <p style={{ fontSize: `${fontSize.cta}px`, fontWeight: 700, color: '#FFFFFF', margin: 0, letterSpacing: '0.01em' }}>
            We’re launching our e-learning platform soon — join the waitlist for priority access.
          </p>
          <p style={{ fontSize: `${fontSize.ctaSub}px`, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginTop: `${6 * scale}px` }}>
            Get <span style={{ color: '#5EB229', fontWeight: 700 }}>free entry</span> into the <span style={{ color: '#F2C94C', fontWeight: 800 }}>'Financial Instruments'</span> course, <span style={{ color: '#5EB229', fontWeight: 700 }}>earn a certificate</span> when you complete it, and secure bonus perks as an early supporter.
          </p>
          <p style={{ fontSize: `${fontSize.small}px`, fontWeight: 500, color: 'rgba(255,255,255,0.65)', marginTop: `${6 * scale}px` }}>
            Perfect for beginners and professionals looking to break into or grow in finance.
          </p>
          
          {/* Register Button */}
          <div style={{ marginTop: `${12 * scale}px` }}>
            <span style={{ fontSize: `${fontSize.register}px`, fontWeight: 600, color: '#FFFFFF', display: 'block', marginBottom: `${8 * scale}px` }}>
              Save your spot on the waitlist:
            </span>
            <div 
              style={{
                padding: `${12 * scale}px ${28 * scale}px`,
                backgroundColor: '#5EB229',
                borderRadius: `${30 * scale}px`,
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(94, 178, 41, 0.4)'
              }}
            >
              <span style={{ fontSize: `${fontSize.button}px`, fontWeight: 700, color: '#FFFFFF' }}>
                bit.ly/finance-waitlist
              </span>
            </div>
            <div style={{ marginTop: `${10 * scale}px`, display: 'flex', justifyContent: 'center', gap: `${12 * scale}px` }}>
              <div style={{ padding: `${8 * scale}px ${12 * scale}px`, borderRadius: `${12 * scale}px`, backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ fontSize: `${fontSize.small}px`, color: '#C3E2E5', fontWeight: 600 }}>Early bird perks</span>
              </div>
              <div style={{ padding: `${8 * scale}px ${12 * scale}px`, borderRadius: `${12 * scale}px`, backgroundColor: 'rgba(1,105,56,0.45)', border: '1px solid rgba(94,178,41,0.2)' }}>
                <span style={{ fontSize: `${fontSize.small}px`, color: '#FFFFFF', fontWeight: 700 }}>Seats limited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
