import React from "react";

interface SkillBannerProps {
    name: string;
    logoPath: string;
}

const SkillBanner: React.FC<SkillBannerProps> = ({ name, logoPath }) => {
    return (
        <li
            style={{
                marginBottom: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "18px",
            }}
        >
            <img
                src={logoPath}
                alt={name}
                style={{
                    width: "22px",
                    height: "22px",
                    marginRight: "5px",
                    objectFit: "contain",
                }}
            />
            {name}
        </li>
    );
};

export default SkillBanner;
