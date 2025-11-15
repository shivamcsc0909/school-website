import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Users, Target } from 'lucide-react';

export default function AcademicsPage() {
  const classes = [
    {
      grade: 'Class 1',
      focus: 'Foundation Building',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'Art & Craft', 'Physical Education'],
      description: 'Introduction to basic concepts with play-based learning and activity-oriented teaching methods.',
    },
    {
      grade: 'Class 2',
      focus: 'Skill Development',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'Art & Craft', 'Physical Education', 'Computer Basics'],
      description: 'Building upon foundational skills with enhanced reading, writing, and numerical abilities.',
    },
    {
      grade: 'Class 3',
      focus: 'Conceptual Learning',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'General Knowledge', 'Art', 'Computer', 'Physical Education'],
      description: 'Developing conceptual understanding and critical thinking through interactive learning.',
    },
    {
      grade: 'Class 4',
      focus: 'Knowledge Expansion',
      subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'General Knowledge', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Expanding knowledge base with emphasis on comprehension and analytical skills.',
    },
    {
      grade: 'Class 5',
      focus: 'Advanced Foundation',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Preparing students for middle school with advanced concepts and independent learning.',
    },
    {
      grade: 'Class 6',
      focus: 'Middle School Transition',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Introduction to specialized subjects with focus on scientific thinking and social awareness.',
    },
    {
      grade: 'Class 7',
      focus: 'Comprehensive Learning',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Physical Education'],
      description: 'In-depth study of subjects with practical applications and project-based learning.',
    },
    {
      grade: 'Class 8',
      focus: 'Pre-Secondary Preparation',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Physical Education'],
      description: 'Comprehensive preparation for board examinations and higher secondary education.',
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Following updated CBSE curriculum with focus on conceptual understanding and practical application.',
    },
    {
      icon: GraduationCap,
      title: 'Qualified Teachers',
      description: 'Highly experienced faculty with specialized training in child psychology and modern teaching methods.',
    },
    {
      icon: Users,
      title: 'Small Class Size',
      description: 'Maintaining optimal student-teacher ratio for personalized attention and better learning outcomes.',
    },
    {
      icon: Target,
      title: 'Individual Focus',
      description: 'Adapting teaching style according to each student\'s learning level and pace for maximum growth.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl opacity-95">
              Excellence in Education from Class 1 to Class 8
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Academic Approach</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Yoga Convent School, we provide strong education and advanced knowledge through child-friendly learning methods. Our curriculum is designed to develop critical thinking, creativity, and problem-solving skills in students.
            </p>
            <p className="text-lg text-muted-foreground">
              We have the best education environment for students where learning becomes an enjoyable experience. Our highly experienced teachers adapt their teaching style according to students' learning levels, ensuring every child reaches their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class-wise Details */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Class-wise Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {classes.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{classInfo.grade}</CardTitle>
                    <Badge variant="secondary">{classInfo.focus}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{classInfo.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Subjects Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classInfo.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Teaching Methodology</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Interactive Learning</h3>
                    <p className="text-muted-foreground">
                      We use interactive teaching methods that engage students actively in the learning process. Our classrooms are equipped with smart boards and audio-visual aids that make learning more interesting and effective.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Personalized Attention</h3>
                    <p className="text-muted-foreground">
                      Understanding that every child learns differently, we adapt our teaching style according to students' learning levels. Our teachers provide individual attention to ensure no student is left behind.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Practical Application</h3>
                    <p className="text-muted-foreground">
                      We emphasize hands-on learning through experiments, projects, and real-world applications. This approach helps students understand concepts better and retain knowledge longer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Continuous Assessment</h3>
                    <p className="text-muted-foreground">
                      Regular assessments and feedback help us track each student's progress and identify areas that need improvement. We conduct periodic tests, assignments, and projects to evaluate learning outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Co-Curricular Integration</h3>
                    <p className="text-muted-foreground">
                      We also conduct various co-curricular activities that complement academic learning. Sports, arts, music, and cultural programs help in overall personality development of students.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Learning Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Remedial Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Extra support for students who need additional help in specific subjects to ensure they keep pace with their peers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advanced Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enrichment programs for students who excel, providing them with challenging material to further develop their abilities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Life Skills Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Teaching essential life skills including communication, problem-solving, decision-making, and emotional intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
