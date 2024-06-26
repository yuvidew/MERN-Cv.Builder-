import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PersonalInfoFrom } from './_components/PersonalInfoFrom'
import { WorkExperience } from './_components/WorkExperience'
import { Projects } from './_components/Projects'
import { EducationFrom } from './_components/EducationFrom'
import { SkillsForm } from './_components/SkillsForm'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Footer } from '@/components/Footer'

export const ResumeFormWrapper = ({
  setTitle
}) => {
  const [formType , setFormType] = useSearchParams({
    q:'personal-info',
    onlyComputer : true
  })

  const select = formType.get('q')

  const onSelect = (text) => {
    setFormType(prev => {
      prev.set('q' , text)
      return prev
    } , {replace : true})
  }

  const btnList = [
    {
      text : 'Personal Info',
      url : 'personal-info',
      comp: <PersonalInfoFrom onAddType = {onSelect} formType={'work-Experience'} />
    },
    {
      text : 'Work Experience',
      url : 'work-Experience',
      comp: <WorkExperience onAddType = {onSelect} formType = {"projects"} />
    },
    {
      text : 'Projects',
      url : 'projects',
      comp: <Projects onAddType = {onSelect} formType = {"education"} />
    },
    {
      text : 'Education',
      url : 'education',
      comp: <EducationFrom onAddType = {onSelect} formType = {"skills"} />
    },
    {
      text : 'Skills',
      url : 'skills',
      comp: <SkillsForm />
    },
  ]

  const theComp = useMemo(() => {
    return btnList.filter(ele => ele.url == select)
  } , [select])

  useEffect(() => {
    setTitle(select)
  } , [select])


  return (
    <>
    <section className='lg:hidden  mt-4 '>
      <Accordion type="double" collapsible >
          {btnList.map(ele => (
              <AccordionItem value={ele.url} key={ele.url} className={""}>
                  <AccordionTrigger 
                      className = 'w-[100%] border py-4'
                      key={ele.text} 
                      onClick = {() => onSelect(ele.url)}
                  >
                      {ele.text}
                  </AccordionTrigger>
                  <AccordionContent className  = "">
                      {theComp[0].comp }
                  </AccordionContent>
              </AccordionItem>
          ))}
      </Accordion>
      <br />
    </section>
    <section className='lg:flex hidden items-start gap-2 mt-4'>
      <div className=' w-[15%]'>
          {btnList.map(ele => (
            <Button 
              variant = {select == ele.url && "ghost"}
              key={ele.text} 
              className ="mt-5 w-full flex items-center justify-between text-[1rem] "
              onClick = {() => onSelect(ele.url)}
            >
              {ele.text}
              <ChevronRight className=' h-5 w-5' />
            </Button>
          ))}
      </div>
      <div className=' w-[85%] h- p-5'>
        {theComp[0].comp}
      </div>
    </section>
    </>
  )
}
