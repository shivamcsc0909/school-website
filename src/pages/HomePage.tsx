import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";

import { BookOpen, Users, Award, Heart, ArrowRight, Star, Trophy, Lightbulb, Target, Sparkles, CheckCircle, Calendar, GraduationCap, FlaskConical, Brain, Palette, Globe, Music, Drama, Dumbbell, Shield, Zap, TrendingUp, Video, Library, Microscope } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Strong academic foundation with NCERT curriculum, focusing on conceptual clarity and practical knowledge application.',
    },
    {
      icon: Users,
      title: 'Experienced Teachers',
      description: 'Dedicated faculty with 10+ years of teaching experience, committed to nurturing every child\'s potential.',
    },
    {
      icon: Award,
      title: 'Holistic Development',
      description: 'Comprehensive growth through sports, arts, music, dance, and personality development programs.',
    },
    {
      icon: Heart,
      title: 'Child-Friendly Learning',
      description: 'Activity-based learning with personalized attention, ensuring no child is left behind.',
    },
    {
      icon: Brain,
      title: 'Critical Thinking',
      description: 'Emphasis on problem-solving, logical reasoning, and analytical skills development.',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'CCTV surveillance, trained security staff, and a caring atmosphere for complete peace of mind.',
    },
  ];

  const subjects = [
    { 
      name: 'English', 
      icon: BookOpen, 
      color: 'from-blue-500 to-blue-600',
      description: 'Grammar, Literature & Communication'
    },
    { 
      name: 'Hindi', 
      icon: BookOpen, 
      color: 'from-orange-500 to-orange-600',
      description: 'व्याकरण, साहित्य और लेखन'
    },
    { 
      name: 'Mathematics', 
      icon: Target, 
      color: 'from-purple-500 to-purple-600',
      description: 'Problem Solving & Logical Thinking'
    },
    { 
      name: 'Science', 
      icon: FlaskConical, 
      color: 'from-green-500 to-green-600',
      description: 'Physics, Chemistry & Biology'
    },
    { 
      name: 'Social Studies', 
      icon: Globe, 
      color: 'from-yellow-500 to-yellow-600',
      description: 'History, Geography & Civics'
    },
    { 
      name: 'Computer', 
      icon: Lightbulb, 
      color: 'from-cyan-500 to-cyan-600',
      description: 'Coding, MS Office & Digital Literacy'
    },
  ];

  const activities = [
    {
      icon: Palette,
      title: 'Art & Craft',
      description: 'Drawing, painting, clay modeling, and creative expression workshops',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      icon: Music,
      title: 'Music & Dance',
      description: 'Classical music, vocal training, and traditional & modern dance forms',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: Dumbbell,
      title: 'Sports & Yoga',
      description: 'Cricket, football, basketball, athletics, and daily yoga sessions',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Drama,
      title: 'Drama & Theatre',
      description: 'Public speaking, stage performances, and personality development',
      color: 'bg-blue-50 border-blue-200'
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: '95% Success Rate',
      stat: '95%',
      description: 'Students score distinction in board exams',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      title: 'State Champions',
      stat: '12+',
      description: 'State level sports championship wins',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Star,
      title: 'Cultural Awards',
      stat: '25+',
      description: 'Prizes in inter-school competitions',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Winners',
      stat: '50+',
      description: 'Students awarded merit scholarships',
      color: 'from-green-400 to-teal-500'
    },
  ];

  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Class 6 Student',
      text: 'The teachers genuinely care about each child\'s progress. My daughter has become more confident in her studies and enjoys going to school every day. The individual attention she receives has made a remarkable difference.',
      rating: 5
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Class 4 Student',
      text: 'Best decision for our son\'s education. The school combines traditional values with modern teaching. The computer lab and science experiments keep him engaged and curious about learning.',
      rating: 5
    },
    {
      name: 'Mrs. Anjali Verma',
      role: 'Parent of Class 7 Student',
      text: 'The balanced approach to academics and extracurriculars is excellent. My child participates in sports, music, and drama, which has built his confidence and leadership skills tremendously.',
      rating: 5
    },
  ];

  const facilities = [
    { icon: Library, text: 'Well-stocked library with 5000+ books' },
    { icon: Microscope, text: 'Fully equipped science laboratory' },
    { icon: Lightbulb, text: 'Modern computer lab with latest software' },
    { icon: Video, text: 'Smart classrooms with digital boards' },
    { icon: Dumbbell, text: 'Sports ground for cricket, football & athletics' },
    { icon: Shield, text: '24/7 CCTV surveillance & security' },
  ];

  const whyChooseUs = [
    {
      title: 'Individual Attention',
      description: 'Small batch sizes of 25-30 students ensure personalized guidance',
      icon: Users,
    },
    {
      title: 'Regular Assessment',
      description: 'Monthly tests, assignments, and parent-teacher meetings for progress tracking',
      icon: TrendingUp,
    },
    {
      title: 'Life Skills Training',
      description: 'Focus on values, ethics, discipline, and real-world problem solving',
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Admission Open for 2025-26</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Shape Your Child's
                  <span className="block text-secondary mt-2">Bright Future</span>
                </h1>
                
                <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
                  Where Excellence Meets Compassion in Education
                </p>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  Join Yoga Convent School - A premier institution offering quality education from Class 1 to 8 with CBSE curriculum, experienced teachers, and a nurturing environment that brings out the best in every child.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-lg px-8"
                    onClick={() => navigate("/contact")}
                  >
                    Apply for Admission
                  </Button>

                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white shadow-xl transition-all hover:scale-105 text-lg px-8 backdrop-blur-sm"
                    onClick={() => navigate("/contact")}
                  >
                    Schedule a Visit
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-8 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-secondary">15+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary">500+</div>
                    <div className="text-sm opacity-90">Happy Students</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary">20+</div>
                    <div className="text-sm opacity-90">Expert Teachers</div>
                  </div>
                </div>
              </div>

              {/* Right Content - School Logo Card */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Glowing Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl transform rotate-6"></div>
                  <Card className="relative bg-white/95 backdrop-blur-xl border-2 border-white/50 shadow-2xl rounded-3xl overflow-hidden">
                    <CardContent className="p-12 text-center">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <img 
                          src="https://images.fillout.com/orgid-503168/flowpublicid-5bcjrn1sry/widgetid-default/n95MqABNwZiQVHJwbmNdn5/pasted-image-1763202720427.png" 
                          alt="Yoga Convent School Logo" 
                          className="h-48 w-48 mx-auto relative z-10 drop-shadow-2xl"
                        />
                      </div>
                      <h2 className="text-3xl font-bold mt-8 mb-3 text-primary">Yoga Convent School</h2>
                      <p className="text-muted-foreground text-lg mb-6">Building Tomorrow's Leaders Today</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/5 rounded-xl p-4">
                          <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">CBSE</div>
                          <div className="text-xs text-muted-foreground">Affiliated</div>
                        </div>
                        <div className="bg-secondary/10 rounded-xl p-4">
                          <GraduationCap className="h-8 w-8 text-secondary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-secondary">Class 1-8</div>
                          <div className="text-xs text-muted-foreground">All Levels</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Us Special</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive education that goes beyond textbooks, nurturing well-rounded individuals ready for tomorrow's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Academic Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Curriculum</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CBSE-aligned curriculum with focus on practical application and conceptual understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden">
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-br ${subject.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl`}>
                    <subject.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Beyond Academics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Co-Curricular Activities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Developing talents, building confidence, and nurturing creativity through diverse activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className={`${activity.color} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <CardContent className="p-6 text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <activity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Recognition of excellence across academics, sports, and cultural activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="p-8 text-center text-white">
                  <div className={`bg-gradient-to-br ${achievement.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-2">{achievement.stat}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm opacity-90">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  World-Class Infrastructure
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Modern Facilities</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  State-of-the-art infrastructure designed to provide the best learning environment for students to thrive and excel.
                </p>
                
                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-4 bg-muted/50 p-4 rounded-xl hover:bg-muted transition-colors">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="pt-2">
                        <p className="font-semibold text-lg">{facility.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Library className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">5000+</div>
                    <div className="text-sm opacity-90">Books in Library</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Microscope className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">2</div>
                    <div className="text-sm opacity-90">Science Labs</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Video className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Smart Classes</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Security</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Extended */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Yoga Convent Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven methodologies and dedicated support systems for holistic student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Ready to Join Our School Family?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Schedule a campus visit to experience our world-class facilities and meet our dedicated faculty. See firsthand why parents trust us with their children's education.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Free campus tour and counseling session</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Meet teachers and interact with current students</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Transparent fee structure discussion</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <div className="text-lg font-semibold">+91 XXX-XXX-XXXX</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <div className="text-lg font-semibold">info@yogaconvent.edu</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Timings</div>
                      <div className="text-lg font-semibold">Mon-Sat, 9:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg" onClick={() => navigate("/contact")}>
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Parent Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Parents Say About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from our satisfied parent community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="h-16 w-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Enroll Your Child Today
            </h2>
            <p className="text-xl md:text-2xl mb-4 opacity-95">
              Limited Seats Available for Academic Year 2025-26
            </p>
            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Give your child the gift of quality education in a nurturing environment where they can discover their potential, develop their talents, and build a strong foundation for a successful future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="secondary" 
                className="shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-lg px-10 py-6"
                onClick={() => navigate("/contact")}
              >
                Apply for Admission Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white shadow-xl transition-all hover:scale-105 text-lg px-10 py-6 backdrop-blur-sm"
                onClick={() => navigate("/contact")}
              >
                Download Prospectus
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <Award className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">CBSE Affiliated</div>
              </div>
              <div className="text-center">
                <Shield className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">Safe Campus</div>
              </div>
              <div className="text-center">
                <Trophy className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">Award Winning</div>
              </div>
              <div className="text-center">
                <Heart className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">Caring Faculty</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
