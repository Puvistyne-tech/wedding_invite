import React, {useEffect, useState} from "react";
import DateSection from "./DateSection";

import background from '../assets/gallery/section_bg5.jpg';
import background2 from '../assets/gallery/section_bg5.jpg';

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
                         backgroundImage: `url(${background2})`,
                     }}
                >
                    <div className="m-2 img-fluid rounded-1 col p-2 border-4 shadow-lg text-bg-primary text-center"
                         style={{
                             backgroundImage: `url(${background})`,
                             backgroundRepeat: 'no-repeat',
                             backgroundSize: 'cover',
                             // height: '15vh',
                             backgroundPosition: 'center',
                             fontFamily: '"Caveat", cursive', // Caveat font
                             fontSize: '1.5rem',
                             textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
                         }}
                    >
                        <div className="row justify-content-center"
                            style={{
                                color: '#ffffff',
                            }}
                        >
                            <div className="col-12 col-d-12">
                                <div className="count-down-wrapper"
                                     data-background="assets/img/gallery/section_bg2.png">
                                    <div className="row justify-content-between">
                                        <div className="col-3 ">
                                            <div className="single-counter text-center">
                                                <span className="counter">{timeLeft.days}</span>
                                                <p className="small">days</p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="single-counter active text-center">
                                                <span className="counter">{timeLeft.hours}</span>
                                                <p className="small">hrs</p>
                                            </div>
                                        </div>
                                        <div className="col-2 ">
                                            <div className="single-counter text-center">
                                                <span className="counter">{timeLeft.minutes}</span>
                                                <p className="small">min</p>
                                            </div>
                                        </div>
                                        <div className="col-3 ">
                                            <div className="single-counter text-center">
                                                <span className="counter">{timeLeft.seconds}</span>
                                                <p className="small">sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
