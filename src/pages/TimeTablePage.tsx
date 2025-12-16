import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Smile, Star, Zap, Shield, Rocket, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TimeTablePage() {
    const { t } = useLanguage();

    const themes = {
        kg: "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200", // Doremon/Soft
        primary: "bg-gradient-to-br from-green-100 to-yellow-100 border-green-200", // Ben 10/Adventure
        middle: "bg-gradient-to-br from-blue-100 to-red-100 border-blue-200", // Superheroes
    };

    const classes = [
        { id: "kg1", name: "KG 1", theme: themes.kg, icon: Smile, hero: "Doraemon Theme", subjects: ["English", "Hindi", "Maths", "Rhymes", "Drawing", "Games", "Story Time", "Pack Up"] },
        { id: "kg2", name: "KG 2", theme: themes.kg, icon: Heart, hero: "Chota Bheem Theme", subjects: ["English", "Hindi", "Maths", "EVS", "Art", "Dance", "Games", "Pack Up"] },
        { id: "1", name: "Class 1", theme: themes.primary, icon: Star, hero: "Tom & Jerry Theme", subjects: ["Maths", "English", "Hindi", "EVS", "Computer", "Library", "GK", "Games"] },
        { id: "2", name: "Class 2", theme: themes.primary, icon: Zap, hero: "Ben 10 Theme", subjects: ["English", "Maths", "Hindi", "EVS", "Art", "Music", "Computer", "Sports"] },
        { id: "3", name: "Class 3", theme: themes.primary, icon: Rocket, hero: "Motu Patlu Theme", subjects: ["Maths", "EVS", "English", "Hindi", "Computer", "GK", "Library", "Yoga"] },
        { id: "4", name: "Class 4", theme: themes.middle, icon: Shield, hero: "Avengers Theme", subjects: ["Science", "Maths", "English", "Hindi", "Social", "Computer", "Art", "Games"] },
        { id: "5", name: "Class 5", theme: themes.middle, icon: Shield, hero: "Spider-Man Theme", subjects: ["Maths", "Science", "Social", "English", "Hindi", "Sanskrit", "Computer", "Music"] },
        { id: "6", name: "Class 6", theme: themes.middle, icon: Shield, hero: "Iron Man Theme", subjects: ["Science", "Maths", "Social", "English", "Hindi", "Sanskrit", "Computer", "Sports"] },
        { id: "7", name: "Class 7", theme: themes.middle, icon: Shield, hero: "Batman Theme", subjects: ["Maths", "Science", "Social", "English", "Hindi", "Sanskrit", "Computer", "Library"] },
        { id: "8", name: "Class 8", theme: themes.middle, icon: Shield, hero: "Transformers Theme", subjects: ["Science", "Maths", "Social", "English", "Hindi", "Sanskrit", "Computer", "Games"] },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 animate-pulse"><Calendar className="w-64 h-64" /></div>
                    <div className="absolute bottom-0 right-0 animate-bounce"><Clock className="w-64 h-64" /></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('timetable')}</h1>
                    <p className="text-xl opacity-90">Class-wise Weekly Schedules (2026-27)</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <Tabs defaultValue="kg1" className="w-full">
                    <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-8">
                        {classes.map((cls) => (
                            <TabsTrigger
                                key={cls.id}
                                value={cls.id}
                                className="px-6 py-2 border-2 border-blue-100 data-[state=active]:border-blue-500 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-full transition-all"
                            >
                                {cls.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {classes.map((cls) => (
                        <TabsContent key={cls.id} value={cls.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <Card className={`border-2 shadow-lg overflow-hidden ${cls.theme}`}>
                                <CardHeader className="text-center pb-2 bg-white/50 backdrop-blur-sm relative z-10">
                                    <div className="flex justify-center mb-2">
                                        <cls.icon className="w-12 h-12 text-gray-700 p-2 bg-white rounded-full shadow-md" />
                                    </div>
                                    <div className="font-handwriting text-center">
                                        <h2 className="text-4xl font-bold text-gray-800 tracking-wide uppercase mb-2" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>School Timetable</h2>
                                        <div className="flex justify-center gap-8 text-lg font-semibold text-gray-700 mt-4">
                                            <div className="border-b-2 border-gray-400 min-w-[150px] text-center">Name: Student</div>
                                            <div className="border-b-2 border-gray-400 min-w-[150px] text-center">Class: {cls.name}</div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 overflow-x-auto relative z-10">
                                    <div className="min-w-[800px] bg-white/80 rounded-xl p-4 shadow-sm border-2 border-white">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr>
                                                    {/* Diagonal Header Simulation */}
                                                    <th className="border-2 border-orange-200 bg-orange-100 p-2 w-32 relative h-16">
                                                        <span className="absolute bottom-1 left-2 text-xs font-bold text-orange-800">TIME</span>
                                                        <span className="absolute top-1 right-2 text-xs font-bold text-orange-800">DAY</span>
                                                        <div className="absolute inset-0 border-t-2 border-orange-200 transform rotate-12 origin-top-left w-[120%] -ml-1"></div>
                                                    </th>
                                                    {["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"].map((day) => (
                                                        <th key={day} className="border-2 border-orange-200 bg-white text-orange-800 p-2 text-sm font-bold w-1/6">
                                                            {day}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { time: "08:00 - 08:40", type: "period" },
                                                    { time: "08:40 - 09:20", type: "period" },
                                                    { time: "09:20 - 10:00", type: "period" },
                                                    { time: "10:00 - 10:40", type: "period" },
                                                    { time: "10:40 - 11:10", type: "break", label: "BREAK" },
                                                    { time: "11:10 - 11:50", type: "period" },
                                                    { time: "11:50 - 12:30", type: "period" },
                                                    { time: "12:30 - 01:10", type: "period" },
                                                    { time: "01:10 - 01:50", type: "period" },
                                                ].map((slot, idx) => (
                                                    <tr key={idx}>
                                                        <td className="border-2 border-orange-200 bg-orange-50 p-3 text-xs font-bold text-center text-gray-600">
                                                            {slot.time}
                                                        </td>
                                                        {slot.type === "break" ? (
                                                            <td colSpan={6} className="border-2 border-orange-200 bg-yellow-100/50 p-2 text-center font-bold text-yellow-700 tracking-widest text-sm">
                                                                {slot.label}
                                                            </td>
                                                        ) : (
                                                            // We will cycle through subjects for the demo to fill the grid
                                                            [0, 1, 2, 3, 4, 5].map((dayIdx) => (
                                                                <td key={dayIdx} className="border-2 border-orange-200 bg-white p-2 text-center text-sm font-medium text-gray-700 hover:bg-orange-50 transition-colors">
                                                                    {cls.subjects[(idx + dayIdx) % cls.subjects.length]}
                                                                </td>
                                                            ))
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Decorative corner elements matching image concept */}
                                    <div className="absolute top-4 left-4 opacity-20 pointer-events-none">
                                        <Smile className="w-16 h-16 text-yellow-500 rotate-[-15deg]" />
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
                                        <cls.icon className="w-16 h-16 text-blue-500 rotate-[15deg]" />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
