import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                <ProjectCard
                    src='/test.png'
                    title='Speech To Text'
                    description='A nice speech to text app made with Python,Librosa,pttsx3 and more python libraries.'
                />
                <ProjectCard
                    src='/project10.png'
                    title='Food Website'
                    description='A beautiful website with food recipes, with React.'
                />
                <ProjectCard
                    src='/project13.png'
                    title='A Form'
                    description='A beautiful form using React'
                />
                <ProjectCard
                    src='/project2.png'
                    title='A snickers app'
                    description='this is an app that selling snickers , you can choose your gender and color and your size, using React'
                />
                <ProjectCard
                    src='/project9.png'
                    title='team information page'
                    description='A beautiful team information page using React'
                />
                <ProjectCard
                    src='/project5.png'
                    title='a Todo List'
                    description='A Todo App made with React'
                />
                <ProjectCard
                    src='/project7.png'
                    title='A Stopwatch app'
                    description='a useful stopwatch app , JS'
                />
                <ProjectCard
                    src='/project4.png'
                    title='a piano app'
                    description='A piano app with JS'
                />
                <ProjectCard
                    src='/project11.png'
                    title='a calculator app'
                    description='A calculator with React'
                />
                <ProjectCard
                    src='/project3.png'
                    title='A CPS test app'
                    description='this is an app that selling snickers , you can choose your gender and color and your size, using React'
                />
                <ProjectCard
                    src='/porport.png'
                    title='portfolio'
                    description='A beautiful one page porfolio using React'
                />
                <ProjectCard
                    src='/project5.png'
                    title='a Todo List'
                    description='A Todo App made with React'
                />
            </div>
        </div>
    )
}

export default Projects
