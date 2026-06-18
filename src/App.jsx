import './App.css'
import photo from '@/assets/photo.jpeg'
import Skill from '@/components/Skill'
import Heading from './components/Heading'

function App() {
  
  return (
    <main className="flex flex-col items-center snap-y snap-mandatory">
      <section className="flex flex-col sm:flex-row h-[90vh] justify-center sm:gap-25 items-center sm:mt-0" id='home'>
        <div className="w-[330px] sm:flex-col">
          <Heading title="Web Developer" />
          <p className="text-[18px] leading-[1.2] px-2">Hi, I am Shubham Sharma. I build production-ready PERN stack applications with secure authentication, efficient APIs, and scalable database systems.</p>
        </div>
        <img className="pt-10 h-auto w-[320px] sm:pt-0" src={photo} alt="Developer looking at mountains" />
      </section>
      <section className="flex gap-8 sm:gap-16 px-4 sm:px-0 py-18 sm:w-[730px] flex-col w-[360px] h-[90vh]" id='skills'>
        <Heading title="Skills" />
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:w-[680px]">
          <Skill title="Languages" skills="HTML & CSS, JavaScript, Python" />
          <Skill title="Core" skills="CRUD, JWT Auth, API design" />
        </div>
        <div className="flex flex-col justify-between sm:flex-row gap-8">
          <div>
            <div className="flex justify-between w-[260px]">
              <Skill title="Backend" skills="Node.js, Express" />
              <Skill title="Database" skills="PostgreSQL" />
            </div>
          </div>
          <Skill title="Library and Frameworks" skills="React, React Native, NextJS, Tailwind" />
        </div>
      </section>
    </main>
  )
}

export default App
