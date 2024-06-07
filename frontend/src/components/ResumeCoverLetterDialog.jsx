import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { useQuery } from '@tanstack/react-query'
import { useCreate } from '@/hook/useCreate'
import Spinner from './ui/Spinner'


export const ResumeCoverLetterDialog = ({
    btnText, 
    id,
    url
}) => {
    const {fetchData} = useCreate()
    const {data , isPending , isError} = useQuery({
        queryKey : ['fetch the resume' , id],
        queryFn : () => fetchData(url)
    })

    return (
    <Dialog>
    <DialogTrigger className='w-full'>
        <Button
            size = "sm" 
            variant ='ghost' 
            className = "mt-5 w-full"
        >
            {btnText}
        </Button>
    </DialogTrigger>
    <DialogContent className = "dark:bg-stone-700 border-none">

    {isPending && <Spinner/>}
        <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
    </Dialog>
    )
}
