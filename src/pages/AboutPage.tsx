import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, BookOpen, Users, Heart, Trophy } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'We strive for the highest standards in education and learning outcomes.',
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Creating a welcoming environment where every child feels valued and supported.',
    },
    {
      icon: Heart,
      title: 'Character Building',
      description: 'Developing strong moral values, ethics, and social responsibility in students.',
    },
    {
      icon: Trophy,
      title: 'Overall Development',
      description: 'Focusing on intellectual, physical, emotional, and social growth of every child.',
    },
  ];

  const facilities = [
    'Well-equipped Smart Classrooms',
    'Comprehensive Library with thousands of books',
    'Modern Computer Laboratory',
    'Spacious Sports Grounds and Indoor Games',
    'Science Laboratory for practical learning',
    'Art and Craft Room',
    'Music and Dance Room',
    'Safe and Secure School Transport',
    'Medical Room with First Aid facilities',
    'Clean and Hygienic Cafeteria',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Yoga Convent School</h1>
            <p className="text-xl opacity-95">
              A legacy of excellence in education, nurturing young minds since our inception
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Yoga Convent School is a premier educational institution committed to providing quality education from Class 1 to Class 8. We believe that education is not just about academics, but about shaping the complete personality of a child.
              </p>
              <p>
                Our school stands as a beacon of educational excellence, where traditional values meet modern teaching methodologies. We provide strong education and advanced knowledge through child-friendly learning methods that make education an enjoyable journey for every student.
              </p>
              <p>
                At Yoga Convent School, we have highly experienced and best teachers who are passionate about teaching and dedicated to bringing out the best in each child. We understand that every child is unique, and we adapt our teaching style according to students' learning levels.
              </p>
              <p>
                We also conduct various co-curricular activities to ensure the overall personality development of our students. Our focus is on creating the best education environment where students can thrive academically, socially, and emotionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that empowers students to become confident, compassionate, and responsible citizens who contribute positively to society. We envision creating lifelong learners who excel in their chosen fields while maintaining strong moral and ethical values.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education that nurtures academic excellence, creativity, and character development. We are committed to creating a safe, inclusive, and stimulating learning environment where every child can discover their potential and develop the skills needed for success in the 21st century.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Yoga Convent School?</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>Experienced Faculty:</strong> Our highly qualified and experienced teachers bring years of expertise and passion to the classroom, ensuring every child receives the best education.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>Child-Centric Approach:</strong> We adapt our teaching methods according to each student's learning level, ensuring no child is left behind.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>Holistic Development:</strong> Beyond academics, we focus on overall personality development through sports, arts, cultural activities, and life skills training.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>Safe Environment:</strong> We provide a secure, nurturing, and supportive environment where children can learn and grow with confidence.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>Modern Infrastructure:</strong> Our school is equipped with state-of-the-art facilities including smart classrooms, computer labs, library, and sports facilities.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>Co-Curricular Excellence:</strong> We conduct various co-curricular activities, competitions, and events that help students discover and develop their talents.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Facilities</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
