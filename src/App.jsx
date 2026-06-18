import './App.css'
import photo from '@/assets/photo.jpeg'

function App() {
  
  return (
    <main>
      <section className="flex flex-col sm:flex-row justify-center sm:gap-25 items-center sm:mt-30">
        <div className="w-[330px] sm:flex-col">
          <h1 className="text-[58px] leading-[1.2] font-bold px-2 py-8 sm:pt-0">Web Developer</h1>
          <p className="text-[18px] leading-[1.2] px-2">Hi, I am Shubham Sharma. I build production-ready PERN stack applications with secure authentication, efficient APIs, and scalable database systems.</p>
        </div>
        <img className="pt-10 h-auto w-[320px] sm:pt-0" src={photo} alt="Developer looking at mountains" />
      </section>
    </main>
  )
}

export default App
