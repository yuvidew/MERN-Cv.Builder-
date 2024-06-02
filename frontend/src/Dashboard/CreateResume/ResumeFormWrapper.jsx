import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'
import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PersonalInfoFrom } from './_components/PersonalInfoFrom'

export const ResumeFormWrapper = () => {
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
      comp: 'second Comp'
    },
    {
      text : 'Projects',
      url : 'projects',
      comp: 'third Comp'
    },
    {
      text : 'Education',
      url : 'education',
      comp: 'three Comp'
    },
    {
      text : 'Skills',
      url : 'skills',
      comp: 'four Comp'
    },
  ]

  const theComp = useMemo(() => {
    return btnList.filter(ele => ele.url == select)
  } , [select])


  return (
    <section className='flex items-start gap-2 mt-4'>
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
      <div className=' w-[85%]'>
        {theComp[0].comp}
      </div>
    </section>
  )
}
