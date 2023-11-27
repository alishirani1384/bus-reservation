"use client";
import React,{useState} from 'react'
import { CalendarProvider,Calendar } from 'zaman'

function DateCalender() {
  const [calendarValue, setCalendarValue] = useState(new Date())
  return (
    <CalendarProvider accentColor="#FFFFFF" locale='fa'>
      <Calendar
        defaultValue={calendarValue}
        onChange={(day) => setCalendarValue(new Date(day))}
      />
    </CalendarProvider>
  )
}

export default DateCalender