import {
  react,
  chartjs,
  firebase,
  material,
  styledComponents,
  tailwind,
  typescript,
  countriesWebsite,
  cryptoCurrencyImg,
  fitnessExercises,
  restaurantDelivery,
  youtubeClone,
} from "./LinksData";

const projectsData = [
  {
    id: 1,
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
    id: 2,
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
    logoImgPath: restaurantDelivery,
    position: "right",
  },
  {
    id: 3,
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
    logoImgPath: youtubeClone,
    position: "left",
  },
  {
    id: 4,
    name: "Finder Countries",
    description:
      "Frontend Mentor Challenge to search for country information, fully responsive and dark mode.",
    techStack: [
      {
        id: 1,
        name: "React",
        url: react,
      },
      {
        id: 2,
        name: "Styled-Components",
        url: styledComponents,
      },
      {
        id: 3,
        name: "TypeScript",
        url: typescript,
      },
    ],
    url: "https://countries-y5uj.onrender.com/",
    repository: "https://github.com/Facugl/react_countries",
    logoImgPath: countriesWebsite,
    position: "right",
  },
  {
    id: 5,
    name: "Fitness Exercises App",
    description:
      "Encuentra tus ejercicios favoritos y arma tu rutina. Gracias a la información de esta app podrás realizarlos con éxito.",
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
    url: "https://fitness-exercises.onrender.com/",
    repository: "https://github.com/Facugl/fitness_exercises_app",
    logoImgPath: fitnessExercises,
    position: "left",
  },
];

export default projectsData;
