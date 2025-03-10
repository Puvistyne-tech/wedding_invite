import React, { useState } from "react";
import background from '../assets/gallery/section_bg2.jpg';

interface HeadingSectionProps {
    title: string;
    subtitle?: string;
    fontFamily?: string;
    fontSize?: string;
    canCopy?: boolean;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, subtitle, fontFamily, fontSize, canCopy }) => {
    const [copyFeedback, setCopyFeedback] = useState<string>('');

    const handleCopy = async (text: string) => {
        if (!canCopy) return;
        
        try {
            await navigator.clipboard.writeText(text);
            setCopyFeedback('Copied!');
            setTimeout(() => setCopyFeedback(''), 2000); // Clear feedback after 2 seconds
        } catch (err) {
            setCopyFeedback('Failed to copy');
            setTimeout(() => setCopyFeedback(''), 2000);
        }
    };

    const clickableStyle = canCopy ? {
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        ':hover': {
            opacity: 0.8
        }
    } : {};

    return (
        <div className="m-4 img-fluid border-2 shadow-lg d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative'
            }}
        >
            <h1
                onClick={() => handleCopy(title)}
                className={"display-2 text-center font-weight-bold pt-2 mt-2"}
                style={{
                    color: 'rgb(183, 172, 67)',
                    fontFamily: fontFamily || '"Dancing Script", cursive , "Caveat", cursive',
                    fontSize: fontSize || '4rem',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    ...clickableStyle
                }}
            >
                {title}
            </h1>

            {subtitle && (
                <h2
                    onClick={() => handleCopy(subtitle)}
                    className={"display-5 text-center mb-3"}
                    style={{
                        color: '#74bdf8',
                        fontFamily: ' "Dancing Script", cursive , "Caveat", cursive',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                        ...clickableStyle
                    }}
                >
                    {subtitle}
                </h2>
            )}

            {copyFeedback && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        zIndex: 1000,
                        animation: 'fadeIn 0.3s ease-in-out'
                    }}
                >
                    {copyFeedback}
                </div>
            )}
        </div>
    );
};

export default HeadingSection;