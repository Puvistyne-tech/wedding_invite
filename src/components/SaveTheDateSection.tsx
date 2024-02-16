import React, {useEffect, useState} from "react";
import DateSection from "./DateSection";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './clocl.css';

interface SaveTheDateSectionProps {
    targetDate: string;
}

const SaveTheDateSection = ({targetDate}: SaveTheDateSectionProps) => {


    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: {
            days?: number;
            hours?: number;
            minutes?: number;
            seconds?: number;
        } = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <>
            {Object.keys(timeLeft).length > 0 && (
                <div className="border-2"
                     style={{
                         color: 'rgba(112,112,112,0.5)',
                     }}
                >
                    <div className="m-2 shadow-lg"
                         style={{
                             color: 'rgba(112,112,112,0.5)',
                             fontFamily: '"Caveat", cursive', // Caveat font
                             fontSize: '2rem',
                             textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center', // Center items horizontally
                             justifyContent: 'center', // Center items vertically
                         }}
                    >
                        <div className="count-down-wrapper ">
                            <FlipClockCountdown
                                className='flip-clock text-light text-center border-1'
                                to={'2024-05-18T14:00:00.635Z'}
                            />
                        </div>
                        <DateSection
                            text={"Save the date to your calendar"}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
export default SaveTheDateSection;
