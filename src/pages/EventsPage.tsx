import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Flag, PartyPopper, Trophy, Heart, Mic, Palette, Sparkles, Users, BookOpen, Zap } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();

  const events = [
    {
      icon: Flag,
      title: t('independenceDay'),
      date: 'August 15',
      color: 'from-orange-500 to-green-500',
      image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&h=600&fit=crop',
      description: t('independenceDayDesc'),
      benefits: t('independenceDayBenefits'),
    },
    {
      icon: Flag,
      title: t('republicDay'),
      date: 'January 26',
      color: 'from-blue-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      description: t('republicDayDesc'),
      benefits: t('republicDayBenefits'),
    },
    {
      icon: PartyPopper,
      title: t('annualFunction'),
      date: 'December',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      description: t('annualFunctionDesc'),
      benefits: t('annualFunctionBenefits'),
    },
    {
      icon: Trophy,
      title: t('sportsDay'),
      date: 'February',
      color: 'from-blue-600 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      description: t('sportsDayDesc'),
      benefits: t('sportsDayBenefits'),
    },
    {
      icon: Heart,
      title: t('teachersDay'),
      date: 'September 5',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
      description: t('teachersDayDesc'),
      benefits: t('teachersDayBenefits'),
    },
    {
      icon: Sparkles,
      title: t('childrensDay'),
      date: 'November 14',
      color: 'from-yellow-500 to-amber-500',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      description: t('childrensDayDesc'),
      benefits: t('childrensDayBenefits'),
    },
    {
      icon: Users,
      title: t('culturalPrograms'),
      date: 'Throughout the Year',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      description: t('culturalProgramsDesc'),
      benefits: t('culturalProgramsBenefits'),
    },
    {
      icon: BookOpen,
      title: t('seminars'),
      date: 'Monthly',
      color: 'from-teal-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      description: t('seminarsDesc'),
      benefits: t('seminarsBenefits'),
    },
    {
      icon: Mic,
      title: t('motivationalSpeeches'),
      date: 'Quarterly',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
      description: t('motivationalSpeechesDesc'),
      benefits: t('motivationalSpeechesBenefits'),
    },
    {
      icon: Mic,
      title: t('debateCompetitions'),
      date: 'Bi-monthly',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      description: t('debateCompetitionsDesc'),
      benefits: t('debateCompetitionsBenefits'),
    },
    {
      icon: Palette,
      title: t('drawingCompetitions'),
      date: 'Quarterly',
      color: 'from-amber-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      description: t('drawingCompetitionsDesc'),
      benefits: t('drawingCompetitionsBenefits'),
    },
    {
      icon: PartyPopper,
      title: t('festivalCelebrations'),
      date: 'Throughout the Year',
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      description: t('festivalCelebrationsDesc'),
      benefits: t('festivalCelebrationsBenefits'),
    },
    {
      icon: Zap,
      title: t('scienceExhibition'),
      date: 'October',
      color: 'from-cyan-600 to-blue-600',
      image: 'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?w=800&h=600&fit=crop',
      description: t('scienceExhibitionDesc'),
      benefits: t('scienceExhibitionBenefits'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('eventsActivities')}</h1>
            <p className="text-xl opacity-95">
              {t('eventsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('commitmentHolistic')}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {t('commitmentDesc1')}
              </p>
              <p>
                {t('commitmentDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('yearlyEvents')}</h2>
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
                        <h4 className="font-semibold text-sm mb-2 text-primary">{t('aboutEvent')}</h4>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-accent">{t('studentBenefits')}</h4>
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
            <h2 className="text-3xl font-bold mb-8 text-center">{t('coCurricularActivities')}</h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg mb-6 text-muted-foreground text-center">
                  {t('coCurricularIntro')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    t('activityMusic'),
                    t('scienceExhibition'),
                    'Quiz Competitions',
                    t('storyTime'),
                    t('activityArt'),
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
            <h2 className="text-3xl font-bold mb-6">{t('ourApproach')}</h2>
            <p className="text-lg opacity-95 mb-4">
              {t('approachDesc1')}
            </p>
            <p className="text-lg opacity-95">
              {t('approachDesc2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
