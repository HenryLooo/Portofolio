"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import CountUp from 'react-countup';


const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  })

const achievementList = [
    {
        metric:"Projects",
        value: "1",
        postfix: "+",
    },
    {
        prefix: "~",
        metric:"Users",
        value: "100",
        
    },
    {
        metric:"Awards",
        value: "0",
    },
    {
        metric:"Years",
        value: "3",
    },
]

const AchievementSection = () => {
    
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
            
            {achievementList.map((achievement, index) => {
                //const num ={achievement.value}
                //console.log("Achievement Value:", achievement.value)
                return (
                    <div
                        key = {index} 
                        className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
                    >
                        <h2 className='text-white text-4xl font-bold flex flex-row'>
                            {achievement.prefix}
                            
                            {/* <AnimatedNumbers    
                            includeComma
                            animateToNumber={parseInt(achievement.value)}
                            locale='en-US'
                            className="text-white"
                            
                            /> */}

                            <CountUp
                                start={0}
                                end={achievement.value}
                                duration={5}
                                
                            />
                            {achievement.postfix}
                        </h2>
                        <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AchievementSection