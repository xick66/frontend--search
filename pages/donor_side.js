
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactModal from "react-modal";
import styles from "../styles/Home.module.css";
import { Sankey } from 'react-vis';
import HamburgerMenu from "./hamburger";


const DonorPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [searchDonor, setsearchDonor] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const SankeyDiagram = ({ id }) => {
    const getNodeColor = (id) => {
      switch (id) {
        case 1:
          return "#3498db";
        case 2:
          return "#2ecc71";
        case 3:
          return "#e67e22";
        default:
          return "#9b59b6";
      }
    };

    const getLinkColor = (id, source, target) => {
      switch (id) {
        case 1:
          if (source === 0 && target === 1) return "#2980b9";
          if (source === 0 && target === 2) return "#1e90ff";
          if (source === 1 && target === 3) return "#191970";
          if (source === 2 && target === 4) return "#00008b";
          break;
        case 2:
          if (source === 0 && target === 1) return "#27ae60";
          if (source === 0 && target === 2) return "#2e8b57";
          if (source === 1 && target === 3) return "#006400";
          if (source === 2 && target === 4) return "#008000";
          break;
        case 3:
          if (source === 0 && target === 1) return "#d35400";
          if (source === 0 && target === 2) return "#ff8c00";
          if (source === 1 && target === 3) return "#ffa500";
          if (source === 2 && target === 4) return "#ff7f50";
          break;
        default:
          if (source === 0 && target === 1) return "#8e44ad";
          if (source === 0 && target === 2) return "#9370db";
          if (source === 1 && target === 3) return "#ba55d3";
          if (source === 2 && target === 4) return "#8a2be2";
          break;
      }
    };

    const nodes = [
      { name: 'Total Funds', color: getNodeColor(id) },
      { name: 'Program Costs', color: getNodeColor(id) },
      { name: 'Operational Costs', color: getNodeColor(id) },
      { name: 'Awareness Campaigns', color: getNodeColor(id) },
      { name: 'Surplus', color: getNodeColor(id) },
    ];
  
    const links = [
      { source: 0, target: 1, value: 70, color: getLinkColor(id, 0, 1) },
      { source: 0, target: 2, value: 20, color: getLinkColor(id, 0, 2) },
      { source: 1, target: 3, value: 5, color: getLinkColor(id, 1, 3) },
      { source: 2, target: 4, value: 5, color: getLinkColor(id, 2, 4) },
    ];
  
    const customNodeRenderer = (props) => {
      const { name, color } = props.node;
      return (
        <text
          fill="white"
          textAnchor="middle"
          x={props.x}
          y={props.y}
          style={{ fill: color }}
        >
          {name}
        </text>
      );
    };

    return (
      <Sankey
        nodes={nodes}
        links={links}
        width={800}
        height={500}
        hasVoronoi={false}
        nodePadding={10}
        nodeWidth={15}
        nodePaddingRatio={0.7}
        renderNode={customNodeRenderer}
      />
    );
  };

  useEffect(() => {
    const sampleProjects = [
      {
        id: 1,
        title: "#CleanWater for Bengaluru",
        description: "The Clean Water Initiative aims to provide clean and accessible water to underserved communities. Through innovative water purification systems and infrastructure development, we are working to ensure that everyone has access to safe and reliable drinking water.",
        image: "/images/2cleanwater.jpeg",
        fundingGoal: 50000,
        fundingRaised: 35000,
      },
      {
        id: 2,
        title: "Reforestation Project",
        description: "The Reforestation Project focuses on planting trees in areas affected by deforestation. By replenishing the forest cover, we aim to combat climate change, improve soil quality, and provide habitats for endangered species.",
        image: "/images/2reforestation.jpeg",
        fundingGoal: 75000,
        fundingRaised: 55000,
      },
      {
        id: 3,
        title: "Education Empowerment",
        description: "The Education Empowerment initiative aims to improve access to quality education for underprivileged children. We provide scholarships, build new schools, and implement innovative learning programs to ensure that every child has the opportunity to reach their full potential.",
        image: "/images/2education.jpeg",
        fundingGoal: 100000,
        fundingRaised: 80000,
      },
      {
        id: 4,
        title: "Sustainable Agriculture",
        description: "The Sustainable Agriculture project focuses on promoting environmentally-friendly farming practices. We work with local farmers to implement sustainable techniques, such as crop rotation, organic pest management, and water conservation, to ensure long-term food security and environmental sustainability.",
        image: "/images/2agriculture.jpeg",
        fundingGoal: 60000,
        fundingRaised: 45000,
      },
      {
        id: 5,
        title: "Renewable Energy Initiative",
        description: "The Renewable Energy Initiative aims to transition communities to clean and renewable energy sources. We install solar panels, wind turbines, and other sustainable energy infrastructure to reduce carbon emissions and promote a greener future.",
        image: "/images/2renewable.jpeg",
        fundingGoal: 90000,
        fundingRaised: 70000,
      },
      {
        id: 6,
        title: "Animal Welfare Program",
        description: "The Animal Welfare Program focuses on protecting and rehabilitating endangered animal species. We establish wildlife sanctuaries, support conservation efforts, and educate the public on the importance of biodiversity and animal preservation.",
        image: "/images/2animalwelfare.png",
        fundingGoal: 80000,
        fundingRaised: 65000,
      },
      {
        id: 7,
        title: "Disaster Relief Efforts",
        description: "The Disaster Relief Efforts provide aid and support during natural disasters and emergencies. We mobilize resources, deploy emergency teams, and coordinate with local authorities to ensure that affected communities receive the assistance they need during challenging times.",
        image: "/images/2disaster.jpeg",
        fundingGoal: 120000,
        fundingRaised: 95000,
      },
      {
        id: 8,
        title: "Community Development",
        description: "The Community Development initiative aims to empower local communities through infrastructure improvements and social welfare programs. We build schools, healthcare facilities, and community centers to foster economic growth and social cohesion.",
        image: "/images/2community.png",
        fundingGoal: 70000,
        fundingRaised: 50000,
      },
      {
        id: 9,
        title: "Mental Health Advocacy",
        description: "The Mental Health Advocacy program promotes awareness and provides support services for individuals struggling with mental health challenges. We offer counseling, therapy, and educational resources to destigmatize mental health and ensure that everyone has access to the care they need.",
        image: "/images/2mentalhealth.png",
        fundingGoal: 85000,
        fundingRaised: 60000,
      },
      {
        id: 10,
        title: "Poverty Alleviation Initiative",
        description: "The Poverty Alleviation Initiative aims to address the root causes of poverty and improve social welfare. We implement programs that provide job training, microfinance opportunities, and access to essential services to empower individuals and families to break the cycle of poverty.",
        image: "/images/2poverty.jpeg",
        fundingGoal: 100000,
        fundingRaised: 75000,
      },
    ];
    setProjects(sampleProjects);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  const edu_projects = [
    {
      id: 21,
      title: "Education Empowerment",
      description: "The Education Empowerment initiative aims to improve access to quality education for underprivileged children. We provide scholarships, build new schools, and implement innovative learning programs to ensure that every child has the opportunity to reach their full potential.",
      image: "/images/2education.jpeg",
      fundingGoal: 100000,
      fundingRaised: 80000,
    },
    {
      id: 22,
      title: "Educate today ",
      description: "Educate Today is a non-profit organization dedicated to providing equitable access to quality education for all, fostering innovation in teaching methodologies, empowering students to reach their full potential, and promoting lifelong learning in communities worldwide.",
      image: "/images/education.jpeg",
      fundingGoal: 85000,
      fundingRaised: 50000,
    },
    {
      id: 23,
      title: "EduCare Foundation",
      description: "EduCare Foundation strives to empower underprivileged youth through educational programs, ensuring equal opportunities for academic success and personal growth.",
      image: "/images/3education.jpeg",
      fundingGoal: 105000,
      fundingRaised: 850000,
    },
    {
      id: 24,
      title: "Brighter Tomorrow Initiative",
      description: "Brighter Tomorrow Initiative is committed to enhancing education access and quality, illuminating pathways for brighter futures in underserved communities.",
      image: "/images/4education.jpeg",
      fundingGoal: 65000,
      fundingRaised: 50000,
    },
    {
      id: 25,
      title: "LearnWell Alliance",
      description: "LearnWell Alliance collaborates with educators and communities to innovate teaching methods, fostering engaging learning environments that inspire students to excel.",
      image: "/images/5education.jpeg",
      fundingGoal: 95000,
      fundingRaised: 55000,
    },
    {
      id: 26,
      title: "Global Education Network",
      description: "Global Education Network connects educators worldwide, facilitating knowledge exchange and collaboration to enhance educational standards and promote global citizenship.",
      image: "/images/6education.jpeg",
      fundingGoal: 130000,
      fundingRaised: 90000,
    },
  ];

  const health_projects = [
    {
      id: 31,
      title: "Health for All Foundation",
      description: "Health for All Foundation works tirelessly to ensure equitable access to healthcare services and promote well-being for all individuals.",
      image: "/images/1health.jpeg",
      fundingGoal: 110000,
      fundingRaised: 85000,
    },
    {
      id: 32,
      title: "CareBridge Health Initiative",
      description: "CareBridge Health Initiative bridges gaps in healthcare access, delivering compassionate care and empowering communities to achieve optimal health outcomes",
      image: "/images/4health.jpeg",
      fundingGoal: 95000,
      fundingRaised: 50000,
    },
    {
      id: 33,
      title: "Wellness Outreach Network",
      description: "Wellness Outreach Network promotes preventive healthcare and community wellness through education, outreach programs, and access to essential health services.",
      image: "/images/3health.jpeg",
      fundingGoal: 105000,
      fundingRaised: 950000,
    },
    {
      id: 34,
      title: "HealHope Alliance",
      description: "HealHope Alliance is dedicated to providing hope and healing through innovative healthcare solutions, fostering resilience and well-being in communities.",
      image: "/images/2health.jpeg",
      fundingGoal: 65000,
      fundingRaised: 55000,
    },
    {
      id: 35,
      title: "MedServe Community Care",
      description: "MedServe Community Care extends compassionate healthcare services, prioritizing community well-being and fostering a healthier, more resilient society for all.",
      image: "/images/6health.jpeg",
      fundingGoal: 85000,
      fundingRaised: 45000,
    },
  ];

  const showCards = () => {
    const words = searchDonor.split(/\s+/);
    const wordObject = {};
    words.forEach((word, index) => {
      wordObject[`word${index + 1}`] = word;
    });

    for (const key in wordObject) {
      if (wordObject.hasOwnProperty(key)) {
        if (
          wordObject[key] === "education" ||
          wordObject[key] === "educational"
        ) {
          console.log("edu present");
          setProjects(edu_projects);
        }
      }
    }

    for (const key in wordObject) {
      if (wordObject.hasOwnProperty(key)) {
        if (wordObject[key] === "health" || wordObject[key] === "healthcare") {
          console.log("health present");
          setProjects(health_projects);
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Donor Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HamburgerMenu/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Donor Dashboard</span>
        </h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for NPOs"
            value={searchDonor}
            onChange={(e) => setsearchDonor(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={() => showCards()} className={styles.searchButton}>
            Search
          </button>
        </div>

        {projects.length > 0 && (
          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.volunteerProgress}>
                  <div
                    className={styles.volunteerBar2}
                    style={{
                      width: `${(project.fundingRaised / project.fundingGoal) * 100}%`,
                    }}
                  />
                </div>
                <span className={styles.volunteerAmount}>
                  {project.fundingRaised.toLocaleString()} Rs /{" "}
                  {project.fundingGoal.toLocaleString()} Rs
                </span>
        <button className={styles.volunteerButton}>Donate</button>
      </div>
    ))}
  </div>
)}

        {projects.length === 0 && <div>Loading...</div>}
      </main>

      <ReactModal
 isOpen={showPopup}
 onRequestClose={closePopup}
 contentLabel="Project Details"
 className={styles.modal}
 overlayClassName={styles.modalOverlay}
>
 <div className={styles.modalContent}>
   <button className={styles.closeButton} onClick={closePopup}>
     &times;
   </button>
   {selectedProject && (
     <div className={styles.popupContainer}>
       <img
         src={selectedProject.image}
         alt={selectedProject.title}
         className={styles.popupImage}
       />
       <h3 className={styles.popupTitle}>{selectedProject.title}</h3>
       <p className={styles.popupDescription}>
         {selectedProject.description}
       </p>
       <div className={styles.financialsContainer}>
         <h3 className={styles.financialsTitle}>Financials</h3>
         {SankeyDiagram(selectedProject.id)}
         <div className={styles.flows}>
           <div className={styles.flow}>
             <span className={styles.flowTitle}>Food</span>
             <span className={styles.flowValue}>10,000 units</span>
           </div>
           <div className={styles.flow}>
             <span className={styles.flowTitle}>Goods</span>
             <span className={styles.flowValue}>5,000 units</span>
           </div>
           <div className={styles.flow}>
             <span className={styles.flowTitle}>Manpower</span>
             <span className={styles.flowValue}>50 volunteers</span>
           </div>
           <div className={styles.flow}>
             <span className={styles.flowTitle}>Campaigns</span>
             <span className={styles.flowValue}>3 campaigns</span>
           </div>
         </div>
       </div>
       <div className={styles.deliverables}>
         <h4 className={styles.deliverableTitle}>Deliverables on Donation:</h4>
         <ol className={styles.deliverableList}>
           <li>
             Coverage on our social media handles (Instagram, Twitter & LinkedIn)
             with a total reach of 100k+ audience
           </li>
           <li>
             Coverage in Dainik Bhaskar or The Hindu as a 200 word paragraph
           </li>
           <li>Addition to our donor repository on our website</li>
           <li>
             Invitation as a chief guest to one of our events & press coverage
             for it.
           </li>
         </ol>
       </div>
       <button className={styles.donateButton2}>Donate</button>
     </div>
   )}
 </div>
</ReactModal>

      <footer className={styles.footer}>
        <p>&copy; 2024 Donor Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DonorPage;