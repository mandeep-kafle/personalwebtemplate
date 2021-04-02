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
    "I've curiosity towards analyses and problem solving, currently I am soaking up as much knowledge and practice to enhance my skills. I am interested in programming and software development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZGsDX7QqGeglwf_vaPXqMyzNkaiW_mnC/view?ths=true",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mandeep-kafle",
  linkedin: "https://www.linkedin.com/in/mandeep-kafle-956745193/",
  // gmail: "mandeepkafle.9@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/mandeep.kafle",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What, I do",
  subTitle: "⚫ I have experience in building and deploying projects using C++, Python, numpy, pandas, Javascript (ES-6), SQL, MVC , Nodejs, Reactjs, Material-ui, Bootstrap, MongoDB, ExpressJs, Firebase. I'm also enthusiatically looking for other frameworks or development principles that can be kept in my arsenal.",
  skills: [
    emoji("⚫ Problem Solving,Datastructures and algorithms, DBMS, Analyses"),

    emoji(
      "⚫ Other than Software development, I have broad intersets including Horseriding, Swimming, Cricket, Football, Esports , reading, storytelling, human-behaviour."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
   
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
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
      duration: "August 2016 - August 2020",
      desc: "Learnt Datastructures and Algorithms , Operating Systems, Machine Learning, worked on Projects, Got accepted one research paper for publishing. Won Esports competitions",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Army Public School Sukna",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Education",
      duration: "September 2014 - April 2016",
      desc:
        "Ranked top 10% in the School (Board Exams). Participated in district level Cricket tournament, learnt Horseriding, swimming.",
      descBullets: []
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
  display: false, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/firegram.png"),
      projectName: "Firegram",
      projectDesc: "Firegram clone of social media app Instagram where user can read feed and post images.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://instagramclone-d25cc.web.app/"
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
    {
      image: require("./assets/images/apod.png"),
      projectName: "",
      projectDesc: "View Astronomy Image of the day by NASA and previous images with an immersive UIs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spacify-9e85f.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pms.png"),
      projectName: "Project Tracker",
      projectDesc: "Project management system(website) user can keep track of all projects and their state,issues, with update and delete feature.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/mandeep-kafle/Project-tracker"
        }
        //  you can add extra buttons here.
      ]
    }
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
    "Discuss an oppurtunity, project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 9877946059",
  email_address: "mandeepkafle.9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: ".._", //Replace "twitter" with your twitter username without @
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
