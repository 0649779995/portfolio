export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">Anele Mazibuko</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">
            ICT graduate and Advanced Diploma candidate passionate about artificial intelligence,
            machine learning, cloud technologies, and digital solutions that create real impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="px-4 py-2 rounded-full bg-slate-900 text-white">AI & Machine Learning</span>
            <span className="px-4 py-2 rounded-full bg-white border">Web Development</span>
            <span className="px-4 py-2 rounded-full bg-white border">Cloud Computing</span>
            <span className="px-4 py-2 rounded-full bg-white border">Project Leadership</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-10">
        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-slate-600 leading-8">
              I am a results-driven ICT professional with a strong academic foundation in emerging
              technologies. My interests include building smart systems, solving practical problems
              with technology, and contributing to the digital and creative industries through
              innovation, collaboration, and community-focused solutions.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="space-y-3 text-slate-600">
              <p><span className="font-medium text-slate-900">Email:</span> anele9638@gmail.com</p>
              <p><span className="font-medium text-slate-900">Phone:</span> +27 64 977 9995</p>
              <p><span className="font-medium text-slate-900">Location:</span> Durban, South Africa</p>
              <p><span className="font-medium text-slate-900">GitHub:</span> github.com/yourusername</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Featured Project</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold">Student Mental Wellness System</h3>
              <p className="mt-4 text-slate-600 leading-8">
                A web application designed to support student wellbeing through secure login,
                mood tracking, and risk analysis features. The project was built to combine
                practical software development with social impact.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-2 rounded-full bg-slate-100">Python</span>
                <span className="px-3 py-2 rounded-full bg-slate-100">Flask</span>
                <span className="px-3 py-2 rounded-full bg-slate-100">SQLAlchemy</span>
                <span className="px-3 py-2 rounded-full bg-slate-100">Bootstrap</span>
                <span className="px-3 py-2 rounded-full bg-slate-100">HTML/CSS</span>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-6 border border-dashed border-slate-300 min-h-[220px] flex items-center justify-center text-center text-slate-500">
              <img
  src="/images/wellness.png"
  alt="Student Mental Wellness System"
  className="rounded-2xl shadow-lg"
/>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Student Ambassador</h3>
                <p className="text-sm text-slate-500">Durban University of Technology | Jan 2025 – Present</p>
                <p className="mt-2 text-slate-600 leading-7">
                  Support student engagement, promote academic opportunities, and represent the
                  institution through recruitment and communication initiatives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Project Officer – Green Campus Initiative</h3>
                <p className="text-sm text-slate-500">Durban University of Technology | Jan 2024 – Dec 2025</p>
                <p className="mt-2 text-slate-600 leading-7">
                  Led sustainability projects, awareness campaigns, and collaborative initiatives
                  focused on community and environmental impact.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Project Officer – House Committee</h3>
                <p className="text-sm text-slate-500">Durban University of Technology | Jan 2025 – Dec 2025</p>
                <p className="mt-2 text-slate-600 leading-7">
                  Coordinated student programmes, supported residence life, and helped create a
                  positive environment for student success.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Education & Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Education</h3>
                <p className="mt-2 text-slate-600 leading-7">
                  Advanced Diploma in Information and Communication Technology (In Progress)<br />
                  Diploma in Information and Communication Technology<br />
                  Durban University of Technology
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Certifications</h3>
                <ul className="mt-2 text-slate-600 space-y-2 list-disc list-inside">
                  <li>Cybersecurity Essentials – Cisco Networking Academy</li>
                  <li>NDG Linux Unhatched – Cisco Networking Academy</li>
                  <li>Microsoft Power Platform Fundamentals</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Skills</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {[
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Cloud Computing',
                    'Big Data',
                    'Python',
                    'Communication',
                    'Leadership',
                    'Teamwork',
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-2 rounded-full bg-slate-100">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
