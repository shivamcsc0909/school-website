// import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TeachersPage() {
  const { t } = useLanguage();

  const teachers = [
    {
      name: 'Mrs. Sunita Sharma',
      designation: t('englishTeacher'),
      email: 'sunita.sharma@yogaconvent.edu.in',
      phone: '+91 98765 43210',
      subject: 'English & Administration',
      experience: '15 Years'
    },
    {
      name: 'Mr. Rajesh Kumar',
      designation: t('mathsTeacher'),
      email: 'rajesh.kumar@yogaconvent.edu.in',
      phone: '+91 98765 43211',
      subject: 'Mathematics',
      experience: '12 Years'
    },
    {
      name: 'Mrs. Priya Verma',
      designation: t('scienceTeacher'),
      email: 'priya.verma@yogaconvent.edu.in',
      phone: '+91 98765 43212',
      subject: 'Science',
      experience: '10 Years'
    },
    {
      name: 'Ms. Anjali Singh',
      designation: t('hindiTeacher'),
      email: 'anjali.singh@yogaconvent.edu.in',
      phone: '+91 98765 43213',
      subject: 'Hindi',
      experience: '8 Years'
    },
    {
      name: 'Mr. Amit Patel',
      designation: t('socialTeacher'),
      email: 'amit.patel@yogaconvent.edu.in',
      phone: '+91 98765 43214',
      subject: 'Social Science',
      experience: '11 Years'
    },
    {
      name: 'Mrs. Kavita Gupta',
      designation: t('englishTeacher'),
      email: 'kavita.gupta@yogaconvent.edu.in',
      phone: '+91 98765 43215',
      subject: 'English',
      experience: '9 Years'
    },
    {
      name: 'Mr. Vikram Mehta',
      designation: t('computerTeacher'),
      email: 'vikram.mehta@yogaconvent.edu.in',
      phone: '+91 98765 43216',
      subject: 'Computer Science',
      experience: '7 Years'
    },
    {
      name: 'Mrs. Neha Reddy',
      designation: t('mathsTeacher'),
      email: 'neha.reddy@yogaconvent.edu.in',
      phone: '+91 98765 43217',
      subject: 'Mathematics',
      experience: '10 Years'
    },
    {
      name: 'Ms. Pooja Joshi',
      designation: t('evsTeacher'),
      email: 'pooja.joshi@yogaconvent.edu.in',
      phone: '+91 98765 43218',
      subject: 'Environmental Studies',
      experience: '6 Years'
    },
    {
      name: 'Mr. Sanjay Nair',
      designation: t('peTeacher'),
      email: 'sanjay.nair@yogaconvent.edu.in',
      phone: '+91 98765 43219',
      subject: 'Physical Education',
      experience: '13 Years'
    },
    {
      name: 'Mrs. Rekha Desai',
      designation: t('artTeacher'),
      email: 'rekha.desai@yogaconvent.edu.in',
      phone: '+91 98765 43220',
      subject: 'Art & Craft',
      experience: '8 Years'
    },
    {
      name: 'Ms. Divya Sharma',
      designation: t('musicTeacher'),
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{t('ourFaculty')}</h1>
            <p className="text-xl md:text-2xl opacity-95 font-light">
              {t('meetOurTeam')}
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
              {t('excellenceInTeaching')}
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('passionateEducators')}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('passionateEducatorsDesc')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('educatorsDesc2')}
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('meetOurTeam')}</h2>
            <p className="text-gray-600 text-lg">{t('leadershipSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div key={index} className="teacher-card-container">
                <div className="teacher-business-card">
                  {/* School Logo Watermark Background */}
                  <div className="logo-watermark-bg">
                    <img
                      src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png"
                      alt="School Logo"
                      className="watermark-logo"
                    />
                  </div>

                  {/* Diagonal Cut Overlay */}
                  <div className="diagonal-cut"></div>

                  {/* Left Section */}
                  <div className="card-left-section">
                    {/* School Logo */}
                    <div className="school-logo-box">
                      <img
                        src="https://i.postimg.cc/FsWq12tT/yoga-convent-school-logo.png"
                        alt="School Logo"
                        className="school-logo-img"
                      />
                    </div>

                    {/* Contact Icons */}
                    <div className="contact-icons">
                      <div className="icon-item">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="icon-text">{teacher.phone}</span>
                      </div>
                      <div className="icon-item">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="icon-text">{teacher.email}</span>
                      </div>
                      <div className="icon-item">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="icon-text">Varanasi, UP</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="card-right-section">
                    {/* Teacher Photo */}
                    <div className="teacher-photo-circle">
                      <svg className="photo-placeholder" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>

                    {/* Teacher Info */}
                    <div className="teacher-details">
                      <h3 className="teacher-name-card">{teacher.name}</h3>
                      <p className="teacher-designation-card">{teacher.subject}</p>
                    </div>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('whatMakesTeachersSpecial')}</h2>
              <p className="text-gray-600 text-lg">{t('specialQualities')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: 1, title: t('expertTeachers'), desc: t('featureTeachersDesc') },
                { num: 2, title: t('featureChildFriendly'), desc: t('educatorsDesc2') },
                { num: 3, title: t('featureHolistic'), desc: t('featureHolisticDesc') },
                { num: 4, title: t('passionateEducators'), desc: t('passionateEducatorsDesc').split('.')[0] + '.' },
                { num: 5, title: t('academicExcellence'), desc: t('featureQualityDesc') },
                { num: 6, title: t('contactInfo'), desc: t('statsAssessmentDesc') }
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
        /* Teacher Card Container */
        .teacher-card-container {
          display: flex;
          justify-content: center;
        }

        /* Main Business Card */
        .teacher-business-card {
          width: 100%;
          max-width: 360px;
          height: 220px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
          display: flex;
        }

        .teacher-business-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
        }

        /* School Logo Watermark - LAYER 2: Above diagonal, below content */
        .logo-watermark-bg {
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%) rotate(-12deg);
          width: 190px;
          height: 190px;
          opacity: 0.10;
          pointer-events: none;
          z-index: 2;
        }

        .watermark-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Diagonal Cut - LAYER 1: Lowest background layer */
        .diagonal-cut {
          position: absolute;
          top: -50%;
          right: -10%;
          width: 110px;
          height: 400px;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          transform: rotate(20deg);
          z-index: 1;
          opacity: 0.88;
        }

        /* Left Section - LAYER 10: Top layer for all content */
        .card-left-section {
          flex: 1;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 10;
          position: relative;
        }

        .school-logo-box {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .school-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .contact-icons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .icon-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 14px;
          height: 14px;
          color: #dc2626;
          flex-shrink: 0;
        }

        .icon-text {
          font-size: 0.7rem;
          color: #4b5563;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Right Section - LAYER 10: Top layer for all content */
        .card-right-section {
          width: 150px;
          padding: 1.25rem 0.9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          z-index: 10;
          position: relative;
        }

        .teacher-photo-circle {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          background: white;
          border: 3px solid #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
        }

        .photo-placeholder {
          width: 48px;
          height: 48px;
          color: #dc2626;
        }

        .teacher-details {
          text-align: center;
          width: 100%;
        }

        .teacher-name-card {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.3rem 0;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
        }

        .teacher-designation-card {
          font-size: 0.75rem;
          font-weight: 600;
          color: #dc2626;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin: 0;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
        }

        /* Quality Cards */
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
          .teacher-business-card {
            max-width: 320px;
            height: 200px;
          }

          .card-left-section {
            padding: 1rem;
          }

          .card-right-section {
            width: 130px;
            padding: 1rem 0.65rem;
          }

          .teacher-photo-circle {
            width: 70px;
            height: 70px;
          }

          .photo-placeholder {
            width: 40px;
            height: 40px;
          }

          .teacher-name-card {
            font-size: 0.85rem;
          }

          .teacher-designation-card {
            font-size: 0.7rem;
          }

          .icon-text {
            font-size: 0.65rem;
          }

          .diagonal-cut {
            width: 90px;
          }

          .logo-watermark-bg {
            width: 150px;
            height: 150px;
            opacity: 0.08;
          }
        }
      `}</style>
    </div>
  );
}
