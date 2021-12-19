import React from 'react'
import { styles } from '../styles/styles.config'

const skill_sections = [
    {
        title: 'Basics',
        icon: 'bar-chart-fill',
        skills: [
            {
                name: 'HTML, CSS',
                percent: 95,
            },
            {
                name: 'JavaScript, TypeScript',
                percent: 95,
            },
            {
                name: 'Jira, Trello, Slack',
                percent: 95,
            },
        ],
    },
    {
        title: 'Styling',
        icon: 'brush-fill',
        skills: [
            {
                name: 'SASS, LESS',
                percent: 95,
            },
            {
                name: 'Bootstrap, W3CSS',
                percent: 95,
            },
            {
                name: 'PostCSS, Tailwind',
                percent: 90,
            },
        ],
    },
    {
        title: 'Front',
        icon: 'easel2-fill',
        skills: [
            {
                name: 'React, React Native',
                percent: 95,
            },
            {
                name: 'NEXTjs, Gatsby, GraphQL',
                percent: 85,
            },
            {
                name: 'Vue, NuxtJS',
                percent: 60,
            },
        ],
    },
    {
        title: 'Back',
        icon: 'hdd-rack-fill',
        skills: [
            {
                name: 'Node (Express)',
                percent: 95,
            },
            {
                name: 'Python (Flask, Django)',
                percent: 75,
            },
            {
                name: 'MongoDB, Mongoose',
                percent: 65,
            },
            {
                name: 'Linux services, Docker',
                percent: 50,
            },
        ],
    },
]

export default function Skills() {
    return (
        <div>
            <div
                className={
                    'text-center p-10 text-2xl skew-y-6 shadow-lg bg-teal-500 bg-teal-500 text-white shadow dark:bg-teal-800 shadow-teal-300 dark:shadow-teal-500'
                }
            >
                <h3>
                    Web development <br /> <i className='bi bi-code-slash'></i>
                </h3>
            </div>

            <div className='container mx-auto mt-20 px-5'>
                <h2 className='text-2xl my-5'>
                    <i className='bi bi-kanban'></i> What I do
                </h2>
                <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {skill_sections.map((section, idx) => (
                        <div key={idx} className={'rounded p-5 ' + styles.card}>
                            <h3 className='text-xl'>
                                <i className={'bi bi-' + section.icon}></i>&nbsp;{section.title}
                            </h3>
                            <hr />
                            <br />
                            {section.skills.map((skill, idx_skill) => (
                                <div key={idx_skill}>
                                    <span>{skill.name}</span>
                                    <div className='bg-zinc-200 dark:bg-zinc-700 h-2 rounded'>
                                        <div
                                            className='bg-teal-500 h-2 rounded'
                                            style={{ width: `${skill.percent}%` }}
                                        ></div>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
