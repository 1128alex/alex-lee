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
                position: "relative",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "18px",
                overflow: "hidden",
                background: "none",
            }}
        >
            <span
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "black",
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                    zIndex: 0,
                }}
            />
            <span
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    background: "#121212",
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                    zIndex: 0,
                }}
            />
            <img
                src={logoPath}
                alt={name}
                style={{
                    width: "22px",
                    height: "22px",
                    marginRight: "5px",
                    objectFit: "contain",
                    zIndex: 1,
                }}
            />
            <span style={{ zIndex: 1 }}>{name}</span>
        </li>
    );
};

export default SkillBanner;
