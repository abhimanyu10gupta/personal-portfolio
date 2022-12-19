import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  projects: Project[],
  skills: Skill[],
  socials: Social[]
}

export default function Home({pageInfo, skills, projects, socials, experiences}:Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Fyreneos Portfolio</title>

      </Head>

      <Header socials={socials}/>

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>


      <section id="experience" className='snap-center'>
        <Experiences experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer '>
          <div className='flex items-center justify-center'>

          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="https://i.imgur.com/e2yvD6A.png" alt="" />
          
          </div>

        </footer>
      </Link>

    </div>

  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      skills,
      projects
    },
    revalidate: 10,
  }

}