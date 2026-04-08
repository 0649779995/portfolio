export default function PortfolioWebsite() {
  const skills = [
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Cloud Computing',
    'Project Leadership',
    'Python',
    'Communication',
    'Teamwork',
  ];

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
    border: '1px solid #e2e8f0',
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '10px 14px',
    borderRadius: '999px',
    background: '#eef2ff',
    color: '#312e81',
    fontSize: '14px',
    fontWeight: 600,
    margin: '6px 8px 0 0',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)',
        color: '#0f172a',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 20px 60px' }}>
        <header
          style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            padding: '56px 40px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#cbd5e1',
            }}
          >
            Portfolio
          </p>
          <h1 style={{ margin: '14px 0 12px', fontSize: '64px', lineHeight: 1.05 }}>
            Anele Mazibuko
          </h1>
          <p
            style={{
              margin: '0 auto',
              maxWidth: '820px',
              fontSize: '24px',
              lineHeight: 1.6,
              color: '#e2e8f0',
            }}
          >
            ICT graduate and Advanced Diploma candidate passionate about artificial intelligence,
            machine learning, cloud technologies, and digital solutions that create real impact.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a
              href="mailto:anele9638@gmail.com"
              style={{
                display: 'inline-block',
                marginRight: '12px',
                padding: '12px 20px',
                borderRadius: '10px',
                background: '#ffffff',
                color: '#0f172a',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Contact Me
            </a>
            <a
              href="https://github.com/0649779995/portfolio"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                borderRadius: '10px',
                border: '1px solid #94a3b8',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              View GitHub
            </a>
          </div>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '24px',
            marginTop: '28px',
          }}
        >
          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: '34px', marginBottom: '16px' }}>About Me</h2>
            <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.8, color: '#334155' }}>
              I am a results-driven ICT professional with a strong academic foundation in emerging
              technologies. My interests include building smart systems, solving practical problems
              with technology, and contributing to the digital and creative industries through
              innovation, collaboration, and community-focused solutions.
            </p>
            <div style={{ marginTop: '22px' }}>
              {skills.map((skill) => (
                <span key={skill} style={tagStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: '30px', marginBottom: '18px' }}>Contact</h2>
            <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '18px' }}>
              <strong>Email:</strong> anele9638@gmail.com
            </p>
            <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '18px' }}>
              <strong>Phone:</strong> +27 64 977 9995
            </p>
            <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '18px' }}>
              <strong>Location:</strong> Durban, South Africa
            </p>
            <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '18px' }}>
              <strong>GitHub:</strong> 0649779995
            </p>
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: '28px' }}>
          <h2 style={{ marginTop: 0, fontSize: '34px', marginBottom: '22px' }}>Featured Project</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ marginTop: 0, fontSize: '30px', marginBottom: '12px' }}>
                Student Mental Wellness System
              </h3>
              <p style={{ margin: '0 0 18px', fontSize: '18px', lineHeight: 1.8, color: '#334155' }}>
                A web application designed to support student wellbeing through secure login,
                mood tracking, and risk analysis features. The project combines practical software
                development with social impact and demonstrates my ability to build useful digital
                systems.
              </p>
              <div>
                {['Python', 'Flask', 'SQLAlchemy', 'Bootstrap', 'HTML/CSS'].map((tech) => (
                  <span key={tech} style={tagStyle}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                background: '#f8fafc',
                border: '2px dashed #cbd5e1',
                borderRadius: '18px',
                minHeight: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
              }}
            >
              <img
                src="/images/wellness.png"
                alt="Student Mental Wellness System"
                style={{
                  maxWidth: '100%',
                  borderRadius: '14px',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
                }}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginTop: '28px',
          }}
        >
          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: '30px', marginBottom: '18px' }}>Experience</h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '22px' }}>Student Ambassador</h3>
              <p style={{ margin: '0 0 8px', color: '#64748b', fontSize: '16px' }}>
                Durban University of Technology | Jan 2025 – Present
              </p>
              <p style={{ margin: 0, color: '#334155', fontSize: '17px', lineHeight: 1.7 }}>
                Support student engagement, promote academic opportunities, and represent the
                institution through recruitment and communication initiatives.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '22px' }}>Project Officer – Green Campus Initiative</h3>
              <p style={{ margin: '0 0 8px', color: '#64748b', fontSize: '16px' }}>
                Durban University of Technology | Jan 2024 – Dec 2025
              </p>
              <p style={{ margin: 0, color: '#334155', fontSize: '17px', lineHeight: 1.7 }}>
                Led sustainability projects, awareness campaigns, and collaborative initiatives
                focused on community and environmental impact.
              </p>
            </div>

            <div>
              <h3 style={{ margin: '0 0 6px', fontSize: '22px' }}>Project Officer – House Committee</h3>
              <p style={{ margin: '0 0 8px', color: '#64748b', fontSize: '16px' }}>
                Durban University of Technology | Jan 2025 – Dec 2025
              </p>
              <p style={{ margin: 0, color: '#334155', fontSize: '17px', lineHeight: 1.7 }}>
                Coordinated student programmes, supported residence life, and helped create a
                positive environment for student success.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, fontSize: '30px', marginBottom: '18px' }}>Education & Certifications</h2>

            <div style={{ marginBottom: '22px' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '22px' }}>Education</h3>
              <p style={{ margin: 0, color: '#334155', fontSize: '17px', lineHeight: 1.8 }}>
                <strong>Advanced Diploma in Information and Communication Technology</strong> (In Progress)
                <br />
                Durban University of Technology
                <br />
                <br />
                <strong>Diploma in Information and Communication Technology</strong>
                <br />
                Durban University of Technology
              </p>
            </div>

            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '22px' }}>Certifications</h3>
              <ul style={{ margin: 0, paddingLeft: '22px', color: '#334155', fontSize: '17px', lineHeight: 1.9 }}>
                <li>Cybersecurity Essentials – Cisco Networking Academy</li>
                <li>NDG Linux Unhatched – Cisco Networking Academy</li>
                <li>Microsoft Power Platform Fundamentals</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
