import './App.css'
import photo from '@/assets/photo.jpeg'
import Skill from '@/components/Skill'
import Heading from './components/Heading'

function App() {
  
  return (
    <main>
      <section className="flex flex-col sm:flex-row justify-center sm:gap-25 items-center sm:mt-30">
        <div className="w-[330px] sm:flex-col">
          <Heading title="Web Developer" />
          <p className="text-[18px] leading-[1.2] px-2">Hi, I am Shubham Sharma. I build production-ready PERN stack applications with secure authentication, efficient APIs, and scalable database systems.</p>
        </div>
        <img className="pt-10 h-auto w-[320px] sm:pt-0" src={photo} alt="Developer looking at mountains" />
      </section>
      <section className="flex flex-col gap-8 px-4 py-8">
        <Heading title="Skills" />
        <Skill title="Languages" skills="HTML & CSS, JavaScript, Python" />
        <Skill title="Core" skills="CRUD, JWT Auth, API design" />
        <div className="flex justify-between w-[300px]">
          <Skill title="Backend" skills="Node.js, Express" />
          <Skill title="Database" skills="PostgreSQL" />
        </div>
        <Skill title="Library and Frameworks" skills="React, React Native, NextJS, Tailwind" />
      </section>
    </main>
  )
}

export default App
