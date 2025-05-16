import React from "react";
import SkillBanner from "./SkillBanner";
import skillLogos from "../assets/img/skills";
import "../assets/scss/section/_projects.scss";

interface ProjectBannerProps {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
    skills: string[];
    logoFileNames: string[];
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ title, description, thumbnail, link, skills, logoFileNames }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-banner-link-vertical">
            <div className="project-banner-vertical">
                <img src={thumbnail} alt={title} className="project-banner-thumbnail-vertical" />
                <div className="project-banner-content-vertical">
                    <div className="project-banner-title-vertical">{title}</div>
                    <div className="project-banner-skills-vertical">
                        {skills.map((skill, idx) => (
                            <SkillBanner
                                key={skill}
                                name={skill}
                                logoPath={skillLogos[logoFileNames[idx].replace(/\.[^/.]+$/, "") as keyof typeof skillLogos]}
                            />
                        ))}
                    </div>
                    <div className="project-banner-desc-vertical">{description}</div>
                </div>
            </div>
        </a>
    );
};

export default ProjectBanner;
