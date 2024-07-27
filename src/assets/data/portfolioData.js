import portfolioImg01 from '../images/portfolio-01.png'
import portfolioImg02 from '../images/portfolio-02.png'
import portfolioImg03 from '../images/portfolio-03.png'
import portfolioImg04 from '../images/portfolio-04.png'
import portfolioImg05 from '../images/portfolio-05.png'

const portfolios = [
  {
    id: '01',
    imgUrl: portfolioImg01,
    category: 'Fullstack',
    title: 'Student Accomodation Website',
    description:
      'A web app designed to streamline the process of finding and managing student accomodation. The application includes features such as accomodation search, detailed listings, and profile management, making it a complete solution for students seeking accommodation. Landloards can create, post, update and delete accomodation. Students can contact the landloards',
    technologies: [
      'Javascript',
      'React',
      'Redux',
      'Tailwind css',
      'Node.js',
      'MongoDB',
    ],
    siteUrl: 'https://student-accomodation.onrender.com',
    sourceCode: 'https://github.com/TudowTwelvvy/student-accomodation',
  },
  {
    id: '02',
    imgUrl: portfolioImg02,
    category: 'Frontend',
    title: 'TudowEshop website',
    description:
      'An E-commerce web application built with React.js, Redux, Tailwind CSS, and Firebase Authentication. The application allows users to browse products, add items to a cart, and delete items from the cart, all while managing user authentication securely.',
    technologies: ['Javascript', 'React', 'Tailwind css', 'Firebase', 'Redux'],
    siteUrl: 'https://twelvvyeshop.netlify.app',
    sourceCode: 'https://github.com/TudowTwelvvy/TwelvvyEshop-',
  },
  {
    id: '03',
    imgUrl: portfolioImg03,
    category: 'Frontend',
    title: 'Tudow-Properties',
    description:
      'A modern estate landing page website built using React.js and Tailwind CSS. It features dark mode and light mode, as well as animations to enhance the user experience.',
    technologies: ['Javascript', 'React', 'Tailwind css'],
    siteUrl: 'https://tudow-properties.netlify.app',
    sourceCode: 'https://github.com/TudowTwelvvy/real-estate-landingPage',
  },
  {
    id: '04',
    imgUrl: portfolioImg04,
    category: 'Fullstack',
    title: 'TudowShop',
    description:
      'A robust e-commerce platform built using a modern tech stack to provide a seamless shopping experience. The frontend is developed with Next.js and TypeScript, ensuring a highly performant and type-safe codebase. Zustand is utilized for state management, allowing efficient and scalable handling of the application state. Tailwind CSS is employed to craft a responsive and visually appealing user interface with utility-first styling. The integration with Wix is used to leverage additional e-commerce functionalities, such  inventory management, and customer service tools.',
    technologies: ['TypeScript', 'Nextjs', 'Tailwind css', 'Zustand', 'Wix'],
    siteUrl: 'https://tudowshop.netlify.app',
    sourceCode: 'https://github.com/TudowTwelvvy/TudowEcommerce',
  },
  {
    id: '05',
    imgUrl: portfolioImg05,
    category: 'Frontend',
    title: 'Nike Landing Page',
    description:
      'The Nike website landing page is a visually striking and interactive web application built with React and styled using Tailwind CSS. This landing page captures the essence of Nikes brand by showcasing their latest products, promotions, and iconic designs in a modern and responsive layout.',
    technologies: ['React', 'Tailwind css'],
    siteUrl: 'https://nike-landingpage2.netlify.app/',
    sourceCode: 'https://github.com/TudowTwelvvy/NikeLadingPage',
  },
]

export default portfolios
