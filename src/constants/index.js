import {
    backend,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mysql,
    docker,
    wallet,
    threejs,
    ai,
    react,
    python,
    gaussian,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
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
      title: "React Native Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: ai,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [

  ];
  
  const testimonials = [

  ];
  
  const projects = [
    {
      name: "Currency Wallet",
      description:
        "The application is a financial management tool that helps users track their expenses. It allows users to input and manage expenses, including details such as amount, description, currency, payment method, and category. Additionally, it provides real-time currency conversion using external exchange rate data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wallet,
      source_code_link: "https://github.com/luizArlochi/Wallet-Currency-Converter",
    },

    {
      name: "3D Gaussian Reconstruction",
      description:
        "Project under development to reconstruct, rasterize, smooth and visualize 3D objects from Gaussian point clouds. The project aims to improve visualization in a general context, from complex objects to terrain and buildings. It has fields of application in diverse areas, such as engineering, architecture, geography, among others.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "CudaToolkit",
          color: "green-text-gradient",
        },
        {
          name: "PyTorch",
          color: "red-text-gradient",
        },
        {
          name: "Conda-Forge",
          color: "orange-text-gradient",
        },
      ],
      image: gaussian,
      source_code_link: "https://github.com/luizArlochi/Wallet-Currency-Converter",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };