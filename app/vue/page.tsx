'use client'
import { ConfigProvider, theme, Image, Tag } from 'antd'
import Link from 'next/link'
import { CollectionVue } from '@/app/lib/data'

export default function Vue () {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <h2 className='flex flex-wrap gap-2 mt-4 px-4'>The following projects mainly use
        <Tag color="cyan">Nuxt</Tag>
        <Tag color="gold">Pug</Tag>
        <Tag color="gold">Stylus</Tag>
        <Tag color="gold">UnoCSS</Tag>
        <Tag color="gold">Pinia</Tag>
        <Tag color="gold">Element-Plus</Tag>
        <Tag color="gold">Swiper</Tag>
        <Tag color="gold">I18N</Tag>
      </h2>
      <main className='grid md:grid-cols-2 gap-4 p-4'>
        { CollectionVue.map(({ src, title, descript, link }) => {
          return (
            <div key={title} className='flex gap-4 rounded-lg overflow-hidden bg-zinc-800'>
              <Image src={src} alt={title} width={200} height={300} className='object-cover object-top' />
              <article className='p-2'>
                { link ? (
                  <Link href={link} target='_blank' className='flex gap-2 text-blue-400'>
                    <span>{title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z"/></svg>
                  </Link>
                ) : <p>{title}</p> }
                <p>{descript}</p>
              </article>
            </div>
          )
        }) }
      </main>
    </ConfigProvider>
  )
}