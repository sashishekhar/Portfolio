import React from 'react'

const Projects = () => {
    const projects = [
        {
            image: "/project1.png",
            alt: "Project One",
            title: "Project One",
            description: "Description of project one.",
            link: "https://example.com/project-one"
        },
        {
            image: "/project2.png",
            alt: "Project Two",
            title: "Project Two",
            description: "Description of project two.",
            link: "https://example.com/project-two"
        },
        {
            image: "/project3.png",
            alt: "Project Three",
            title: "Project Three",
            description: "Description of project three.",
            link: "https://example.com/project-three"
        }
    ];
  return (
    <div>
        <div className="flex flex-col gap-4 bg-white dark:bg-neutral-900  w-full h-[800px]">
            <div className="flex flex-row justify-between items-center p-6 inset-shadow-[1px_1px_2px_0px_rgba(0,0,0,0.06),-1px_-1px_2px_0px_rgba(0,0,0,0.06)] border-1 border-neutral-300 rounded-[20px]">
                {projects.map((project, index) => (
                <div key={index} className="flex flex-col w-[230px] h-[350px] p-2 bg-neutral-100 dark:bg-neutral-800 gap-2">
                    <img src={project.image} alt={project.alt} className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-neutral-500">{project.description}</p>
                    <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                </div>
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default Projects
