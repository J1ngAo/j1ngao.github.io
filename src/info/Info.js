import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(64, 224, 208)", "rgb(255, 0, 128)"];
// export let colors = ["rgb(255, 0, 128)", "rgb(64, 224, 208)"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jingao",
    lastName: "Liu",
    initials: "JL", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🍵',
            text: 'fueled by tea'
        },
        {
            emoji: '🌎',
            text: 'based in the Dublin，Ireland'
        },
        {
            emoji: "💼",
            text: "looking for work opprtunity"
        },
        {
            emoji: "📧",
            text: "jingao.liu13@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/j1ngao/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/J1ngAo",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jingao-liu",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: " Hello! I am Jingao. I am a postgraduate Computer Science student at UCD with a unique blend of journalism and marketing experience. I'm a passionate learner, effective communicator, and collaborative team player. ",
    skills:
        {
            languages: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'C++', 'Ruby'],
            frameworks_and_tools: ['React.js', 'Django', 'Flask', 'Linux', 'Git', 'AWS', 'MySQL', 'Kanban']
        }
    ,
    hobbies: [
        {
            label: 'Cycling',
            emoji: ' 🚴🏻‍♀️'
        },
        {
            label: 'Hiking',
            emoji: '🧗🏻‍♀️'
        },
        {
            label: 'Knitting',
            emoji: '🧶'
        },
        {
            label: 'Enjoying nature',
            emoji: '🌳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "CityFrame",
            live: "https://cityfra.me/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/martinlaubscher/cityframe", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}