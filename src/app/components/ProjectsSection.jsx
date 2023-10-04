"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"


const projectsData =[
    {
        id:1,
        title:"Hongkong Committee on the Promotion of Civic Education Calendar Website",
        description:"Editing and maintaining the calendar website for the Hongkong Committee on the Promotion of Civic Education.",
        image:"/images/CPCE.jpg",
        tag: ["All","Web"],
        gitUrl: "https://github.com/HenryLooo/2023",
        previewUrl: "https://www.cpce.gov.hk/main/tc/index.html"
    },
    {
        id:2,
        title:"Horizons",
        description:"Designed the UI for a travel app called 'Horizons'.",
        image:"/images/Horizons.png",
        tag: ["All","Mobile"],
        gitUrl: "https://www.behance.net/gallery/164237103/Horizons",
        previewUrl: "https://www.figma.com/proto/RgDIGOtKa2Al1zYfBKEDYc/App-Horizons?page-id=0%3A1&type=design&node-id=22-652&viewport=302%2C144%2C0.18&t=AxikVIza1YkbIYsD-1&scaling=scale-down&starting-point-node-id=66%3A608&mode=design"
    
    },
    {
        id:3,
        title:"React Portfolio Website",
        description:"Created a portofolio website with Next.js and deployed it with vercel.",
        image:"/images/Portofolio-Web.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/HenryLooo/Portofolio",
        previewUrl: "https://henryloo.vercel.app/"
    },
    {
        id:4,
        title:"Forgotten Red Panda",
        description:"Programmed my first game called 'Forgotten Red Panda'!",
        image:"/images/Forgotten-Red-Panda.png",
        tag: ["All","Games"],
        gitUrl: "https://github.com/HenryLooo/ForgottenRedPanda",
        previewUrl: "https://bgdc.itch.io/forgotten-red-panda"
    },
    {
        id:5,
        title:"There will be another one here",
        description:"my ocd cannot handle this, so enjoy this cute picture of a baby seal!",
        image:"/images/Baby-Seal.jpg",
        tag: ["All","Games"],
        gitUrl: "https://www.google.com/search?q=baby+seal+cute+pic+4k&tbm=isch&ved=2ahUKEwjqo9bavNuBAxXZmmMGHYrcA-AQ2-cCegQIABAA&oq=baby+seal+cute+pic+4k&gs_lcp=CgNpbWcQAzoECCMQJ1DiA1jvBmCGCGgAcAB4AIABqAKIAfkGkgEFMC40LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=G98cZaqqD9m1juMPirmPgA4&bih=790&biw=1528#imgrc=WCI4Tx09av0WrM",
        previewUrl: "https://www.google.com/search?q=baby+seal+cute+pic+4k&tbm=isch&ved=2ahUKEwjqo9bavNuBAxXZmmMGHYrcA-AQ2-cCegQIABAA&oq=baby+seal+cute+pic+4k&gs_lcp=CgNpbWcQAzoECCMQJ1DiA1jvBmCGCGgAcAB4AIABqAKIAfkGkgEFMC40LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=G98cZaqqD9m1juMPirmPgA4&bih=790&biw=1528#imgrc=WCI4Tx09av0WrM"
    },
    {
        id:6,
        title:"I also believe there will be another one here",
        description:"but this one i'll leave blank, save me some time",
        image:"/images/Gato.jpeg",
        tag: ["All","Games"],
        gitUrl: "",
        previewUrl: ""
    },
]
const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true})

    const handleTagChange = (newTag)=>{
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    );

    const cardVariant = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    }


  return (
    <section>
    <h2 className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "All"}
        />
        <ProjectTag onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"}
        />
        <ProjectTag onClick={handleTagChange} 
        name="Mobile" 
        isSelected={tag === "Mobile"}
        />
        <ProjectTag onClick={handleTagChange} 
        name="Games" 
        isSelected={tag === "Games"}
        />
    </div>
    <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index)=> 
        <motion.li 
        key = {index}
        variants={cardVariant} 
        initial="initial" 
        animate={isInView ? "animate" : "initial"}
        transition={{duration: 0.5, delay: index*0.3}}
        >
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            tags={project}
            gitUrl = {project.gitUrl}
            previewUrl={project.previewUrl}/>
        </motion.li>
        )}
    </ul>
    </section>
  )
}

export default ProjectsSection