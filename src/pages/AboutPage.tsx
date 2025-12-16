import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, BookOpen, Users, Heart, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: BookOpen,
      title: t('academicExcellence'),
      description: t('academicExcellenceDesc'),
    },
    {
      icon: Users,
      title: t('inclusiveCommunity'),
      description: t('inclusiveCommunityDesc'),
    },
    {
      icon: Heart,
      title: t('characterBuilding'),
      description: t('characterBuildingDesc'),
    },
    {
      icon: Trophy,
      title: t('overallDevelopment'),
      description: t('overallDevelopmentDesc'),
    },
  ];

  const facilities = [
    t('facilitySmartClassrooms'),
    t('facilityLibrary'),
    t('facilityComputerLab'),
    t('facilitySports'),
    t('facilityScienceLab'),
    t('facilityArtRoom'),
    t('facilityMusicRoom'),
    t('facilityTransport'),
    t('facilityMedical'),
    t('facilityCafeteria'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h1>
            <p className="text-xl opacity-95">
              {t('aboutSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('whoWeAre')}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {t('aboutDesc1')}
              </p>
              <p>
                {t('aboutDesc2')}
              </p>
              <p>
                {t('aboutDesc3')}
              </p>
              <p>
                {t('aboutDesc4')}
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
                <h3 className="text-2xl font-bold mb-4">{t('ourVision')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('visionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('ourMission')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('missionDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('ourCoreValues')}</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">{t('whyChooseTitle')}</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>{t('experiencedFaculty')}:</strong> {t('experiencedFacultyDesc')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>{t('childCentricApproach')}:</strong> {t('childCentricApproachDesc')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>{t('holisticDevelopment')}:</strong> {t('holisticDevelopmentDesc')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>{t('safeEnvironment')}:</strong> {t('safeEnvironmentDesc')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>{t('modernInfrastructure')}:</strong> {t('modernInfrastructureDesc')}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <strong>{t('coCurricularExcellence')}:</strong> {t('coCurricularExcellenceDesc')}
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
            <h2 className="text-3xl font-bold mb-8 text-center">{t('ourFacilities')}</h2>
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
