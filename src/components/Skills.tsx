import React from "react";

interface SkillCategory {
    category: string;
    items: string[];
}

const Skills: React.FC = () => {
    const skillsData: SkillCategory[] = [
        {
            category: "Language",
            items: ["TypeScript", "JavaScript", "Python"],
        },
        {
            category: "Frontend",
            items: [
                "Next.js (React)",
                "Zustand",
                "Recoil",
                "React-Query",
                "React-Hook-Form",
                "Sass",
                "Tailwind CSS",
                "Emotion",
            ],
        },
        {
            category: "Backend",
            items: ["Django", "Firebase", "Supabase"],
        },
        {
            category: "DevOps",
            items: ["AWS", "Vercel", "Docker"],
        },
    ];

    return (
        <section id="skills" style={{ padding: "" }}>
            <h1 style={{ color: "#609ca4", fontSize: "50px", marginBottom: "30px" }}>Skills</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                {skillsData.map((skillCategory) => (
                    <div key={skillCategory.category} style={{ backgroundColor: "#fdf5e6", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                        <h2 style={{ color: "#609ca4", fontSize: "20px", marginBottom: "15px" }}>{skillCategory.category}</h2>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {skillCategory.items.map((item) => (
                                <li key={item} style={{ marginBottom: "10px", backgroundColor: "#609ca4", color: "#fff", borderRadius: "5px", padding: "5px 10px", display: "inline-block", fontSize: "14px" }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;