import React from 'react';
import {CalendarHeart} from "react-bootstrap-icons";

const DateSection = ({text}: { text?: string }) => {
    const saveDateToCalendar = () => {
        const eventStartDate = new Date(2025, 5, 27, 14, 30); // Month is 0-indexed
        const eventEndDate = new Date(2025, 5, 27, 16, 0); // One hour event

        const icsData = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `DTSTART:${formatDateToICS(eventStartDate)}`,
            `DTEND:${formatDateToICS(eventEndDate)}`,
            'SUMMARY: Kevin & Sayanthini Wedding',
            'DESCRIPTION:Remember this special date!',
            'LOCATION:Lana Events, 18 Rue des Artisans, 95190 Goussainville',
            'URL;VALUE=URI:https://www.google.com/maps/place/LANA+EVENTS/@49.0189359,2.4664113,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6416af16c83a1:0x8ff691d333704f86!8m2!3d49.0189324!4d2.4689862!16s%2Fg%2F11q22jf3yr?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D',
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsData], {type: 'text/calendar;charset=utf-8'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'event.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const formatDateToICS = (date: Date) => {
        return [
            date.getUTCFullYear(),
            String(date.getUTCMonth() + 1).padStart(2, '0'),
            String(date.getUTCDate()).padStart(2, '0'),
            'T',
            String(date.getUTCHours()).padStart(2, '0'),
            String(date.getUTCMinutes()).padStart(2, '0'),
            String(date.getUTCSeconds()).padStart(2, '0'),
            'Z'
        ].join('');
    };

    return (

        <div className="btn btn-light shadow-lg rounded-5" onClick={saveDateToCalendar}>
            {
                text ?
                    <>
                        <span className="text-bg-pimary">{text}</span>
                        <CalendarHeart className="text-bg-danger"/>
                    </>
                    :
                    <CalendarHeart className="text-bg-danger"/>
            }
        </div>
    );
};

export default DateSection;
