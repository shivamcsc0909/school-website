import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Users, PartyPopper, Trophy, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { category: 'classrooms', title: t('smartClassroom'), image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop' },
    { category: 'students', title: t('happyStudents'), image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop' },
    { category: 'activities', title: t('scienceLabActivity'), image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop' },
    { category: 'events', title: t('annualFunction'), image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop' },
    { category: 'sports', title: t('sportsDay'), image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop' },
    { category: 'celebrations', title: t('independenceDay'), image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&h=600&fit=crop' },
    { category: 'classrooms', title: t('galleryComputerLab'), image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?w=800&h=600&fit=crop' },
    { category: 'students', title: t('groupLearning'), image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop' },
    { category: 'activities', title: t('activityArt'), image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop' },
    { category: 'events', title: t('republicDay'), image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop' },
    { category: 'sports', title: t('basketballMatch'), image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop' },
    { category: 'celebrations', title: t('teachersDay'), image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop' },
    { category: 'classrooms', title: t('galleryLibrary'), image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&h=600&fit=crop' },
    { category: 'students', title: t('classDiscussion'), image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop' },
    { category: 'activities', title: t('musicClass'), image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop' },
    { category: 'events', title: t('culturalProgram'), image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop' },
    { category: 'sports', title: t('cricketTournament'), image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop' },
    { category: 'celebrations', title: t('childrensDay'), image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop' },
  ];

  const categories = [
    { value: 'all', label: t('catAll'), icon: Image },
    { value: 'classrooms', label: t('catClassrooms'), icon: BookOpen },
    { value: 'students', label: t('catStudents'), icon: Users },
    { value: 'activities', label: t('catActivities'), icon: Sparkles },
    { value: 'events', label: t('catEvents'), icon: PartyPopper },
    { value: 'sports', label: t('catSports'), icon: Trophy },
    { value: 'celebrations', label: t('catCelebrations'), icon: PartyPopper },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('galleryTitle')}</h1>
            <p className="text-xl opacity-95">
              {t('gallerySubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery with Tabs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 lg:grid-cols-7 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value} className="text-xs sm:text-sm">
                  <category.icon className="h-4 w-4 mr-1 hidden sm:inline" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2"
                  >
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Title and Badge */}
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <Badge variant="secondary" className="text-xs capitalize">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Categories Description */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('galleryHighlights')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('catClassrooms')}</h3>
                <p className="text-muted-foreground">
                  {t('galleryClassroomsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('catStudents')}</h3>
                <p className="text-muted-foreground">
                  {t('galleryStudentsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('catActivities')}</h3>
                <p className="text-muted-foreground">
                  {t('galleryActivitiesDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-pink-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <PartyPopper className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('catEvents')}</h3>
                <p className="text-muted-foreground">
                  {t('galleryEventsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('catSports')}</h3>
                <p className="text-muted-foreground">
                  {t('gallerySportsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <PartyPopper className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('catCelebrations')}</h3>
                <p className="text-muted-foreground">
                  {t('galleryCelebrationsDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
