'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const links = [
    { href: '/', text: 'Home' },
    { href: '/html', text: 'Pure HTML' },
    { href: '/vue', text: 'Vue' },
    { href: '/react', text: 'React' },
  ]

  return (
    <header className='fixed top-0 z-10 flex items-center gap-4 w-full h-16 p-4 bg-black'>
      { links.map(({ href, text }) =>
        <Link key={text} className={pathname === href ? 'text-blue-400' : ''} href={href}>{text}</Link>) }
    </header>
  )
}