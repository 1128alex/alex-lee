import React from "react";
import SkillBanner from "./SkillBanner";
import skillLogos from "../assets/img/skills";

interface SkillCategory {
    category: string;
    items: string[];
    logoFileNames: string[];
}

const Skills: React.FC = () => {
    const skillsData: SkillCategory[] = [
        {
            category: "Languages",
            items: ["Java", "Python", "C/C++", "C#", "R", "TypeScript", "JavaScript", "SQL", "Bash"],
            logoFileNames: ["java.png", "python.png", "C.png", "CSharp.png", "R.png", "typescript.png", "javascript.png", "sql.png", "bash.png"],
        },
        {
            category: "Database",
            items: ["MySQL", "MongoDB"],
            logoFileNames: ["mysql.png", "mongodb.png"],
        },
        {
            category: "Frameworks/Libraries",
            items: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "SciKit", "BeautifulSoup", "React", "Spring"],
            logoFileNames: ["numpy.png", "pandas.png", "matplotlib.png", "opencv.png", "scikit.png", "beautifulsoup.png", "react.png", "spring.png"],
        },
        {
            category: "Development Tools",
            items: ["Git", "Linux", "AWS", "Make"],
            logoFileNames: ["git.png", "linux.png", "aws.png", "makefile.png"],
        },
    ];

    return (
        <section id="skills" style={{ paddingRight: "15%" }}>
            <h1 style={{ color: "#609ca4", fontSize: "50px", marginBottom: "30px", paddingTop: "110px" }}>Skills</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", borderRadius: "10px" }}>
                {skillsData.map((skillCategory) => (
                    <div
                        key={skillCategory.category}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#151b25",
                            borderRadius: "10px",
                            padding: "20px",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    color: "#99a9af",
                                    fontSize: "20px",
                                    marginBottom: "15px",
                                }}
                            >
                                {skillCategory.category}
                            </h2>
                            <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                {skillCategory.items.map((item, index) => (
                                    <SkillBanner
                                        key={item}
                                        name={item}
                                        logoPath={skillLogos[skillCategory.logoFileNames[index].replace(/\.[^/.]+$/, "") as keyof typeof skillLogos]}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;