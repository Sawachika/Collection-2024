'use client'
import { ConfigProvider, theme, Timeline } from 'antd'

export default function Home() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <main className='p-4'>
        <p className='mb-4 text-xl text-center'>This website using React, Next.js, Ant Design, Tailwind</p>
        <h2 className='mb-4 text-xl text-center'>My Learning Roadmap</h2>
        <Timeline mode='left' items={[
          {
            label: '2024 ~',
            children: 'React, Next.js'
          },
          {
            label: '2022 ~ 2024',
            children: 'Vue3, Nuxt3, Stylus, Tailwind, UnoCSS, Element-Plus'
          },
          {
            label: '2019 ~ 2022',
            children: 'Git Flow, Nuxt2, StyleLint, BootStrap5'
          },
          {
            label: '2017 ~ 2019',
            children: 'Git, JavaScript ES6+, Vue, Nuxt.js, ESLint, Pug, Sass, BootStrap-Vue, Element-UI, I18n, CleanCode'
          },
          {
            label: '2015 ~ 2017',
            children: 'HTML5, CSS3, BootStrap, JavaScript, JQuery, AJAX, PHP, MySQL'
          },
        ]} />
      </main>
    </ConfigProvider>
  )
}
