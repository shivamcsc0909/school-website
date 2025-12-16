import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Flag, PartyPopper, Trophy, Heart, Mic, Palette, Sparkles, Users, BookOpen, Zap } from 'lucide-react';

export default function EventsPage() {
  const events = [
    {
      icon: Flag,
      title: 'Independence Day',
      date: 'August 15',
      color: 'from-orange-500 to-green-500',
      image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&h=600&fit=crop',
      description: 'We celebrate Independence Day with great enthusiasm and patriotic fervor. Students participate in flag hoisting, cultural programs, and patriotic songs.',
      benefits: 'This event instills a sense of patriotism, national pride, and awareness about our freedom fighters.',
    },
    {
      icon: Flag,
      title: 'Republic Day',
      date: 'January 26',
      color: 'from-blue-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      description: 'Republic Day celebrations include flag hoisting, parade, cultural performances, and speeches highlighting the significance of our Constitution.',
      benefits: 'Students learn about democratic values, constitutional rights, and the importance of being responsible citizens.',
    },
    {
      icon: PartyPopper,
      title: 'Annual Function',
      date: 'December',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      description: 'Our grand annual function features dance performances, drama, music, and award ceremonies to recognize student achievements.',
      benefits: 'Provides students a platform to showcase their talents, build confidence, and develop stage presence.',
    },
    {
      icon: Trophy,
      title: 'Sports Day',
      date: 'February',
      color: 'from-blue-600 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      description: 'An exciting day filled with various sports competitions, races, team games, and athletic events.',
      benefits: 'Promotes physical fitness, healthy competition, teamwork, and sportsmanship.',
    },
    {
      icon: Heart,
      title: 'Teachers\' Day',
      date: 'September 5',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
      description: 'Students express gratitude to their teachers through special performances, cards, and celebrations.',
      benefits: 'Teaches students to respect and appreciate their teachers, strengthening the teacher-student bond.',
    },
    {
      icon: Sparkles,
      title: 'Children\'s Day',
      date: 'November 14',
      color: 'from-yellow-500 to-amber-500',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      description: 'A special day dedicated to children with fun activities, games, performances by teachers, and entertainment programs.',
      benefits: 'Makes students feel valued and special, creating a joyful atmosphere in the school community.',
    },
    {
      icon: Users,
      title: 'Cultural Programs',
      date: 'Throughout the Year',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      description: 'Regular cultural programs featuring dance, music, drama, and traditional performances celebrating India\'s rich heritage.',
      benefits: 'Helps students appreciate diverse cultures, develop artistic skills, and build confidence.',
    },
    {
      icon: BookOpen,
      title: 'Seminars for Students',
      date: 'Monthly',
      color: 'from-teal-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      description: 'Educational seminars on career guidance, life skills, health awareness, environmental protection, and technology.',
      benefits: 'Exposes students to new ideas and perspectives, enhancing knowledge beyond textbooks.',
    },
    {
      icon: Mic,
      title: 'Motivational Speeches',
      date: 'Quarterly',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
      description: 'Inspirational talks by successful individuals, educators, and achievers who share their experiences.',
      benefits: 'Inspires students to set goals, overcome challenges, and develop a positive mindset.',
    },
    {
      icon: Mic,
      title: 'Debate Competitions',
      date: 'Bi-monthly',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      description: 'Inter-class debate competitions on current affairs, social issues, and thought-provoking topics.',
      benefits: 'Enhances communication skills, critical thinking, research abilities, and confidence.',
    },
    {
      icon: Palette,
      title: 'Drawing Competitions',
      date: 'Quarterly',
      color: 'from-amber-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      description: 'Art competitions on various themes where students showcase their creativity through drawings and paintings.',
      benefits: 'Nurtures artistic talents, creativity, and imagination while encouraging young artists.',
    },
    {
      icon: PartyPopper,
      title: 'Festival Celebrations',
      date: 'Throughout the Year',
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      description: 'Celebrations of major Indian festivals like Diwali, Holi, Eid, Christmas with cultural programs and activities.',
      benefits: 'Teaches students about cultural diversity, promotes religious harmony, and respect for traditions.',
    },
    {
      icon: Zap,
      title: 'Science Exhibition',
      date: 'October',
      color: 'from-cyan-600 to-blue-600',
      image: 'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?w=800&h=600&fit=crop',
      description: 'An innovative showcase where students present working models, experiments, and research projects.',
      benefits: 'Encourages scientific temper, creativity, problem-solving skills, and practical application of knowledge.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl opacity-95">
              Making Learning Enjoyable Through Year-Round Celebrations and Programs
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Holistic Development</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At Yoga Convent School, we believe that education extends beyond textbooks and classrooms. We conduct various co-curricular activities throughout the year to ensure the overall personality development of our students.
              </p>
              <p>
                These events not only provide platforms for students to showcase their talents but also help them develop essential life skills such as leadership, teamwork, communication, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Yearly Events & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2">
                <CardContent className="p-0">
                  {/* Event Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white text-foreground rounded-full p-3 shadow-lg">
                        <event.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-1">{event.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.date}
                      </Badge>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-5">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">About the Event:</h4>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-accent">Benefits for Students:</h4>
                        <p className="text-muted-foreground text-sm">{event.benefits}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Co-Curricular Activities</h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg mb-6 text-muted-foreground text-center">
                  Beyond our major events, we conduct various co-curricular activities for holistic development:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Music and Dance Classes',
                    'Science Exhibitions',
                    'Quiz Competitions',
                    'Story Telling Sessions',
                    'Yoga and Meditation',
                    'Field Trips',
                    'Social Service Activities',
                    'Environmental Programs',
                    'Leadership Training',
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <span className="font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Approach to Events & Activities</h2>
            <p className="text-lg opacity-95 mb-4">
              We focus on overall personality development by providing diverse opportunities for students to explore their interests and talents. Our events are carefully planned to balance fun with learning.
            </p>
            <p className="text-lg opacity-95">
              Through these events and activities, we create the best education environment where students excel academically and develop into confident, well-rounded individuals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
