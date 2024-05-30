import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Key, User } from 'lucide-react'
import { Button } from '@/components/ui/button'


export const SignIn = () => {
    const [isOpen , setIsOpen] = useState(false)
    return (
        <div>
            <h2 className=' text-center mt-[2rem] text-[1.5rem] text-stone-700 dark:text-stone-400'>Sign In</h2>
            <form action="" className=' mt-4'>
                <div className=' flex items-center border-b border-b-stone-900 mt-4 dark:border-b-white'>
                    <User/>
                    <Input 
                        placeholder = "Enter email.." 
                        className = "bg-transparent " 
                        required
                    />
                </div>
                <div className=' flex items-center border-b border-b-stone-900 mt-[1.5rem] dark:border-b-white'>
                    <Key/>
                    <Input 
                        type = {isOpen ? "text" : 'password'}
                        placeholder = "Enter password.." 
                        className = "bg-transparent " 
                        required
                    />
                    {isOpen ? (
                        <Eye onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer' />
                    ) : (
                        <EyeOff onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer' />
                    )}
                </div>

                <Button variant = "ghost" type = 'submit' className = "w-full mt-[1.8rem]">
                    Login
                </Button>
                <p className=' mt-5 text-stone-600 dark:text-stone-100'>
                    Create new account ?
                </p>
            </form>
        </div>
    )
}
