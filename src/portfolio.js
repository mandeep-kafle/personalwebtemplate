/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

//Each section has a bool value display.. change it to hide or show in yor web

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mandeep Kafle",
  title: "Hello from server side, Hi, I'm Mandeep Kafle",
  subTitle: emoji(
    "I've curiosity towards analyses and problem solving, I work as a Software Developer at Borderfree.io. I love to spend my time coding complex problems which require good brain storming."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MFTVElZSuXfCoKhq9r26ScwwssgcSCup/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mandeep-kafle",
  linkedin: "https://www.linkedin.com/in/mandeep-kafle-956745193/",
  facebook: "https://www.facebook.com/mandeep.kafle",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What, I do",
  subTitle: "⚫ I have experience in building and deploying Software projects at large scale using Golang, AWS, Nodejs, Reactjs,C++.",
  skills: [
    emoji("⚫ Problem Solving,Datastructures and algorithms, Concurrency, Analyses"),
    emoji(
      "⚫  I love to spend my time coding complex problems which require good brain storming."
    ),
    emoji(
      "⚫ Other than Software development, I have broad intersets including Horseriding, Swimming, Cricket, Football, Esports , reading, storytelling, human-behaviour."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      fontAwesomeClassname: ""
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
 
    {
      skillName: "DynamoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
  
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional Univerity",
      logo: require("./assets/images/lpuLogo.png"),
      subHeader: "Bachelors in Computer Science and Engineering",
      duration: "2021",
      // desc: "Learn't Datastructures and Algorithms , Operating Systems, Machine Learning, worked on Projects, Got research paper accepted for publishing. Won Esports competitions",
      // descBullets: [
        
      // ]
    },
    {
      schoolName: "Army Public School Sukna",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Education",
      duration: " April 2016",
      // desc:
      //   "Ranked top 10% in the School (Board Exams). Participated in district level Cricket tournament, learnt Horseriding, swimming.",
      // descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Software Developer",
      company: "Borderfree",
      companylogo: require("./assets/images/Borderfree.jfif"),
      date: "October 2021 – Currently Working Here",
      desc:
        "Working on Borderfree's Payments Gateway Building and simplfying payments infrastructure.   Technologies: Golang, AWS, DynamoDB",
  
    },
    {
      role: "Software Engineer",
      company: "TalentXO",
      companylogo: require("./assets/images/TalentXO.jfif"),
      date: "August 2021 – October 2021",
      desc:
        "Build UI and UX of TalentXO's HR dashboard for enable user to view and update job and candidate details. Technologies: Reactjs, HTML, CSS.",
      
    },
    {
      role: "FullStack Development Intern",
      company: "Programming Pathshala",
      companylogo: require("./assets/images/PP.jfif"),
      date:  "May 2021 – August 2021",
      desc:
        "Designed and Development Coupon Code Management System, Successfully Integrated it with Programming Pathshala Website Technologies: Nodejs, PostgresSQL, Reactjs",
      
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  
  title: "Individual Projects",
  subtitle: "",
  projects: [
    {
      // image: require("./assets/images/trello.png"),
      projectName: "Dataware Housing Infrastructure",
      projectDesc: "Dataware Housing Infrastucture using AWS (ApiGateway, DynamoDB & DBStream, S3, Redshift Spectrum)",
      footerLink: [
        {
          name: "View Code And Description",
          url: "https://github.com/mandeep-kafle/BorderFreeAssignment"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/trello.png"),
      projectName: "TaskManager",
      projectDesc: "TaskManagement app, User can keep track of his/her tasks easy to use by drag and drop, powered by GraphQL",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://task-manager-49702.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pms.png"),
      projectName: "Project Tracker",
      projectDesc: "Project management system(website) user can keep track of all projects and their state,issues,bugs.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/mandeep-kafle/Project-tracker"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/moviereviews.png"),
      projectName: "Movie Review Website",
      projectDesc: "Movie review website where user can view reviews of latest movies",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://movies-web-44b07.web.app/",
          
        }
      ]
    },
   

  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        ".",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Wanna discuss about Technology, Project, Oppurtunity or just want to say hi? My Inbox is open for all.",
  email_address: "mandeepkfle@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: ".._", //Replace "twitter" with your twitter username without @ sdfsdfsfs
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
