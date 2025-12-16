// import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users } from 'lucide-react';

export default function TeachersPage() {
  const teachers = [
    {
      name: 'Mrs. Sunita Sharma',
      designation: 'English Teacher',
      email: 'sunita.sharma@yogaconvent.edu.in',
      phone: '+91 98765 43210',
      subject: 'English & Administration',
      experience: '15 Years'
    },
    {
      name: 'Mr. Rajesh Kumar',
      designation: 'Mathematics Teacher',
      email: 'rajesh.kumar@yogaconvent.edu.in',
      phone: '+91 98765 43211',
      subject: 'Mathematics',
      experience: '12 Years'
    },
    {
      name: 'Mrs. Priya Verma',
      designation: 'Science Teacher',
      email: 'priya.verma@yogaconvent.edu.in',
      phone: '+91 98765 43212',
      subject: 'Science',
      experience: '10 Years'
    },
    {
      name: 'Ms. Anjali Singh',
      designation: 'Hindi Teacher',
      email: 'anjali.singh@yogaconvent.edu.in',
      phone: '+91 98765 43213',
      subject: 'Hindi',
      experience: '8 Years'
    },
    {
      name: 'Mr. Amit Patel',
      designation: 'Social Science Teacher',
      email: 'amit.patel@yogaconvent.edu.in',
      phone: '+91 98765 43214',
      subject: 'Social Science',
      experience: '11 Years'
    },
    {
      name: 'Mrs. Kavita Gupta',
      designation: 'English Teacher',
      email: 'kavita.gupta@yogaconvent.edu.in',
      phone: '+91 98765 43215',
      subject: 'English',
      experience: '9 Years'
    },
    {
      name: 'Mr. Vikram Mehta',
      designation: 'Computer Science Teacher',
      email: 'vikram.mehta@yogaconvent.edu.in',
      phone: '+91 98765 43216',
      subject: 'Computer Science',
      experience: '7 Years'
    },
    {
      name: 'Mrs. Neha Reddy',
      designation: 'Mathematics Teacher',
      email: 'neha.reddy@yogaconvent.edu.in',
      phone: '+91 98765 43217',
      subject: 'Mathematics',
      experience: '10 Years'
    },
    {
      name: 'Ms. Pooja Joshi',
      designation: 'EVS Teacher',
      email: 'pooja.joshi@yogaconvent.edu.in',
      phone: '+91 98765 43218',
      subject: 'Environmental Studies',
      experience: '6 Years'
    },
    {
      name: 'Mr. Sanjay Nair',
      designation: 'Physical Education Teacher',
      email: 'sanjay.nair@yogaconvent.edu.in',
      phone: '+91 98765 43219',
      subject: 'Physical Education',
      experience: '13 Years'
    },
    {
      name: 'Mrs. Rekha Desai',
      designation: 'Art & Craft Teacher',
      email: 'rekha.desai@yogaconvent.edu.in',
      phone: '+91 98765 43220',
      subject: 'Art & Craft',
      experience: '8 Years'
    },
    {
      name: 'Ms. Divya Sharma',
      designation: 'Music Teacher',
      email: 'divya.sharma@yogaconvent.edu.in',
      phone: '+91 98765 43221',
      subject: 'Music',
      experience: '5 Years'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png"
            alt="Yoga Convent School Logo"
            className="w-96 h-96 object-contain"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <GraduationCap className="w-96 h-96" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-20 w-20 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Faculty</h1>
            <p className="text-xl md:text-2xl opacity-95 font-light">
              Meet Our Highly Experienced and Dedicated Teachers
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Excellence in Teaching
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Passionate Educators</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Yoga Convent School, we take pride in having highly experienced and best teachers who are passionate about education and committed to student success. Our faculty members bring years of expertise, dedication, and a genuine love for teaching.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each teacher is specially trained in modern teaching methodologies and child psychology. They understand that every child is unique and adapt their teaching style according to students' learning levels.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Visiting Cards */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png"
              alt="Logo"
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <img
              src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png"
              alt="Logo"
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Dedicated professionals shaping tomorrow's leaders</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div key={index} className="visiting-card-wrapper">
                <div className="visiting-card">
                  {/* Left Main Content */}
                  <div className="card-main-content">
                    {/* Centered Logo */}
                    <div className="logo-container">
                      <img
                        src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png"
                        alt="Logo"
                        className="center-logo"
                      />
                    </div>

                    {/* Bottom Details */}
                    <div className="teacher-details">
                      <div className="teacher-name-box">
                        <h3 className="teacher-name">{teacher.name}</h3>
                      </div>
                      <div className="teacher-role-box">
                        <p className="teacher-role">{teacher.designation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="card-sidebar">
                    <span className="sidebar-char">अ</span>
                    <span className="sidebar-char">क</span>
                    <span className="sidebar-char">A</span>
                    <span className="sidebar-char">1</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Qualities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Makes Our Teachers Special</h2>
              <p className="text-gray-600 text-lg">The qualities that set our educators apart</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: 1, title: 'Highly Qualified', desc: 'All our teachers hold relevant degrees and certifications with years of teaching experience.' },
                { num: 2, title: 'Child-Centric Approach', desc: 'Trained in child psychology to understand unique needs of each student.' },
                { num: 3, title: 'Adaptive Teaching', desc: 'Teaching style adapted according to students\' learning levels and pace.' },
                { num: 4, title: 'Passionate & Dedicated', desc: 'Genuinely passionate about education and student success.' },
                { num: 5, title: 'Continuous Development', desc: 'Regular training keeps teachers updated with latest methodologies.' },
                { num: 6, title: 'Parent Communication', desc: 'Regular communication with parents about student progress.' }
              ].map((item, idx) => (
                <div key={idx} className="quality-card">
                  <div className="quality-number">{item.num}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80 text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Visiting Card Container */
        .visiting-card-wrapper {
          display: flex;
          justify-content: center;
          background: white;
        }

        /* Main Card */
        .visiting-card {
          width: 380px;
          height: 240px;
          background: white;
          border: 2px solid #dc2626; /* Red border */
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 0;
          box-shadow: none;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .visiting-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.15);
        }

        /* Main Content Area (Left side) */
        .card-main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 1.5rem;
        }

        /* Center Logo */
        .logo-container {
          position: absolute;
          top: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 2px solid #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          z-index: 10;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .center-logo {
          width: 70px;
          height: 70px;
          object-fit: contain;
        }

        /* Bottom Details */
        .teacher-details {
          margin-top: auto;
          margin-bottom: 0.5rem;
        }

        .teacher-name-box {
          border: 2px solid #dc2626;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          margin-bottom: 0px;
          display: inline-block;
          background: #fef2f2; /* Light red tint */
          position: relative;
          z-index: 5;
          width: 100%;
          text-align: center;
        }

        .teacher-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #991b1b;
          margin: 0;
          text-transform: capitalize;
        }

        .teacher-role-box {
          border: 2px solid #dc2626;
          border-top: none;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          padding: 0.3rem 0.75rem;
          display: inline-block;
          background: white;
          width: 90%;
          margin: 0 auto;
          display: block;
          text-align: center;
        }

        .teacher-role {
          font-size: 0.85rem;
          color: #dc2626;
          margin: 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Right Sidebar Pane */
        .card-sidebar {
          width: 50px;
          border-left: 2px solid #dc2626;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding: 1rem 0;
          background: #fef2f2;
        }

        .sidebar-char {
          font-size: 1.8rem;
          font-weight: 700;
          color: #991b1b;
          line-height: 1;
        }

        /* Quality Cards Styles (kept as is) */
        .quality-card {
           padding: 2em;
           color: #1f2937;
           background-color: #ffffff;
           border: 1px solid rgba(220, 38, 38, 0.1);
           border-radius: 15px;
           transition: all ease-in-out 0.3s;
        }
        
        .quality-number {
           display: inline-flex;
           align-items: center;
           justify-content: center;
           width: 3.5em;
           height: 3.5em;
           border-radius: 12px;
           background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
           color: white;
           font-size: 1.5em;
           font-weight: 700;
           margin-bottom: 1em;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .visiting-card {
            width: 300px;
            height: 220px;
          }
          .logo-container {
             width: 70px;
             height: 70px;
             top: 20px;
          }
           .center-logo {
             width: 55px;
             height: 55px;
           }
           .sidebar-char {
             font-size: 1.5rem;
           }
        }
      `}</style>
    </div>
  );
}
