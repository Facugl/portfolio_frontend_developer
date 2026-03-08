import {
  react,
  chartjs,
  firebase,
  material,
  tailwind,
  java,
  springBoot,
  postgreSql,
  cryptoCurrencyImg,
  restaurantDeliveryImg,
  youtubeCloneImg,
  urlShortenerImg,
  hibernate,
  mySql,
  typescript,
  docker,
  bankingSystemImg,
} from "./LinksData";

const projectsData = [
    {
    id: 1,
    name: "Banking System",
    description:
      "Production-ready full-stack banking application designed to simulate real financial operations with secure authentication and database-driven role-based access control. The system supports account management, deposits, withdrawals, transfers, and transaction auditing through a REST API built with Spring Boot.",
    techStack: [
      {
        id: 2,
        name: "Spring Boot",
        url: springBoot,
      },
      {
        id: 4,
        name: "My-SQL",
        url: mySql,
      },
      {
        id: 5,
        name: "React",
        url: react,
      },
      {
        id: 7,
        name: "TypeScript",
        url: typescript,
      },
      {
        id: 8,
        name: "Docker",
        url: docker,
      },
    ],
    url: "http://3.140.240.155/",
    repository: "https://github.com/Facugl/banking_system",
    logoImgPath: bankingSystemImg,
    position: "left",
  },
  {
    id: 2,
    name: "URL Shortener",
    description:
      "I developed a modern full-stack application for URL shortening and real-time analytics visualization. The backend was built with Spring Boot, implementing secure authentication using JWT. On the frontend, I used React 19 and Material-UI to create an interactive and responsive interface that allows users to manage URLs and view analytics (clicks, dates) using dynamic visualizations with Chart.js.",
    techStack: [
      {
        id: 1,
        name: "React",
        url: react,
      },
      {
        id: 2,
        name: "Spring Boot",
        url: springBoot,
      },
      {
        id: 3,
        name: "PostgreSQL",
        url: postgreSql,
      },
      {
        id: 4,
        name: "Material-UI",
        url: material,
      },
      {
        id: 5,
        name: "Chart.JS",
        url: chartjs,
      },
      {
        id: 6,
        name: "Tailwind",
        url: tailwind,
      },
    ],
    url: "https://unrivaled-pithivier-d740dc.netlify.app/",
    repository: "https://github.com/Facugl/url-shortener",
    logoImgPath: urlShortenerImg,
    position: "right",
  },
  {
    id: 3,
    name: "CryptoCurrency Tracker",
    description:
      "I developed a web application for real-time cryptocurrency tracking and analysis. The backend uses Firebase for secure user authentication and real-time data storage with Firestore. On the frontend, I designed a responsive and interactive interface with React.js, enabling users to track cryptocurrencies and save their favorites.",
    techStack: [
      {
        id: 1,
        name: "React",
        url: react,
      },
      {
        id: 2,
        name: "Material-UI",
        url: material,
      },
      {
        id: 3,
        name: "Chart.JS",
        url: chartjs,
      },
      {
        id: 4,
        name: "Firebase",
        url: firebase,
      },
    ],
    url: "https://facugl.github.io/crypto-tracker/#/",
    repository: "https://github.com/Facugl/crypto-tracker",
    logoImgPath: cryptoCurrencyImg,
    position: "left",
  },
  {
    id: 4,
    name: "Restaurant Food Delivery App",
    description:
      "I developed a web application that allows users to register, browse products by category, and place orders. The interface was built with React, providing an interactive and responsive experience. I used Firebase for user authentication and real-time data storage. The application also features a shopping cart functionality for a complete shopping experience.",
    techStack: [
      {
        id: 1,
        name: "React",
        url: react,
      },
      {
        id: 2,
        name: "Tailwind",
        url: tailwind,
      },
      {
        id: 3,
        name: "Firebase",
        url: firebase,
      },
    ],
    url: "https://restaurant-delivery-app.onrender.com/",
    repository: "https://github.com/Facugl/restaurant-delivery-app",
    logoImgPath: restaurantDeliveryImg,
    position: "right",
  },
  // {
  //   id: 5,
  //   name: "YouTube clone",
  //   description:
  //     "I built a YouTube clone using React and Material-UI, leveraging a custom API layer for fetching data. This API integration utilizes Axios to interact with the YouTube V3 API via RapidAPI, incorporating authentication through headers and dynamic request parameters to efficiently retrieve video data and channel information.",
  //   techStack: [
  //     {
  //       id: 1,
  //       name: "React",
  //       url: react,
  //     },
  //     {
  //       id: 2,
  //       name: "MaterialUI",
  //       url: material,
  //     },
  //   ],
  //   url: "https://youtubeclone-j2zp.onrender.com/",
  //   repository: "https://github.com/Facugl/youtube_clone",
  //   logoImgPath: youtubeCloneImg,
  //   position: "left",
  // },
];

export default projectsData;
