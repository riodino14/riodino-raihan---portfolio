

import { ProfileData, EducationItem, WorkExperienceItem, OrganizationItem, AchievementItem, ProjectItem, SkillCategory } from './types.ts';

export const profileData: ProfileData = {
  name: "RIODINO RAIHAN",
  title: "Informatics Undergraduate Student",
  phone: "+62 812 1097 8384",
  email: "riodinoraihan@gmail.com",
  linkedin: "riodinoraihan", // Placeholder, actual URL might be linkedin.com/in/riodinoraihan
  personalStatement: "Undergraduate student in Informatics from Telkom University who has experience in leadership, organization, and has a great interest in the world of programming and aspires to become a technopreneur.",
  profileImageUrl: "assets/Profile-Riodino-Raihan.jpeg"
};

export const educationData: EducationItem[] = [
  {
    institution: "Telkom University",
    location: "Bandung, ID",
    degree: "Bachelor of Computer Science (Informatics)",
    duration: "Sep 2022 - Present",
    gpa: "3.96/4.00",
    notes: ["An Awardee of the Jabar Future Leader Scholarship 2023 (1 year)."],
    imageUrl: "assets/telkom-university-logo.png", 
    proofs: [
      {
        label: "View KHS",
        url: "https://drive.google.com/file/d/1Gioes7p5yURHUhG_XIOVgvxXSWCHsDgp/view?usp=sharing"
      }
    ],
  }
];

export const workExperienceData: WorkExperienceItem[] = [
  {
    id: "algo-assistant",
    company: "Informatics Laboratory, Telkom University",
    location: "Bandung, ID",
    role: "Programming Algorithm 2 Practicum Assistant",
    duration: "Feb–Jun 2024 & Feb–Jun 2025 ",
    responsibilities: [
      "Helped and supervised 6 practicum classes across two semesters, grading a total of 44 students successfully. ",
      "Assisted 12 final project groups consisting of 24 students using Go language with on time completion."
    ],
    imageUrl: "work-experience/algoritma-pemrograman/Riodino Raihan_alpro2_2425.jpg",
    proofs: [{ label: "Certificate of 24/25", url: "https://drive.google.com/file/d/16YZ0WtpH0Sdk6lYghTWjGnJB-2kklP-Z/view?usp=sharing" }, { label: "Certificate of 23/24", url: "https://drive.google.com/file/d/1RpNVzd6aG6WCvRrP-CNF1DuUkTYhO6Ll/view?usp=sharing" }],
    detailedInfo: {
      description: "In this role, I assisted students in understanding fundamental programming algorithms using the Go language. My responsibilities included guiding students through lab exercises, providing one-on-one support, grading assignments, and facilitating the successful completion of their final projects.",
      keyAchievements: [
        "Mentored 44 students, leading to improved understanding of core algorithm concepts and higher average grades.",
        "Guided 12 final project groups consisting of 24 students in their final projects, resulting in all projects being completed on time and meeting requirements.",
        "Received positive feedback from students for clear explanations and patient guidance during lab sessions."
      ],
      skillsDeveloped: [ "Mentorship & Tutoring", "Go (Programming Language)", "Code Review", "Technical Instruction", "Project Management" ],
      galleryImages: ["work-experience/algoritma-pemrograman/sit4.jpeg", "work-experience/algoritma-pemrograman/sit00.jpg", "work-experience/algoritma-pemrograman/sit2.jpg"]
    }
  },
  {
    id: "ds-coordinator",
    company: "Informatics Laboratory, Telkom University",
    location: "Bandung, ID",
    role: "Data Structure Practicum Assistant Coordinator",
    duration: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Led 62 practicum assistants; helped and supervised laboratory sessions covering 3 classes and gave grades to 18 students.",
      "Coordinating practicum modules to ensure alignment with the standards; overseeing the performance of practicum assistants in conducting assessments."
    ],
    imageUrl: "work-experience/struktur-data/RIODINO RAIHAN_Koordinator Struktur Data_page-0001.jpg",
    proofs: [{ label: "Certificate", url: "https://drive.google.com/file/d/1v223k-u_YlL2VLCqeVf4Hu85Tn1YJ7IQ/view?usp=sharing" }],
    detailedInfo: {
      description: "As the Coordinator for the Data Structure Practicum, I was responsible for leading a large team of practicum assistants and ensuring the smooth execution of laboratory sessions for over 18 students across multiple classes. This role required strong leadership, organizational skills, and a deep understanding of data structures concepts.",
      keyAchievements: [
        "Successfully managed a team of 62 practicum assistants, fostering a collaborative and effective teaching environment.",
        "Standardized practicum modules and grading rubrics, leading to more consistent and fair assessments for all students.",
        "Resolved scheduling conflicts and student issues promptly, maintaining a high level of satisfaction among students and staff."
      ],
      skillsDeveloped: [ "Team Leadership & Management", "Curriculum Development", "Public Speaking", "Problem-Solving", "Coordination & Logistics" ],
      galleryImages: ["work-experience/struktur-data/sit1.jpg", "work-experience/struktur-data/sit2.jpg", "work-experience/struktur-data/sit3.jpg"]
    }
  },

  {
    id: "calculus-assistant",
    company: "Telkom University",
    location: "Bandung, ID",
    role: "Calculus Lecturer Assistant",
    duration: "Sept 2023 – Jan 2024",
    responsibilities: [
      "Assessed assignments for a class of 40 and provided feedback to improve student’s understanding.",
      "Supervised the final exam and ensured academic integrity in a conducive environment; achieved timely and orderly exam administration."
    ],
    imageUrl: "work-experience/asisten-kalkulus/Manage Courses_Kalkulus.png",
    proofs: [{ label: "Letter of assignment", url: "https://drive.google.com/file/d/1i1OBVdBDKzL42oB_myYkkQ8VhY93UtV4/view?usp=sharing" }, 
      { label: "Grading and Feedback on Assignments", url: "https://drive.google.com/file/d/1VMGmcDPVW4S86lobMkoWmmLh4hQPjUoN/view?usp=sharing" }],
    detailedInfo: {
        description: "Supporting a Calculus lecturer, I was tasked with reinforcing students' understanding of complex mathematical concepts. My duties included grading assignments with constructive feedback and ensuring a secure and orderly environment during final examinations for a large class.",
        keyAchievements: [
            "Provided detailed, constructive feedback on assignments for a class of 40 students, contributing to their academic growth.",
            "Proctored the final exam effectively, upholding academic integrity and ensuring a smooth process for all participants.",
            "Developed a reputation for being a reliable and helpful resource for students seeking clarification on calculus problems."
        ],
        skillsDeveloped: [ "Academic Assessment", "Attention to Detail", "Academic Integrity Proctoring", "Communication", "Mathematics (Calculus)" ],
        galleryImages: ["work-experience/asisten-kalkulus/Mengawasi Ujian CLO.jpg"]
        
    }
  }
];

export const organizationsData: OrganizationItem[] = [
  {
    // link sertif staff ahli, instagram
    // Link to the decree of the head of the organization: https://www.instagram.com/p/DKUHQ0-zvOo/?img_index=4 
    id: "hima-if",
    name: "HIMA IF, Telkom University",
    location: "Bandung, ID",
    role: "Head of Research and Professionalism Department",
    duration: "Apr 2025 – Present",
    summaryPoints: [
      "Lead and manage 3 divisions: DSIS, SEAL, and CITI, comprising a total of 25 active members.",
      "Oversee and execute 9 key programs, including workshops, seminars, community for Informatics Lab, and company visits.",
      "Previously, contributed as an expert and intern staff by organizing workshops, managing the website, writing 7 blog articles, designing registration forms and calendar, and supervising the website layout."
    ],
    imageUrl: "organizations/himaifrdk/fullrdk.JPG",
    proofs: [{ label: "Instagram", url: "https://www.instagram.com/p/DKUHQ0-zvOo/?img_index=1" }, { label: "Expert Staff Certificate", url: "https://drive.google.com/file/d/1pjrbC08MZEKqojTsSCgjfYV8SX6OYP0z/view?usp=sharing" }],
    detailedInfo: {
        description: "HIMA IF is the official student association for Informatics students at Telkom University, focusing on academic, professional, and personal development.",
        mission: "To empower Informatics students with knowledge, skills, and networks for future success.",
        vision: "To be a leading student organization that fosters innovation and excellence in the field of Informatics.",
        keyPrograms: ["Workshops on emerging technologies", "Seminars with industry experts", "Company visits", "Informatics Lab Community development", "Coding competitions"],
        achievements: ["Successfully organized numerous events", "Increased student engagement in departmental activities"],
        galleryImages: [ "organizations/himaifrdk/rapathima.jpg", "organizations/himaifrdk/kadepcrop.JPG"]
    }
  },
  {
    id: "computing-lab",
    name: "Computing Lab, Telkom University",
    location: "Bandung, ID",
    role: "Vice Head of Lab Assistant",
    duration: "Mar 2025 – Present",
    summaryPoints: [
      "Lead and coordinate 4 divisions within the lab assistant team.",
      "Developed and implemented the activity agenda and schedule for an entire operational period, improving lab workflow and task clarity.",
      "Participated in an advanced study group; focused on mastering data cleaning, scaling, encoding, and various machine learning techniques through practical training sessions.",
      "Built “BaskaraBot”, an AI chatbot in the lab’s advanced study group using VertexAI and Streamlit, applying Python and ML techniques to address real organizational needs."
    ],
    imageUrl: "organizations/computing-lab/allgaya.jpg",
    proofs: [{ label: "Study Group Advance Certificate", url: "https://drive.google.com/file/d/1ZCSItal6xuKTlwPu9DWY01hpTTxCX4vO/view?usp=sharing" }, 
            { label: "Baskara Bot Github", url: "https://github.com/riodino14/Final-Project---Computing-Laboratory-Telkom-University" }
    ],
    detailedInfo: {
        description: "The Computing Lab provides resources and support for students' practical learning in various computing disciplines.",
        keyPrograms: ["Advanced study groups on ML", "Lab assistant training programs", "Maintenance of lab infrastructure"],
        galleryImages: [ "organizations/computing-lab/disc1.jpg", "organizations/computing-lab/disc2withme.jpg", 
          "organizations/computing-lab/allformal.jpg", 
          "organizations/computing-lab/RIODINO RAIHAN - MLDS.png", 
        ]
    }
  },
  {
    id: "interfest-2024",
    name: "Interfest 2024, Telkom University",
    location: "Bandung, ID",
    role: "Workshop Coordinator/Leader",
    duration: "Jul 2024 – Dec 2024",
    summaryPoints: [
      "Led a team of 15 members across 3 divisions to organize a 2-day online workshop titled 'Frontend Fundamental: Code Your Way to the Top', with 278 registrants (54.7% external).",
      "Collaborated with 15 media partners and achieved satisfaction ratings of 4.5 (Day 1) and 4.2 (Day 2)."
    ],
    imageUrl: "organizations/interfest-workshop/all.png",
    proofs: [{ label: "Active Certificate", url: "https://drive.google.com/file/d/17F_jl5jJ_p7-YDT2i-jlPCXJONNzEq7m/view?usp=sharing" } ,
      { label: "Final Workshop Report", url: "https://drive.google.com/file/d/1dKGTUr1Ori9b4IvccfH28FAMdSCLFN82/view?usp=sharing" }],
    detailedInfo: {
        description: "Interfest is an annual event at Telkom University featuring various technology-related activities, including workshops and seminars.",
        achievements: ["Successfully hosted 'Frontend Fundamental' workshop with high participation and satisfaction.", "Secured 15 media partnerships."],
        galleryImages: ["organizations/interfest-workshop/mc and me.png", "organizations/interfest-workshop/quiz.png", 
                        "organizations/interfest-workshop/day2sertif.png", "organizations/interfest-workshop/day1sertif.png", 
                        "organizations/interfest-workshop/working.png", 
                        "organizations/interfest-workshop/allpanit.png"
                      ]
    }
  },
  {
    id: "msr-telkom",
    name: "Microsoft Students Representatives, Telkom University",
    location: "Bandung, ID",
    role: "Participant & Coordinator/leader of Webinar",
    duration: "Nov 2023 – Dec 2023",
    summaryPoints: [
      "Studied data visualization and exploration with Excel and Power BI; completed 100% of project tasks successfully.",
      "Led a 5 division teams (32 members) to organize an online webinar 'Expedition: Exploring the Benefits of Microsoft Licensing for Telkom University Students'; achieved 198 participants and 'The Most Lead' award."
    ],
    imageUrl: "organizations/microsoft-representative/all.jpg",
    proofs: [
        { label: "Certificate", url: "https://drive.google.com/file/d/1zymKCrTu4scHA7iklQ0htOhyZV8Jqgz3/view?usp=sharing" },
        { label: "Offboarding Microsoft Representative", url: "https://365.telkomuniversity.ac.id/offboarding-microsoft-representative/" }, 
        { label: "Final Report Evidence of Activities", url: "https://drive.google.com/file/d/1VrOFL_c7xbhTsb64CXgXG6TMR-n4XvJK/view?usp=sharing" }
        
    ],
    detailedInfo: {
        description: "The Microsoft Student Representatives program at Telkom University aims to promote Microsoft technologies and foster a community of student tech enthusiasts.",
        keyPrograms: ["Webinars on Microsoft tools", "Training sessions on Excel and Power BI"],
        achievements: ["'The Most Lead' award for webinar organization.", "High participant engagement in events."],
        galleryImages: ["organizations/microsoft-representative/themostlead.png",   
                        "organizations/microsoft-representative/Sertifikat Microsoft Student Representatives_Riodino Raihan_page-0001.jpg"]
    }
  },
  {
    id: "cci-telkom",
    name: "Central Computer Improvement, Telkom University",
    location: "Bandung, ID",
    role: "Data Research Division & Event Organizer of Webinar",
    duration: "Feb 2023 – Nov 2023",
    summaryPoints: [
      "Conducted data collection, analysis, and interpretation using Python.",
      "Organized the 'IT Talks: Building Your IT Career Path' webinar; attracted around 180 participants."
    ],
    imageUrl: "organizations/CCI/all.JPG",
    proofs: [{ label: "Data Research Certificate", url: "https://drive.google.com/file/d/1ZqEAOUxTg0AcKySqb9bkDETT5M5iqBNv/view?usp=sharing" }, 
              { label: "IT Talks Webinar Committee Certificate", url: "https://drive.google.com/file/d/1q6LTIbjNcSFfEXLl1_QKGUl9fOj8DkP6/view?usp=sharing" }, 
              { label: "Study Group Activity Report", url: "https://drive.google.com/file/d/1Ml__MCKBuk1fukPBBu8MmYdA8EwQYDIa/view?usp=sharing" },
            ],

    detailedInfo: {
        description: "Central Computer Improvement is a student organization focused on enhancing IT skills and knowledge among students.",
        keyPrograms: ["Data research projects", "'IT Talks' webinar series"],
        galleryImages: ["organizations/CCI/quiz.png", "organizations/CCI/sg1.png"]
    }
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "jfls-scholarship-2023",
    title: "Jabar Future Leader Scholarship 2023 Awardee",
    location: "Bandung, ID",
    description: "Awarded the D3/D4/S1 Education Scholarship for Accelerating Access to Higher Education for one year, a prestigious award for students in West Java.",
    date: "Sep 2023 – Jun 2024",
    imageUrl: "achivements/jfls/JFLS 2023_Riodino Raihan.jpg",
    proofs: [
        { label: "Acceptance Announcement", url: "https://drive.google.com/file/d/1nPa0-3l_NWrUzwIVODH8kW9UA0fQ2Xat/view?usp=sharing" },
    ],
    detailedInfo: {
      fullDescription: "The Jabar Future Leader Scholarship (JFLS) is a highly competitive scholarship program from the West Java Provincial Government. It aims to prepare future leaders by providing financial support for tuition fees and living expenses for one academic year. Being an awardee signifies academic excellence, leadership potential, and a commitment to contributing to the development of West Java.",
      context: "This scholarship is awarded to thousands of students across West Java from various academic backgrounds. The selection process is rigorous, involving administrative checks, academic assessments, and interviews to identify candidates with strong leadership qualities and a vision for the future.",
      learnings: ["Financial management and budgeting.", "Networking with fellow scholars and community leaders.", "Enhanced sense of social responsibility and commitment to regional development."],
      galleryImages: ["achivements/jfls/Bukti Diterima JFLS 2023.png"]
    }
  },
  {
    id: "syahadah-tahfizh",
    title: "Syahadah Tahfizh",
    location: "Bandung, ID",
    description: "Successfully graduated by memorizing 2 Juz from the Al-Quran (chapters 30 and 28), demonstrating strong discipline and commitment.",
    date: "Mei 2022",
    imageUrl: "achivements/syahadah tahfizh/Syahadah Tahfizh_Riodino Raihan _page-0001.jpg",
    proofs: [{ label: "Tahfizh Certificate", url: "https://drive.google.com/file/d/1NIi1bBtvaBqqDE9PnH4OJLPNfz9WGC5x/view?usp=sharing" }],
    detailedInfo: {
      fullDescription: "The Syahadah Tahfizh is a certificate of achievement awarded upon the successful memorization and recitation of specific sections of the Al-Quran. This accomplishment required consistent daily practice, dedication, and a deep understanding of the text. The memorization covered Juz 30 (Juz 'Amma) and Juz 28 (Juz Qad Sami' Allah), which are significant parts of the Quran.",
      context: "This achievement was part of a structured program that focuses not only on memorization but also on understanding the meaning and context of the verses. It is a testament to perseverance, mental discipline, and spiritual dedication.",
      learnings: ["Discipline and time management.", "Improved memory and concentration skills.", "Patience and perseverance in achieving long-term goals."],
      // galleryImages: ["https://picsum.photos/seed/tahfizh-gallery1/600/400"]
    }
  },
  {
    id: "ksn-2021-participant",
    title: "Kompetisi Sains Nasional (KSN) 2021 in Bandung City Level",
    location: "Bandung, ID",
    description: "Participated as an olympic contestant in the field of Computer Mathematics in the National Science Competition organized by Puspresnas Indonesia.",
    date: "Jun 2021",
    imageUrl: "achivements/ksn/KSN Kota atau Kabupaten Matematika Komputer 2021_Riodino Raihan_page-0001.jpg",
    proofs: [{ label: "Certificate", url: "https://drive.google.com/file/d/1jJfBb89S2s2zFvCnTfbie0x1jSfRwakW/view?usp=sharing" }],
    detailedInfo: {
      fullDescription: "Participation in the Kompetisi Sains Nasional (KSN), formerly known as the National Science Olympiad (OSN), represents a significant academic milestone. I competed in the Computer Mathematics category at the Bandung city level. This field combines mathematical logic with computational thinking and problem-solving skills.",
      context: "The KSN is Indonesia's most prestigious science competition for students, organized by the National Achievement Center (Puspresnas) under the Ministry of Education and Culture. Competing at this level required intensive preparation and a strong foundation in both advanced mathematics and computer science principles.",
      learnings: ["Advanced problem-solving techniques.", "Algorithmic thinking and logic.", "Performing under pressure in a competitive environment.", "Foundational concepts in discrete mathematics and computational theory."],
      // galleryImages: ["https://picsum.photos/seed/ksn-gallery1/600/400", "https://picsum.photos/seed/ksn-gallery2/600/400"]
    }
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "boston-house-price-prediction",
    title: "Boston House Price Prediction – Machine Learning Capstone",
    description: "Built and compared regression models (Decision Tree, Random Forest, AdaBoost) to predict housing prices. Achieved high accuracy with AdaBoost and deployed an interactive Streamlit app.",
    duration: "Apr 2025 – Jun 2025",
    responsibilities: [
      "Led a 3-member team to build and compare custom regression models (Decision Tree, Random Forest, AdaBoost) for housing price prediction.",
      "Achieved best performance with AdaBoost (R² = 0.87 or 87% accuracy, RMSE = 3.1 or ~$3,100 error).",
      "Deployed an interactive Streamlit app with Pyngrok for real-time predictions."
    ],
    technologies: ["Python", "AdaBoost", "Random Forest", "Decision Tree", "Streamlit", "Pyngrok", "Scikit-learn"],
    imageUrl: "projects/boston/Screenshot 2025-07-12 172658.png",
    proofs: [
      { label: "Github", url: "https://github.com/riodino14/tubesML_120" },
      { label: "Streamlit App", url: "https://tubesml120-if-46-04.streamlit.app/" }
    ],
    detailedInfo: {
      problemStatement: "To build a machine learning model that predicts Boston housing prices using various features, helping users and institutions make informed property decisions.",
      solutionOverview: "Built and compared regression models (Decision Tree, Random Forest, AdaBoost). AdaBoost performed best with R² = 0.87. The model was deployed via Streamlit and made accessible through Pyngrok.",
      technicalChallenges: [
        "Choosing appropriate regression models for tabular data.",
        "Handling outliers and skewed data for better model performance.",
        "Deploying a real-time web app using Streamlit and Pyngrok."
      ],
      learnings: [
        "Comparative evaluation of regression models in real-world scenarios.",
        "Importance of model metrics like R² and RMSE in regression tasks.",
        "Deployment of ML models using Streamlit and tunneling tools like Pyngrok."
      ],
      galleryImages: ["projects/boston/main.png", "projects/boston/Screenshot 2025-07-12 173050.png"]
    }
  }, 
  {
    id: "foodgo-cross-platform-app",
    title: "FoodGo – Cross-Platform Food Ordering App",
    description: "Developed FoodGo, a real-time food ordering app with cross-platform support using Flutter, Firebase, and Laravel backend. Supports full e-commerce flow with live updates.",
    duration: "Apr 2025 – Jun 2025",
    responsibilities: [
      "Led a 6-member team to develop FoodGo, a cross-platform food ordering app with real-time sync between Flutter and Laravel via Firebase.",
      "Built centralized backend with Firestore and Auth for unified data and live order updates.",
      "Delivered full e-commerce flow: search, cart, checkout, wallet, and synced order history."
    ],
    technologies: ["Flutter", "Firebase Firestore", "Firebase Auth", "Laravel", "Dart", "MySQL"],
    imageUrl: "projects/food-go/main.png", 
    proofs: [
      { label: "Github Web", url: "https://github.com/riodino14/foodgo-web-laravel-tubesabp-kel4" },
      { label: "Github Mobile", url: "https://github.com/riodino14/foodgo-mobile-flutter-tubesabp-kel4" }, 
      { label: "PPT Report", url: "https://drive.google.com/file/d/1qhbFCNDqiNzMLxM5gR7w78v8Xan4l07j/view?usp=sharing" }, 
      { label: "Mobile Report", url: "https://drive.google.com/file/d/1IfEeRv86Z-ztw1IDkc8w6mD2wfl3ioxa/view?usp=sharing" }
    ],
    detailedInfo: {
      problemStatement: "To create a scalable and real-time food ordering platform that supports users on both mobile and web platforms, ensuring fast and reliable transactions.",
      solutionOverview: "Developed a mobile app with Flutter connected to a Laravel backend using Firebase for authentication and real-time Firestore syncing. Users can search menus, add to cart, checkout, and track orders live.",
      technicalChallenges: [
        "Real-time data syncing between Flutter and Firebase.",
        "Managing user roles and secure authentication across platforms.",
        "Integrating Laravel with Firebase for hybrid backend workflows."
      ],
      learnings: [
        "Building cross-platform apps with Flutter.",
        "Integrating Firebase services into both frontend and backend systems.",
        "Architecting real-time applications with Firestore and Laravel."
      ],
      galleryImages: ["projects/food-go/Screenshot 2025-07-12 174502.png", "projects/food-go/Screenshot 2025-07-12 174452.png"]
    }
  }, 
  
  {
    id: "wholesale-customers-ai",
    title: "Wholesale Customers Dataset – Artificial Intelligence Capstone",
    description: "Analysis of Wholesale Customers dataset using KNN and Naive Bayes classification for an AI capstone project, achieving high accuracy through hyperparameter tuning.",
    duration: "Nov 2024– Jan 2025",
    responsibilities: [
      "Led a 3-member team to build and compare KNN and Naive Bayes models on the Wholesale Customers dataset.",
      "Optimized KNN with GridSearchCV, achieving 91.2% CV accuracy and 90% test accuracy.",
      "Found that outlier removal reduced performance, showing their predictive value."
    ],
    technologies: ["Python", "KNN", "Naive Bayes", "GridSearchCV", "Pandas", "Scikit-learn"],
    imageUrl: "projects/wholesale/main.png",
    proofs: [
        { label: "Streamlit App", url: "https://tubesai-1m2w.streamlit.app/" },
        { label: "Github", url: "https://github.com/riodino14/TubesAI_1M2W" }
    ],
    detailedInfo: {
      problemStatement: "The project aimed to classify wholesale customers into segments based on their spending on diverse product categories to enable targeted marketing strategies.",
      solutionOverview: "Developed classification models using K-Nearest Neighbors (KNN) and Naive Bayes. Performed data preprocessing, feature scaling, and hyperparameter tuning with GridSearchCV to optimize model performance. The KNN model, after tuning, demonstrated superior accuracy.",
      technicalChallenges: ["Handling skewed data distributions.", "Selecting optimal K value for KNN.", "Interpreting Naive Bayes results with continuous features."],
      learnings: ["Effective use of GridSearchCV for hyperparameter optimization.", "Comparative analysis of different classification algorithms.", "Importance of data preprocessing in machine learning."],
      galleryImages: ["projects/wholesale/main.png", "projects/wholesale/Screenshot 2025-07-12 214000.png", "projects/wholesale/Screenshot 2025-07-12 213902.png"]
    }
  },
  {
    id: "election-management-system-oop",
    title: "Election Management System, Object Oriented Programming Capstone",
    description: "Development of a secure, role-based election management system using Java & Spring Boot for an Object Oriented Programming capstone, featuring CRUD operations and an interactive frontend.",
    duration: "Nov 2024– Jan 2025",
    responsibilities: [
      "Led a 5-member team to develop a secure voting system with role-based authentication for admins and voters using Java & Spring Boot.",
      "Implemented CRUD functionalities for managing candidate and voter data, with real-time vote recap features using MySQL.",
      "Built an interactive frontend interface with HTML, CSS, and JavaScript for seamless user experience."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Spring Security"],
    imageUrl: "projects/pemilu/main3.png",
    proofs: [{ label: "Github", url: "https://github.com/riodino14/Pemilu_Tugas-Besar-PBO" },
             {label: "Final Report", url: "https://drive.google.com/file/d/12m-3rPEMTJ5BVueoUnGVSidUL_b4y_J8/view?usp=sharing"} 

    ],
    detailedInfo: {
      problemStatement: "To design and implement a secure and reliable online election management system that supports role-based access for administrators and voters, ensuring data integrity and ease of use.",
      solutionOverview: "A Java Spring Boot application with a MySQL database was developed. The system featured secure authentication, CRUD functionalities for managing election data (candidates, voters), and a user-friendly frontend built with HTML, CSS, and JavaScript.",
      technicalChallenges: ["Implementing robust security and role-based access control.", "Ensuring data consistency and integrity in CRUD operations.", "Designing an intuitive UI for different user roles."],
      learnings: ["Full-stack application development with Spring Boot.", "Database design and integration with MySQL.", "Principles of secure software development and authentication mechanisms."],
      galleryImages: ["projects/pemilu/main2.png", "projects/pemilu/Screenshot 2025-07-12 214401.png", 
        "projects/pemilu/hasilrekapitulasi.png",
        "projects/pemilu/daftarcalon.png" ,
        "projects/pemilu/voting.png", 
        "projects/pemilu/tim.png"
      ]
    }
  },
  {
    id: "sakuinapp-financial-management",
    title: "SakuinApp - Financial Management Website, Software Implementation and Testing",
    description: "Led the development of SakuinApp, a financial management system, using Laravel and Filament. Focused on secure transactions, financial reporting, and a responsive UI.",
    duration: "Oct 2023 – Jan 2024",
    responsibilities: [
      "Led a 4-member team to develop a personal financial management system using Laravel 10 and Filament for daily income and expense tracking.",
      "Designed and implemented core features including categorized transactions, financial dashboards, and user profile settings with MySQL integration.",
      "Delivered a modern and responsive user interface using Tailwind CSS and Blade templates, enhancing user experience."
    ],
    technologies: ["Laravel", "Filament", "MySQL", "Tailwind CSS", "Blade PHP"],
    imageUrl: "projects/sakuinapp/main.png",
    proofs: [{ label: "Github", url: "https://github.com/riodino14/SakuinApp" }, 
            {label : "Final Report", url: "https://drive.google.com/drive/folders/1Wu6yMzzLYiqNNlHqr5O7s3ROq1GKPs4J"},
    ],
    detailedInfo: {
      problemStatement: "Develop a web-based financial management application to help users track income, expenses, and generate financial reports, with a focus on security and user experience.",
      solutionOverview: "Built SakuinApp using the Laravel framework with Filament for the admin panel. Implemented features for transaction management, reporting, and role-based access. The frontend was styled with Tailwind CSS and Blade templates for responsiveness.",
      technicalChallenges: ["Integrating Filament for a seamless admin experience.", "Ensuring secure handling of financial data.", "Designing complex database schemas for financial transactions."],
      learnings: ["Rapid application development with Laravel and Filament.", "Implementing security best practices in web applications.", "Responsive UI design with Tailwind CSS."],
      galleryImages: ["projects/sakuinapp/logo.png", 
        "projects/sakuinapp/dashboard.png", 
        "projects/sakuinapp/categories.png", 
        "projects/sakuinapp/editcategory.png",  
        "projects/sakuinapp/transactions.png",
        "projects/sakuinapp/uji.png",
      ]
    }
  },
  // {
  //   id: "closest-route-detection-algo",
  //   title: "Closest Route Detection between Buildings, Strategic Algorithm Capstone",
  //   description: "Developed a Python application to find the shortest route between buildings at Telkom University, utilizing Dijkstra and Floyd-Warshall algorithms for efficient pathfinding.",
  //   duration: "Apr 2024 – Jun 2024",
  //   responsibilities: [
  //     "Led a 3-member team to build a Python app to detect the shortest route between campus buildings at Telkom University.",
  //     "Collected distance data between 7 buildings using Google Maps.",
  //     "Detected the shortest route between campus buildings within 1 second through the implementation of Dijkstra and Floyd-Warshall algorithms."
  //   ],
  //   technologies: ["Python", "Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Graph Theory"],
  //   imageUrl: "https://picsum.photos/seed/route-detection-project/400/250",
  //   proofs: [{ label: "Laporan Proyek", url: "#" }],
  //    detailedInfo: {
  //     problemStatement: "To find the shortest path between various buildings on the Telkom University campus to help students and staff navigate more efficiently.",
  //     solutionOverview: "A Python application was developed that implements Dijkstra's and Floyd-Warshall algorithms. Distance data between key buildings was collected and used to model the campus as a graph. The application then calculates and displays the shortest route between any two selected buildings.",
  //     technicalChallenges: ["Accurately collecting and representing inter-building distances.", "Implementing and comparing the performance of Dijkstra and Floyd-Warshall algorithms.", "Designing a simple interface for user input and output."],
  //     learnings: ["Practical application of graph theory and shortest path algorithms.", "Data collection and modeling for algorithmic problem-solving.", "Algorithm efficiency and trade-offs (Dijkstra vs. Floyd-Warshall)."],
  //   }
  // },
  // {
  //   id: "indonesian-sentence-structure-automata",
  //   title: "Indonesian Sentence Structure Detection, Language Theory and Automata Capstone",
  //   description: "Created a Python application for validating Indonesian sentence structures (S-P-O-K) using token recognizers and parsers, complete with a user-friendly GUI.",
  //   duration: "Mei 2024 – Jun 2024",
  //   responsibilities: [
  //     "Led a 5-member to develop a Python app for validating active sentence structures in Indonesian using a token recognizer and parser.",
  //     "Collected and processed data for subject, verb, object, and adverb (S-P-O-K) structures in the Indonesian language.",
  //     "Built an algorithm to automatically identify sentence structure and designed a user-friendly GUI for enhanced user experience."
  //   ],
  //   technologies: ["Python", "Token Recognizer", "Parser", "GUI Development (e.g., Tkinter/PyQt)", "Formal Language Theory"],
  //   imageUrl: "https://picsum.photos/seed/sentence-structure-project/400/250",
  //   proofs: [{ label: "Laporan Proyek", url: "#" }],
  //   detailedInfo: {
  //     problemStatement: "To develop a tool that can parse and validate the grammatical structure (Subject-Predicate-Object-Adverb/S-P-O-K) of Indonesian sentences based on principles of language theory and automata.",
  //     solutionOverview: "A Python application was built featuring a token recognizer (lexer) and a parser. It processes Indonesian sentences, identifies their components (Subject, Predicate, Object, Adverb), and validates if they conform to defined grammatical rules. A GUI was developed for ease of input and visualization of results.",
  //     technicalChallenges: ["Defining a comprehensive grammar for Indonesian S-P-O-K structures.", "Handling linguistic variations and exceptions.", "Implementing an efficient parser for the defined grammar."],
  //     learnings: ["Application of automata theory and formal languages to natural language processing.", "Lexical analysis and parsing techniques.", "GUI development for utility applications."],
  //     galleryImages: ["https://picsum.photos/seed/sentence-gallery1/600/400", "https://picsum.photos/seed/sentence-gallery2/600/400"]
  //   }
  // },
  // {
  //   id: "dummy-project-6",
  //   title: "E-commerce Platform Redesign - UX Case Study",
  //   description: "A comprehensive UX case study focusing on redesigning an e-commerce platform for improved user engagement and conversion rates, featuring user research, wireframing, and prototyping.",
  //   duration: "Mar 2024 – Apr 2024",
  //   responsibilities: [
  //     "Conducted user interviews and surveys to identify pain points in the existing platform.",
  //     "Developed user personas and journey maps.",
  //     "Created low-fidelity and high-fidelity wireframes and interactive prototypes using Figma."
  //   ],
  //   technologies: ["Figma", "User Research", "UX Design", "Prototyping", "Usability Testing"],
  //   imageUrl: "https://picsum.photos/seed/ecommerce-ux-project/400/250",
  //   proofs: [{ label: "Studi Kasus", url: "#" }],
  //   detailedInfo: {
  //     problemStatement: "The existing e-commerce platform suffers from low user engagement and a high cart abandonment rate due to a clunky user interface and confusing navigation.",
  //     solutionOverview: "A user-centered redesign approach was adopted. This involved extensive user research to inform design decisions, leading to a streamlined navigation, clearer product presentation, and an optimized checkout process. Prototypes were tested with users to validate design choices.",
  //     technicalChallenges: ["Balancing aesthetic appeal with usability.", "Designing for a diverse user base with varying technical skills.", "Iterating on designs based on user feedback within a tight schedule."],
  //     learnings: ["Importance of user research in driving design decisions.", "Iterative design process and the value of prototyping.", "Effective communication of design rationale to stakeholders."],
  //     galleryImages: ["https://picsum.photos/seed/ecommerce-ux-gallery1/600/400", "https://picsum.photos/seed/ecommerce-ux-gallery2/600/400"]
  //   }
  // },
  // {
  //   id: "dummy-project-7",
  //   title: "Mobile Health & Fitness Tracker App",
  //   description: "Developed a cross-platform mobile application for tracking fitness activities and health metrics, utilizing React Native for development and Firebase for backend services.",
  //   duration: "Jan 2024 – Mar 2024",
  //   responsibilities: [
  //     "Designed and implemented the user interface for activity logging and progress visualization.",
  //     "Integrated Firebase Authentication for user sign-up and login.",
  //     "Utilized Firebase Firestore for storing user data and fitness activities."
  //   ],
  //   technologies: ["React Native", "Firebase", "JavaScript", "Mobile UI/UX", "API Integration"],
  //   imageUrl: "https://picsum.photos/seed/fitness-app-project/400/250",
  //   proofs: [{ label: "Repositori GitHub", url: "#" }],
  //   detailedInfo: {
  //     problemStatement: "Create a user-friendly mobile application to help individuals track their daily physical activities, monitor health metrics (like water intake, sleep), and set fitness goals.",
  //     solutionOverview: "A React Native application was developed, providing a seamless experience on both iOS and Android. Key features include activity logging, goal setting, progress charts, and user authentication via Firebase. Firestore was used as the NoSQL database to store user data.",
  //     technicalChallenges: ["Ensuring consistent performance across different mobile devices.", "Managing real-time data synchronization with Firebase.", "Designing an intuitive and motivating user experience for health tracking."],
  //     learnings: ["Cross-platform mobile development with React Native.", "Backend-as-a-Service (BaaS) integration using Firebase.", "State management in mobile applications."],
  //     projectUrl: "https://github.com/riodinoraihan/fitness-tracker-example",
  //     galleryImages: ["https://picsum.photos/seed/fitness-app-gallery1/600/400", "https://picsum.photos/seed/fitness-app-gallery2/600/400"]
  //   }
  // },
  // {
  //   id: "dummy-project-8",
  //   title: "Personal Blog Platform with CMS",
  //   description: "Built a dynamic personal blog platform using Next.js for server-side rendering and Sanity.io as a headless CMS, allowing for easy content management and SEO optimization.",
  //   duration: "Dec 2023 – Feb 2024",
  //   responsibilities: [
  //     "Developed frontend components in React and Next.js for displaying blog posts and categories.",
  //     "Set up and configured Sanity.io schema for blog content.",
  //     "Implemented server-side rendering (SSR) for improved SEO and performance."
  //   ],
  //   technologies: ["Next.js", "React", "Sanity.io", "Tailwind CSS", "GraphQL", "SSR"],
  //   imageUrl: "https://picsum.photos/seed/blog-cms-project/400/250",
  //   proofs: [{ label: "Repositori GitHub", url: "#" }],
  //   detailedInfo: {
  //     problemStatement: "To create a flexible and performant personal blog platform that allows for easy content creation and management without requiring technical expertise for updating posts.",
  //     solutionOverview: "A blog platform was built using Next.js for the frontend, leveraging its server-side rendering capabilities for fast load times and SEO benefits. Sanity.io was integrated as a headless CMS, providing a user-friendly interface for managing blog posts, categories, and author information. Tailwind CSS was used for styling.",
  //     technicalChallenges: ["Setting up the data fetching mechanism between Next.js and Sanity.io.", "Optimizing image handling for different screen sizes.", "Implementing a clean and maintainable project structure."],
  //     learnings: ["Working with headless CMS (Sanity.io).", "Server-Side Rendering (SSR) and its benefits with Next.js.", "Content modeling and schema design."],
  //     galleryImages: ["https://picsum.photos/seed/blog-cms-gallery1/600/400"]
  //   }
  // }
];

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Non-Technical Skills",
    skills: ["Leadership", "Cooperation", "Adaptive", "Analytical Thinking", "Time Management"]
  },
  {
    categoryName: "Technical Skills",
    skills: ["Programming Algorithms (Go, Python, C++)", "Research and Data Visualization (Python, R-Studio)", "Wireshark", "MySQL", "Wordpress", "Figma", "Google Colab"]
  },
  {
    categoryName: "Languages",
    skills: ["Indonesia (Native)", "English (Intermediate)"], 
    proofs: [{ label: "Certification of International Communication English Course", url: "https://drive.google.com/file/d/1xjL5rH5H759tHvAd3TkjLKIG6TzXnnBX/view?usp=sharing" }]
  }
];