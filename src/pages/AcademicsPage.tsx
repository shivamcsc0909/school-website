import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AcademicsPage() {
  const { t } = useLanguage();

  const classes = [
    {
      grade: t('class1'),
      focus: t('foundationBuilding'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('evs'), t('artCraft'), t('physicalEducation')],
      description: t('class1Desc'),
    },
    {
      grade: t('class2'),
      focus: t('skillDevelopment'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('evs'), t('artCraft'), t('physicalEducation'), t('computerBasics')],
      description: t('class2Desc'),
    },
    {
      grade: t('class3'),
      focus: t('conceptualLearning'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('evs'), t('generalKnowledge'), t('art'), t('computer'), t('physicalEducation')],
      description: t('class3Desc'),
    },
    {
      grade: t('class4'),
      focus: t('knowledgeExpansion'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('evs'), t('generalKnowledge'), t('computerScience'), t('art'), t('physicalEducation')],
      description: t('class4Desc'),
    },
    {
      grade: t('class5'),
      focus: t('advancedFoundation'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('science'), t('socialStudies'), t('computerScience'), t('art'), t('physicalEducation')],
      description: t('class5Desc'),
    },
    {
      grade: t('class6'),
      focus: t('middleSchoolTransition'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('science'), t('socialScience'), t('computerScience'), t('art'), t('physicalEducation')],
      description: t('class6Desc'),
    },
    {
      grade: t('class7'),
      focus: t('comprehensiveLearning'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('science'), t('socialScience'), t('computerScience'), t('art'), t('physicalEducation')],
      description: t('class7Desc'),
    },
    {
      grade: t('class8'),
      focus: t('preSecondaryPreparation'),
      subjects: [t('english'), t('hindi'), t('mathematics'), t('science'), t('socialScience'), t('computerScience'), t('art'), t('physicalEducation')],
      description: t('class8Desc'),
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: t('modernCurriculum'),
      description: t('modernCurriculumDesc'),
    },
    {
      icon: GraduationCap,
      title: t('qualifiedTeachers'),
      description: t('qualifiedTeachersDesc'),
    },
    {
      icon: Users,
      title: t('smallClassSize'),
      description: t('smallClassSizeDesc'),
    },
    {
      icon: Target,
      title: t('individualFocus'),
      description: t('individualFocusDesc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Logo Red & Blue Theme */}
      <section className="bg-gradient-to-br from-[#d50004] via-[#b80003] to-[#00aade] text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t('academicPrograms')}
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto">
              {t('academicSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {t('ourAcademicApproach')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="space-y-8 text-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t('academicApproachDesc1')}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t('academicApproachDesc2')}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-10 pb-8 px-6">
                    <div className="bg-gradient-to-br from-[#d50004]/10 to-[#00aade]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-10 w-10 text-[#d50004]" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class-wise Details */}
      <section className="py-6 md:py-14 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('classWiseCurriculum')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('classWiseSubtitle')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {classes.map((classInfo, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-6 space-y-4 bg-gradient-to-br from-[#d50004]/5 to-[#00aade]/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold text-[#d50004]">
                      {classInfo.grade}
                    </CardTitle>
                    <Badge className="text-sm px-4 py-2 font-medium bg-[#00aade] hover:bg-[#0099cc] text-white border-0">
                      {classInfo.focus}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pb-8">
                  <p className="text-base text-muted-foreground leading-relaxed min-h-[80px]">
                    {classInfo.description}
                  </p>
                  <div>
                    <h4 className="font-bold mb-4 text-base flex items-center gap-2 text-gray-900">
                      <BookOpen className="w-4 h-4 text-[#d50004]" />
                      {t('subjectsOffered')}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {classInfo.subjects.map((subject, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-sm px-3 py-1.5 border-2 border-[#00aade]/30 text-gray-700 hover:bg-[#00aade]/10 hover:border-[#00aade]"
                        >
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
      <section className="py-6 md:py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {t('teachingMethodology')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            {/* Methodology Cards */}
            <div className="space-y-8">
              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    {t('interactiveLearning')}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('interactiveLearningDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    {t('personalizedAttention')}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('personalizedAttentionDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    {t('practicalApplication')}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('practicalApplicationDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    {t('continuousAssessment')}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('continuousAssessmentDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#d50004]/20 hover:shadow-lg hover:border-[#d50004]/40 transition-all">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-5 text-[#d50004]">
                    {t('coCurricularIntegration')}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t('coCurricularIntegrationDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('additionalLearningPrograms')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-[#d50004]/20 hover:shadow-xl hover:border-[#d50004]/40 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-transparent">
                <CardTitle className="text-2xl font-bold text-[#d50004]">
                  {t('remedialClasses')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t('remedialClassesDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#d50004]/20 hover:shadow-xl hover:border-[#d50004]/40 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-transparent">
                <CardTitle className="text-2xl font-bold text-[#d50004]">
                  {t('advancedLearning')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t('advancedLearningDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#d50004]/20 hover:shadow-xl hover:border-[#d50004]/40 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-transparent">
                <CardTitle className="text-2xl font-bold text-[#d50004]">
                  {t('lifeSkillsEducation')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t('lifeSkillsEducationDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
