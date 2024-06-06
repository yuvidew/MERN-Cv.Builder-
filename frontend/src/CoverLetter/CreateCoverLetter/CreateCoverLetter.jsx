import { ModeToggle } from '@/components/ui/ModeTogle'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { LetterFormsWrapper } from './LetterFormsWrapper'
import { Progress } from '@/components/ui/progress'

export const CreateCoverLetter = () => {
    const {id} = useParams()
    const [title , setTitle] = useState('Personal-Info')
    return (
        <div className='dark:bg-stone-800 h-[100vh]' >
            <div className=' container'>
                <header>
                    <main className='flex items-center justify-between h-[5rem]'>
                        <h1 
                            className=' lg:text-[2rem] md:text-[1.5rem] text-[1.3rem] font-medium text-blue-600 dark:text-stone-100'>
                            Cv.Builder
                        </h1>
                        <ModeToggle/>
                    </main>
                </header>
                <section>
                    <h1 
                        className=' lg:text-[2.5rem] md:text-[1.7rem] text-[1.5rem] mt-4 text-stone-500 font-medium dark:text-stone-300'
                        style={{
                                textTransform : 'capitalize'
                        }}
                    >{title}</h1>
                    <p className=' text-right'>0%</p>
                    <Progress className = "mt-6 h-[.7rem]" value={20} />
                </section>
                <LetterFormsWrapper setTitle={setTitle} />
            </div>
        </div>
    )
}
