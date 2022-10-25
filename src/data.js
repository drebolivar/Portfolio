// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaPython,
  FaNodeJs,
  FaVuejs
} from 'react-icons/fa'

import {
  SiJavascript,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiMaterialui
} from 'react-icons/si'

// Projects Images (add your images to the images directory and import below)
import CUL8R from './images/cul8r.png'
import Nostalgia from './images/nostalgia.png'
import RPS from './images/rpsgurui.png'
import fortuna from './images/fortuna.png'

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from './images/code-lightmode.jpg'
import HeroDark from './images/code-darkmode.jpg'
// If you change the import names above then you need to change the export names below
export { HeroLight as Light }
export { HeroDark as Dark }

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = 'drebolivar'

// Blog link icon (imported above)
export const Blog = <FaLink />

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `Creative minded software engineer with a drive for developing efficient projects that integrate seamlessly into a variety of platforms and operations. With a diverse professional background in analytics, healthcare management and filmmaking, I have a refined ability to deliver innovative and reliable results under high-pressure and unpredictable scenarios. I am intensely curious about how things work and have found that software development perfectly synthesizes the unique skill-set I’ve cultivated throughout my professional career.`

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: 'HTML5'
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: 'CSS3'
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: 'JavaScript'
  },
  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: 'React'
  },
  {
    id: 5,
    skill: <FaVuejs className="display-4" />,
    name: 'VueJs'
  },
  {
    id: 6,
    skill: <FaPython className="display-4" />,
    name: 'Python'
  },
  {
    id: 7,
    skill: <SiDjango className="display-4" />,
    name: 'Django'
  },
  {
    id: 8,
    skill: <FaNodeJs className="display-4" />,
    name: 'Node'
  },
  {
    id: 9,
    skill: <SiMongodb className="display-4" />,
    name: 'MongoDb'
  },
  {
    id: 10,
    skill: <SiPostgresql className="display-4" />,
    name: 'PostgreSQL'
  },
  {
    id: 11,
    skill: <SiExpress className="display-4" />,
    name: 'Express'
  },
  {
    id: 12,
    skill: <FaGitAlt className="display-4" />,
    name: 'Git'
  },
  {
    id: 13,
    skill: <FaGithubSquare className="display-4" />,
    name: 'GitHub'
  },
  {
    id: 14,
    skill: <FaBootstrap className="display-4" />,
    name: 'BootStrap'
  },
  {
    id: 15,
    skill: <SiMaterialui className="display-4" />,
    name: 'Material UI'
  }
]

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  'https://docs.google.com/document/d/12pXUXdQKJEUhM9IaRqwYd3AHH96cz4wrkG5tl168OZo/edit?usp=sharing'

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  'CU-L8R',
  'fortuna',
  'RPS-gurui',
  'Nostalgia_Game',
  'thriftR'
]

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: 'CU-L8R',
    image: CUL8R
  },
  {
    name: 'fortuna',
    image: fortuna
  },
  {
    name: 'RPS-gurui',
    image: RPS
  },
  {
    name: 'Nostalgia_Game',
    image: Nostalgia
  }
]

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = 'https://formspree.io/f/xvoyqgzo'
