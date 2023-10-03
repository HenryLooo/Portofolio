"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"


const projectsData =[
    {
        id:1,
        title:"React Portfolio Website",
        description:"Project Desc",
        image:"/images/1Porto.jpg",
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id:2,
        title:"React Portfolio Website",
        description:"Project Desc",
        image:"/images/2Porto.jpg",
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id:3,
        title:"React Portfolio Website",
        description:"Project Desc",
        image:"/images/3Porto.png",
        tag: ["All","Mobile"],
        gitUrl: "/",
        previewUrl: "/"
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