import { TheRCCard } from '@/components/TheRCCard';
import { Skeleton } from '@/components/ui/skeleton';
import { useCreate } from '@/hook/useCreate'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const user = JSON.parse(localStorage.getItem('cv_user'))

export const AllCoverResume = () => {
    const {fetchData} = useCreate();

    const {data , isPending , isSuccess} = useQuery({
        queryKey : ['fetch all cover-letter && resumes'],
        queryFn : () => fetchData(`https://mern-cv-builder.onrender.com/api/get/all/:${user._id}`)
    })


    console.log(data);

    return (
        <div>
            <section className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-2'>
                {isPending && (
                    [1 ,2 ,3 ,4 ,5 ,6].map((ele) => (
                        <Skeleton key={ele} className={'h-[20rem]'} />
                    ))
                )}

                {isSuccess && (
                    data.map((ele) => (
                        <TheRCCard key={ele._id} ele={ele} />
                    ))
                )}
            </section>
        </div>
    )
}
