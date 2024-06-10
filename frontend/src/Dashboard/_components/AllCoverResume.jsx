import { useCreate } from '@/hook/useCreate'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const user = JSON.parse(localStorage.getItem('cv_user'))

export const AllCoverResume = () => {
    const {fetchData} = useCreate();

    const {} = useQuery({
        queryKey : ['fetch all cover-letter && resumes'],
        queryFn : () => fetchData()
    })
    return (
        <div>AllCoverResume</div>
    )
}
