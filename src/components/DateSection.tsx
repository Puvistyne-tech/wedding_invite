import React from 'react';
import {CalendarHeart} from "react-bootstrap-icons";

const DateSection = ({text}: { text?: string }) => {
    const saveDateToCalendar = () => {
        const eventStartDate = new Date(2024, 4, 18, 10, 0); // Month is 0-indexed
        const eventEndDate = new Date(2024, 4, 18, 11, 0); // One hour event

        const icsData = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `DTSTART:${formatDateToICS(eventStartDate)}`,
            `DTEND:${formatDateToICS(eventEndDate)}`,
            'SUMMARY:Special Event',
            'DESCRIPTION:Remember this special date!',
            'LOCATION:Venue location',
            'URL;VALUE=URI:https://www.yourevent.com',
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

        <div className="btn btn-light rounded-5" onClick={saveDateToCalendar}>
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
