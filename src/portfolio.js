/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vinay Kumar",
  title: "Hi all, I'm Vinay",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VinayMandhaan",
  linkedin: "https://www.linkedin.com/in/vinay-kumar-a04192173",
  gmail: "workvinay507@gmail.com",
  gitlab: "https://gitlab.com/VinayMandhaan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "ios",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "woocomerce",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology",
      logo: require("./assets/images/szabist.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - August 2020",
      desc: "Final Year Project Based Upon Extractive Summarizer using Natural Language Processing Techniques",
      descBullets: ["Used Various NLP Techniques like TFIDF, LDA, POS Extracter, Title Importance and Sentence Importance.","Compared System Generated Summary with Human Generated Summary and Recieved More Than 90% Accuracy."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Systems Limited (Visionet)",
      companylogo: require("./assets/images/systemsLogo.png"),
      date: "June 2018 – Present",
      desc: "",
      descBullets: [
        "Front End development of E Commerce Applications on React.js using Microsoft 365 Dynamics Commerce SDK.",
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Concept Recall",
      companylogo: require("./assets/images/conceptLogo.png"),
      date: "May 2017 – May 2018",
      desc: "",
      descBullets: [
        "Live Video Streaming and Live Chat Developmentfor Web and Mobile Application using Mux and Sockets.",
        "Backend Developmentfor Web and Mobile Applications using Node.js, Express.js, Sockets.io and MongoDB",
        "Integrated PayPal Checkouts, Group Payments and Stripe Checkouts.",
        "Developed a Photo Competition App on React Native,the application had features like Stories, Picture View, Voting, Image Editing, Like, Views, Share etc. The authentication ofthis application was done using Firebase and the data was stored in Cloud Firestore.",
        "Developed an application which detects heart rate of a person using flash lightfrom the camera and suggest a mood. This application was developed on Flutter and had other features like Notifications, External Videos etc"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "DigitalPass (Access Group)",
      companylogo: require("./assets/images/digitalLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "",
      descBullets: [
        "Developed E-Commerce Web Application on React,js with PayPal Payment Gateway",
        "Fuel Application Development on React Native",
        "Backend Development on Node.js and Express"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Some Of My Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dobbies.png"),
      projectName: "Dobbies",
      projectDesc: "Dobbies is a largest garden e-commerce website, the front end of this web application is developed using Microsoft Dynamics 365 SDK for Ecommerce Development, th SDK uses React.js (Typescript) for the front end.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.dobbies.com/"
        },
        {
          name: "NDA Web App (Code can't be shared)",
          url: "https://www.dobbies.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sysposLogo.png"),
      projectName: "Syspos (Admin Panel)",
      projectDesc: "Syspos is a retail point of sale system covering all the fundamental processes involved in a retail business. The POS System was built on React.js. The backend was developed on Node.js and Socket.io for real time data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://syspos.ae/"
        },
        {
          name: "View Code",
          url: "https://github.com/VinayMandhaan/syspos-admin"
        }
      ]
    },
    {
      image: require("./assets/images/assemblie.png"),
      projectName: "Assemblie",
      projectDesc: "Assemblie is a live streaming web and mobile application having functionality similar to Twitch, The content creator can go live, chat with participants, create and sell subscriptions, view their transactions and much more. The web application was built on React.js,Node.js,Express.js,Socket.io and MongoDB, while the mobile was built on React Native",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://assemblie.herokuapp.com/"
        },
        {
          name: "View Code",
          url: "https://github.com/VinayMandhaan/assemblie-frontend"
        }
      ]
    },
    {
      image: require("./assets/images/tomwood.jpg"),
      projectName: "Tom Wood Mobile Application",
      projectDesc: "Tom Wood is a famous butcher shop in the UK. The application had the functionalities to view food, place orders apply gift vouchers, delivery discounts, credit functionality, and customer-specific marketing. React Native was used for the Mobile Application Development and Node.js, Express.js, MongoDB for the backend.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://m.apkpure.com/tom-wood-artisan-butcher/com.tomwood"
        },
        {
          name: "View Code",
          url: "#"
        }
      ]
    },
    // {
    //   image: require("./assets/images/tomwood.jpg"),
    //   projectName: "Tom Wood Web Application",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.tomwood.shop/"
    //     },
    //     {
    //       name: "View Code",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/wheelpotential.webp"),
      projectName: "Wheel Potential",
      projectDesc: "WheelPotential provides feedback and suggest some actions to users depending upon their mood which is detected by their heartbeat. The application is built on Flutter, the flutter camera detects the red area of a finger using the flash and calculates the Blood ratio which provides the BMP. The accuracy of the BMP is around 70%. The backend of this application was built on Node.js",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://play.google.com/store/apps/details?id=com.wheel.wheel&hl=en&gl=US"
        },
        {
          name: "View Code",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/goldenwin.png"),
      projectName: "Golden Win",
      projectDesc: "Photo Competition App on React Native,the application had features like Stories, Picture View, Voting, Image Editing, Like, Views, Share etc. The authentication ofthis application was done using Firebase and the data was stored in Cloud Firestore.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        },
        {
          name: "View Code",
          url: "https://github.com/VinayMandhaan/GoldenWin"
        }
      ]
    },
    {
      image: require("./assets/images/fitness.png"),
      projectName: "Fitness Mobile App",
      projectDesc: "The fitness application was built for a client, who had a 60 days workout plan and wanted to view the reports of each workout, such as the time taken for each workout, number of reps and sets performed etc. The app was built on React Native and the backend was developed on Node.js",
      footerLink: [
        {
          name: "Visit Application",
          url: "#"
        },
        {
          name: "View Code",
          url: "https://github.com/VinayMandhaan/FitnessApp-ReactNative"
        }
      ]
    },
    {
      image: require("./assets/images/barber.png"),
      projectName: "Find Your Barber",
      projectDesc: "This application was built for a client in UK. Users can book barber appointments, find nearest barber, select services, pay online and the barbers can view all the employees, timings, services and bookings. They can also add offers and advertisements. The app was built on React Native and the backend was developed on Node.js",
      footerLink: [
        {
          name: "Visit Application",
          url: "#"
        },
        {
          name: "View Code",
          url: "https://github.com/VinayMandhaan/Barber-App.git"
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
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
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
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
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
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "Skype: Vinay Mandhaan",
  email_address: "workvinay507@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
