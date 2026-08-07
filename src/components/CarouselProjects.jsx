import homeNA from "../images/imgNumbAstro/homeNA.png";
import registerNA from "../images/imgNumbAstro/registerNA.png";
import logInNA from "../images/imgNumbAstro/logInNA.png";
import contactUsNA from "../images/imgNumbAstro/contactUsNA.png";
import taskFormNA from "../images/imgNumbAstro/taskFormNA.png";
import taskAgendaNA from "../images/imgNumbAstro/taskAgendaNA.png";
import starMapNA from "../images/imgNumbAstro/starMapNA.png";
import starLootNA from "../images/imgNumbAstro/starLootNA.png";
import profileNA from "../images/imgNumbAstro/profileNA.png";
import AdminUsersGet from "../images/imgNumbAstro/AdminUsersGet.png";
import UsersChart from "../images/imgNumbAstro/UsersChart.png";
import AdminTasks from "../images/imgNumbAstro/AdminTasks.png";


// Numb Astro 
const numbAstro = {

    thumbnail: homeNA,

    title: "Numb Astro",

    description:
        "Numb Astro is a habit-tracking and personal development platform inspired by space exploration. Users complete daily tasks to unlock stars, achievements, and titles while monitoring their progress through interactive dashboards. The application was developed with React and uses a JSON Server backend to simulate a complete CRUD environment.",

    github:
        "https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",

    technologies: {

        languages: [
            "HTML",
            "CSS3",
            "JavaScript"
        ],

        frontend: [
            "React",
            "React Router",
            "ApexCharts"
        ],

        backend: [
            "JSON Server",
            "Node.js",
            "Local Storage",
            "Cookies"
        ],

        tools: [
            "VS Code",
            "GitHub",
            "Trello",
            "Slack",
            "Canva"
        ]

    },

    gallery: [

        {
            src: homeNA,
            alt: "Home",
            description:
                "Landing page introducing Numb Astro and explaining the application's main features through an interactive carousel."
        },

        {
            src: registerNA,
            alt: "Register",
            description:
                "Registration page where users create an account after completing a validated form."
        },

        {
            src: logInNA,
            alt: "Login",
            description:
                "Authentication page that validates user credentials and stores the session using Local Storage and Cookies."
        },

        {
            src: contactUsNA,
            alt: "Contact",
            description:
                "Contact section presenting the project's mission, appreciation message, and contact information."
        },

        {
            src: taskFormNA,
            alt: "Task Form",
            description:
                "Form used to register new habits and tasks with validation before saving the information."
        },

        {
            src: taskAgendaNA,
            alt: "Task Agenda",
            description:
                "Task management interface where users can filter, edit, complete, and organize their habits."
        },

        {
            src: starMapNA,
            alt: "Star Map",
            description:
                "Interactive galaxy where every completed task generates a new randomly positioned star, encouraging long-term consistency."
        },

        {
            src: starLootNA,
            alt: "Star Memories",
            description:
                "Reward system that unlocks inspirational quotes and achievements as users complete more habits."
        },

        {
            src: profileNA,
            alt: "Profile",
            description:
                "Personal profile displaying account information, earned stars, achievement titles, and profile editing features."
        },

        {
            src: AdminUsersGet,
            alt: "Users Administration",
            description:
                "Administration panel for managing registered users through a structured data table."
        },

        {
            src: UsersChart,
            alt: "Users Analytics",
            description:
                "Interactive chart displaying user registration statistics and platform growth."
        },

        {
            src: AdminTasks,
            alt: "Tasks Administration",
            description:
                "Administrative dashboard with analytics showing created tasks and completion statistics."
        }

    ]

};

export default numbAstro;