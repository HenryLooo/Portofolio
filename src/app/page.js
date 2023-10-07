import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementSection from './components/AchievementSection'
import Script from 'next/script'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1b1b1b]">
      {/* <Navbar/> */}
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AchievementSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
        
      </div>
      <Footer/>
    </main>
  )
}
