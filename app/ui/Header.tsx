'use client'
import Projects from '@/app/ui/Projects'

export default function Header() {
  return (
    <header className='fixed top-0 z-10 flex items-center gap-2 w-full h-16 p-4 bg-black'>
      <Projects />
    </header>
  )
}