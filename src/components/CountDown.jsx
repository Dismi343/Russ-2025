import React, { useEffect, useState, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const sectionRef = useRef(null)
  const isVisible = useScrollAnimation(sectionRef)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      })
      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-4 ">
      <div className="text-3xl font-bold text-[#4c4e82] flex items-center justify-center">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="mt-2 text-gray-600 text-sm">{label}</span>
    </div>
  )
  return (
    <div ref={sectionRef} className="bg-white py-2">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        
        <div className="flex justify-center items-center space-x-2">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
        <div className="mt-12">
          <hr className="border-gray-200" />
        </div>
      </div>
    </div>
  )
}
export default CountdownSection
