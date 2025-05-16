import {
  react,
  chartjs,
  firebase,
  material,
  tailwind,
  springBoot,
  postgreSql,
  cryptoCurrencyImg,
  restaurantDeliveryImg,
  youtubeCloneImg,
  urlShortenerImg,
} from "./LinksData";

const projectsData = [
  {
    id: 1,
    name: "URL Shortener",
    description:
      "A full-stack app to shorten URLs, track clicks, and manage links with a user-friendly dashboard.",
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
    id: 2,
    name: "Crypto Currency App",
    description:
      "Search your favorite cryptocurrencies, add and remove them from your favorites list.",
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
    id: 3,
    name: "Restaurant Food Delivery App",
    description: "Authenticate with your email and make multiple orders.",
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
  {
    id: 4,
    name: "YouTube clone",
    description: "Simple YouTube clone, fully responsive.",
    techStack: [
      {
        id: 1,
        name: "React",
        url: react,
      },
      {
        id: 2,
        name: "MaterialUI",
        url: material,
      },
    ],
    url: "https://youtubeclone-j2zp.onrender.com/",
    repository: "https://github.com/Facugl/youtube_clone",
    logoImgPath: youtubeCloneImg,
    position: "left",
  },
];

export default projectsData;
