import { Image } from 'antd'
import Link from 'next/link'
import { CollectionHtml } from '@/app/lib/data'

export default function Home() {
  return (
    <main className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
      { CollectionHtml.map(({ src, title, link }) => {
        return (
          <div key={title}>
            <Image src={src} alt={title} />
            { link ? (
              <Link href={link} target='_blank' className='flex items-center gap-2 text-blue-400'>
                <span>{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </Link>
            ) : <p>{title}</p> }
          </div>
        )
      }) }
    </main>
  )
}
