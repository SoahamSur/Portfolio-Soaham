import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // carrent,
    studdybuddy,
    shopEZ,
    jobit,
    tripguide,
    threejs,
    python
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AIML",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "figma",
      icon: figma,
    }
  //   {
  //   name:"HTML",
  //   icon:html,
  //  },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Intermediate",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Dec 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Mastered the principles of building reusable and modular components, enhancing maintainability and scalability of applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learning and using React Js libraries.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Beginner",
      icon: mongodb,
      iconBg: "#E6DEDD",
      date: "Apr 2024 - Present",
      points: [
        "Proficient in server-side languages such as Node.js,Express Js.",
        "Database Management using MongoDB.",
        "Utilized middleware for handling tasks such as logging, authentication, and data validation, enhancing application modularity and maintainability.",
      ],
    },
    {
      title: "AI/ML",
      company_name: "Beginner",
      icon: python,
      iconBg: "#383E56",
      date: "Jun 2024 - Present",
      points: [
        "Learning & getting familiarised with Python",
        "Learning & implementing various machine learning algorithms",
        "Using Python libraries in scalable projects for deep understanding of workflow",
      ],
    },
    {
      title: "UI/UX",
      company_name: "Amateur",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Understanding UX principles through designs and referrences.",
        "Getting my creative side on in designing projects.",
        "Learning 3D Design Libraries for modern design experience.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Study Buddy",
      description:
        "Web-based platform that allows users to make the most out of their study time. It's comprehensive platform designed to revolutionize the way students approach their learning journey.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
      ],
      image: studdybuddy,
      source_code_link: "https://github.com/SoahamSur/Study-Buddy/",
    },
    {
      name: "ShopEZ",
      description:
        "Web-based platform that allows users to make the most out of their study time. It's comprehensive platform designed to revolutionize the way students approach their learning journey.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: shopEZ,
      source_code_link: "https://github.com/SoahamSur/ShopEZ",
    },
    {
      name: "Portfolio",
      description:
        "My Portfolio website,you're probably looking at right now.This project helped me to understand 3D designing in a better way.I learnt to use three js while building my portfolio.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Echo",
    //   description:
    //     "Say hello to a smarter, more efficient way to manage your tasks with Echo by your side! Whether you need to open applications, play your favorite music, or find the latest weather updates, Echo has got you covered. ",
    //   tags: [
    //     {
    //       name: "python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "speechrecognition",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "numpy",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, projects };