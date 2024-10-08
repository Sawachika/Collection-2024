import { Image } from 'antd'
import Link from 'next/link'

export default function Vue () {
  return (
    <main className='grid gap-4 p-4'>
      <div className='md:flex gap-4'>
        <Image src="/image/r1.jpg" alt="Practice" width={350} />
        <article>
          <Link href="https://next-js-dashboard-c2l9ko1tc-sawachikas-projects.vercel.app/" target="_blank" className='flex gap-2 text-blue-400'>
            <span>Practice</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </Link>
          <p>Next.js official free course.</p>
        </article>
      </div>
    </main>
  )
}