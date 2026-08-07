  import winGame from "../images/imgTicTacToeGAME/winGame.png";
  import playGame from "../images/imgTicTacToeGAME/playGame.png";
  import resetGame from "../images/imgTicTacToeGAME/resetGame.png";


// tic tac toe vs computer
const tictactoe = {

    thumbnail: playGame,

    title: " Tic Tac Toe vs Computer",

description:
    "Tic Tac Toe Game is an interactive browser-based game developed with HTML, CSS3, and JavaScript. The application allows users to play against the computer using a classic 3×3 board while implementing game state management, victory detection, score tracking, and persistent statistics through Local Storage.",

github:
    "https://github.com/JuanDiegoCC02/Todo-List-React.git",

technologies: {

    languages: [
        "HTML",
        "CSS3",
        "JavaScript"
    ],

    frontend: [
        "JavaScript",
        "CSS Grid",
        "DOM Manipulation"
    ],

    backend: [
        "Local Storage"
    ],

    tools: [
        "VS Code",
        "GitHub",
        "Canva"
    ]

},

gallery: [

    {
        src: resetGame,
        alt: "Game Interface",
        description:
            "Main game interface where players can immediately start a new match using a responsive 3×3 Tic Tac Toe board."
    },

    {
        src: playGame,
        alt: "Gameplay",
        description:
            "Interactive gameplay demonstrating turn-based logic, hover effects, responsive board design, and dynamic move rendering using JavaScript."
    },

    {
        src: winGame,
        alt: "Victory System",
        description:
            "Victory detection system that evaluates winning combinations, updates the score counter, and provides New Game and Reset controls while preserving statistics with Local Storage."
    }

]
};

export default tictactoe;