"use client"
import React, {useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>SMP Damai</li>
                <li>SMAN 19 Jakarta</li>
                <li>Bina Nusantara University, Indonesia</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>Head of Student Organization @SMP Damai</li>
                <li>Head of Secretariat, Entrepreneurship, and Internal Relation @KMBD Bina Nusantara</li>
                <li>Game Programmer of @BGDC Bina Nusantara 3rd Batch Talent Group</li>
                <li>Game Programmer for Evul University</li>
                <li>Ex-Website Editor for Hong Kong Committee something idfk</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab,setTab] = useState("skills")
    const [isPending,startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py=16 xl:px-16'>
            <Image src="/images/About-Us.png" width={500} height={500} alt='aboutusimg'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About Me
                </h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dignissimos doloribus consequatur minus sunt quas corporis? 
                    Optio fugit dicta necessitatibus, aut non sunt ea laudantium vero, harum quod eos expedita sint.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}>
                    
                    {" "}Skills{" "}
                    
                    </TabButton>

                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}>
                    
                    {" "}Education{" "}
                    
                    </TabButton>

                    <TabButton 
                    selectTab={() => handleTabChange("experience")} 
                    active={tab === "experience"}>
                    
                    {" "}Experience{" "}
                    
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>

    </section>
  )
}

export default AboutSection