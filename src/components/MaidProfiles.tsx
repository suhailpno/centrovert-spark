import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, User } from "lucide-react";

const MaidProfiles = () => {
    const profiles = [
        {
            id: 1,
            name: "Siti Rahayu",
            age: 28,
            experience: "4 Years (SG)",
            type: "Transfer",
            skills: ["Infant Care", "Cooking", "General Housekeeping"],
            imageColor: "bg-blue-100",
        },
        {
            id: 2,
            name: "Dewi Sartika",
            age: 32,
            experience: "6 Years (SG)",
            type: "Transfer",
            skills: ["Elderly Care", "Cooking", "Marketing"],
            imageColor: "bg-green-100",
        },
        {
            id: 3,
            name: "Putri Lestari",
            age: 24,
            experience: "Fresh",
            type: "New",
            skills: ["Childcare", "Housekeeping", "Pet Care"],
            imageColor: "bg-pink-100",
        },
        {
            id: 4,
            name: "Nurul Hidayah",
            age: 35,
            experience: "8 Years (TW)",
            type: "Ex-Taiwan",
            skills: ["Elderly Care", "Chinese Cooking", "Mandarin Speaking"],
            imageColor: "bg-yellow-100",
        },
    ];

    return (
        <section id="profiles" className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                        Featured <span className="text-secondary">Profiles</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Browse our curated list of available helpers. Updated daily.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {profiles.map((profile) => (
                        <div key={profile.id} className="group relative bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                            <div className={`h-48 w-full ${profile.imageColor} flex items-center justify-center relative`}>
                                <User className="w-20 h-20 text-primary/20" />
                                <Badge className="absolute top-3 right-3 bg-white/90 text-primary hover:bg-white">
                                    {profile.type}
                                </Badge>
                            </div>

                            <div className="p-5 space-y-4">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-primary">{profile.name}</h3>
                                    <p className="text-sm text-muted-foreground">{profile.age} Years Old • {profile.experience}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {profile.skills.map((skill, i) => (
                                        <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-secondary/10 text-primary font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                                    View Profile
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                        View All Available Helpers
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default MaidProfiles;
