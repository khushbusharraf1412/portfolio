const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const portfolioData = {
    name: 'Khushbu Sharrof',
    bio: 'I’m a passionate full-stack developer currently pursuing my BCA degree. I enjoy building dynamic and responsive web applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB'],
    projects: [
        {
            name: "Spotify Clone",
            tech: ["HTML", "CSS", "JS"],
            link: "https://github.com/Khushbusharraf1412/spotify-clone"
        },
        {
            name: "Todo App",
            tech: ["Node.js", "EJS", "MongoDB"],
            link: "https://github.com/Khushbusharraf1412/todo-app"
        },
        {
            name: "Simon Game",
            tech: ["JavaScript"],
            link: "https://khushbusharraf1412.github.io/simon-game/"
        },
        {
            name: "Wanderlust Clone",
            tech: ["Node.js", "Express", "MongoDB"],
            link: "https://github.com/Khushbusharraf1412/wanderlust-clone"
        }
    ],
    github: 'https://github.com/Khushbusharraf1412',
    linkedin: 'https://www.linkedin.com/in/khushbu-sharraf-638792335',
    email: 'dancer.khushbu14@gmail.com'
};

app.get('/', (req, res) => {
    res.render('index', { portfolioData });
});

const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});