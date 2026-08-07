  import homeTL from "../images/imgTodoList/homeTL.png";
  import registerTL from "../images/imgTodoList/registerTL.png";
  import logInTL from "../images/imgTodoList/logInTL.png";
  import formTL from "../images/imgTodoList/formTL.png";
  import listTL from "../images/imgTodoList/listTL.png";
  import editListTL from "../images/imgTodoList/editListTL.png";
  import newStepTL from "../images/imgTodoList/newStepTL.png";
  import editStepTL from "../images/imgTodoList/editStepTL.png";


// Recipes ToDo List
const recipesToDoList = {

    thumbnail: homeTL,

    title: " Recipes To-Do List",

description:
    "Recipes To-Do List is a full-stack recipe management application developed with React and a simulated REST API powered by JSON Server. The platform enables users to create, organize, update, and manage cooking recipes through a complete CRUD system, providing an intuitive interface for recipe planning and step-by-step preparation.",

github:
    "https://github.com/JuanDiegoCC02/Todo-List-React.git",

technologies: {

    languages: [
        "HTML",
        "CSS3",
        "JavaScript"
    ],

    frontend: [
        "React",
        "React Router",
        "Native Fetch API"
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
        src: homeTL,
        alt: "Home",
        description:
            "Landing page introducing the application with informative cards explaining the platform's purpose and the workflow for managing cooking recipes."
    },

    {
        src: registerTL,
        alt: "Register",
        description:
            "User registration page connected to a JSON Server backend, allowing new users to create an account through a validated registration form."
    },

    {
        src: logInTL,
        alt: "Login",
        description:
            "Authentication page where registered users securely access the platform through a simulated backend using JSON Server."
    },

    {
        src: formTL,
        alt: "Recipe Form",
        description:
            "Recipe creation form allowing users to register new recipes by providing titles, descriptions, ingredients, and additional cooking information."
    },

    {
        src: listTL,
        alt: "Recipes List",
        description:
            "Recipe management interface displaying all registered recipes with completion indicators, search functionality, and organized recipe cards."
    },

    {
        src: editListTL,
        alt: "Recipe Management",
        description:
            "Editing interface where users can update recipe information or permanently remove recipes through complete CRUD operations."
    },

    {
        src: newStepTL,
        alt: "Recipe Steps",
        description:
            "Feature allowing users to create detailed preparation steps with descriptions and priority levels, improving recipe organization."
    },

    {
        src: editStepTL,
        alt: "Step Management",
        description:
            "Interface for editing or deleting individual recipe preparation steps, enabling flexible management of cooking instructions."
    }

]
};

export default recipesToDoList;