import React from 'react'
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"
import { AllCoverResume } from './AllCoverResume'


export const UserLetterREsume = () => {
    return (
        <section className='container'>
            <Tabs defaultValue="all" className="w-full mt-5">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="resume">Resume</TabsTrigger>
                    <TabsTrigger value="cover letter">Cover Letter</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <AllCoverResume/>
                </TabsContent>
                <TabsContent value="resume">Change your password here.</TabsContent>
                <TabsContent value="cover letter">Change your cover letter here.</TabsContent>
            </Tabs>
        </section>
    )
}
