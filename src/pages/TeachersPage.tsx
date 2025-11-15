import { Card, CardContent } from '@/components/ui/card';
import { Mail, GraduationCap, Award } from 'lucide-react';

export default function TeachersPage() {
  const teachers = [
    {
      name: 'Mrs. Sunita Sharma',
      designation: 'Principal & English Teacher',
      email: 'sunita.sharma@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Mr. Rajesh Kumar',
      designation: 'Mathematics Teacher',
      email: 'rajesh.kumar@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Mrs. Priya Verma',
      designation: 'Science Teacher',
      email: 'priya.verma@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    {
      name: 'Ms. Anjali Singh',
      designation: 'Hindi Teacher',
      email: 'anjali.singh@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Mr. Amit Patel',
      designation: 'Social Science Teacher',
      email: 'amit.patel@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Mrs. Kavita Gupta',
      designation: 'English Teacher',
      email: 'kavita.gupta@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Mr. Vikram Mehta',
      designation: 'Computer Science Teacher',
      email: 'vikram.mehta@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Mrs. Neha Reddy',
      designation: 'Mathematics Teacher',
      email: 'neha.reddy@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    },
    {
      name: 'Ms. Pooja Joshi',
      designation: 'EVS Teacher',
      email: 'pooja.joshi@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    },
    {
      name: 'Mr. Sanjay Nair',
      designation: 'Physical Education Teacher',
      email: 'sanjay.nair@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    },
    {
      name: 'Mrs. Rekha Desai',
      designation: 'Art & Craft Teacher',
      email: 'rekha.desai@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    },
    {
      name: 'Ms. Divya Sharma',
      designation: 'Music Teacher',
      email: 'divya.sharma@yogaconvent.edu.in',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <GraduationCap className="w-96 h-96" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl opacity-95">
              Meet Our Highly Experienced and Dedicated Teachers
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Excellence in Teaching</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Yoga Convent School, we take pride in having highly experienced and best teachers who are passionate about education and committed to student success. Our faculty members bring years of expertise, dedication, and a genuine love for teaching.
            </p>
            <p className="text-lg text-muted-foreground">
              Each teacher is specially trained in modern teaching methodologies and child psychology. They understand that every child is unique and adapt their teaching style according to students' learning levels.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Cards */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2"
              >
                <CardContent className="p-0">
                  {/* Teacher Image */}
                  <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-primary/10 to-accent/10">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Teacher Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-4">
                      {teacher.designation}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted rounded-lg p-3">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span className="break-all text-xs">{teacher.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Qualities */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes Our Teachers Special</h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Highly Qualified & Experienced</h3>
                      <p className="text-muted-foreground text-sm">
                        All our teachers hold relevant degrees and certifications with years of teaching experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Child-Centric Approach</h3>
                      <p className="text-muted-foreground text-sm">
                        Trained in child psychology to understand unique needs of each student.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adaptive Teaching Methods</h3>
                      <p className="text-muted-foreground text-sm">
                        Teaching style adapted according to students' learning levels and pace.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Passionate & Dedicated</h3>
                      <p className="text-muted-foreground text-sm">
                        Genuinely passionate about education and student success.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Continuous Development</h3>
                      <p className="text-muted-foreground text-sm">
                        Regular training keeps teachers updated with latest methodologies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Parent Communication</h3>
                      <p className="text-muted-foreground text-sm">
                        Regular communication with parents about student progress.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
