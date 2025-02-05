'use client'
import { ConfigProvider, theme, Tag } from 'antd'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Projects({ showHome = true }) {
  const pathname = usePathname()
  const links = [
    { href: '/vue', text: 'Vue' },
    { href: '/react', text: 'React' },
    { href: '/html', text: 'Pure HTML' },
  ]
  if (showHome) links.unshift({ href: '/', text: 'Home' })

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      { links.map(({ href, text }) =>
        <p key={text} className='relative'>
          <Tag className='relative fon' color="blue">
            <span className={`absolute left-0 w-full text-base text-center ${pathname === href ? 'text-blue-400' : ''}`}>{text}</span>
            <Link className={`relative text-base ${text === 'Vue' ? 'animate-ping brightness-200' : ''} ${pathname === href ? 'text-blue-400' : ''}`} href={href}>{text}</Link>
          </Tag>
        </p>
      )}
    </ConfigProvider>
  )
}