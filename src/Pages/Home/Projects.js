import React from 'react';
import useProjects from '../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects] = useProjects();
    console.log(projects);
    return (
        <div>
            <div className='text-center w-100'>
                <h2 className='py-4 text-4xl text-accent font-bold'>LATEST PROJECT</h2>
                <div className="flex justify-center mb-16">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:px-24 px-12 pb-24'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;