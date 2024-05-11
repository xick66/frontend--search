import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';


const DonorPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [searchDonor, setsearchDonor] = useState("")
  // const [searchDonor, setSearchDonor] = useState('');


  useEffect(() => {
    // Fetch project data from an API or use sample data
    const sampleProjects = [
            {
              id: 1,
              title: 'Clean Water Initiative',
              description:
                'The Clean Water Initiative aims to provide clean and accessible water to underserved communities. Through innovative water purification systems and infrastructure development, we are working to ensure that everyone has access to safe and reliable drinking water.',
              image: '/project1.jpg',
              fundingGoal: 50000,
              fundingRaised: 35000,
            },
            {
              id: 2,
              title: 'Reforestation Project',
              description:
                'The Reforestation Project focuses on planting trees in areas affected by deforestation. By replenishing the forest cover, we aim to combat climate change, improve soil quality, and provide habitats for endangered species.',
              image: '/project2.jpg',
              fundingGoal: 75000,
              fundingRaised: 55000,
            },
            {
              id: 3,
              title: 'Education Empowerment',
              description:
                'The Education Empowerment initiative aims to improve access to quality education for underprivileged children. We provide scholarships, build new schools, and implement innovative learning programs to ensure that every child has the opportunity to reach their full potential.',
              image: '/project3.jpg',
              fundingGoal: 100000,
              fundingRaised: 80000,
            },
            {
              id: 4,
              title: 'Sustainable Agriculture',
              description:
                'The Sustainable Agriculture project focuses on promoting environmentally-friendly farming practices. We work with local farmers to implement sustainable techniques, such as crop rotation, organic pest management, and water conservation, to ensure long-term food security and environmental sustainability.',
              image: '/project4.jpg',
              fundingGoal: 60000,
              fundingRaised: 45000,
            },
            {
              id: 5,
              title: 'Renewable Energy Initiative',
              description:
                'The Renewable Energy Initiative aims to transition communities to clean and renewable energy sources. We install solar panels, wind turbines, and other sustainable energy infrastructure to reduce carbon emissions and promote a greener future.',
              image: '/project5.jpg',
              fundingGoal: 90000,
              fundingRaised: 70000,
            },
            {
              id: 6,
              title: 'Animal Welfare Program',
              description:
                'The Animal Welfare Program focuses on protecting and rehabilitating endangered animal species. We establish wildlife sanctuaries, support conservation efforts, and educate the public on the importance of biodiversity and animal preservation.',
              image: '/project6.jpg',
              fundingGoal: 80000,
              fundingRaised: 65000,
            },
            {
              id: 7,
              title: 'Disaster Relief Efforts',
              description:
                'The Disaster Relief Efforts provide aid and support during natural disasters and emergencies. We mobilize resources, deploy emergency teams, and coordinate with local authorities to ensure that affected communities receive the assistance they need during challenging times.',
              image: '/project7.jpg',
              fundingGoal: 120000,
              fundingRaised: 95000,
            },
            {
              id: 8,
              title: 'Community Development',
              description:
                'The Community Development initiative aims to empower local communities through infrastructure improvements and social welfare programs. We build schools, healthcare facilities, and community centers to foster economic growth and social cohesion.',
              image: '/project8.jpg',
              fundingGoal: 70000,
              fundingRaised: 50000,
            },
            {
              id: 9,
              title: 'Mental Health Advocacy',
              description:
                'The Mental Health Advocacy program promotes awareness and provides support services for individuals struggling with mental health challenges. We offer counseling, therapy, and educational resources to destigmatize mental health and ensure that everyone has access to the care they need.',
              image: '/project9.jpg',
              fundingGoal: 85000,
              fundingRaised: 60000,
            },
            {
              id: 10,
              title: 'Poverty Alleviation Initiative',
              description:
                'The Poverty Alleviation Initiative aims to address the root causes of poverty and improve social welfare. We implement programs that provide job training, microfinance opportunities, and access to essential services to empower individuals and families to break the cycle of poverty.',
              image: '/project10.jpg',
              fundingGoal: 100000,
              fundingRaised: 75000,
            },
          ];
    setProjects(sampleProjects);
  }, []);

  const handleProjectClick = (project) => {
    router.push(`/project/${project.id}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Donor Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Donor Dashboard</span>
        </h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for NPOs "
            value={searchDonor}
            onChange={(e) => {setsearchDonor(e.target.value);
              console.log(searchDonor);
            }}
            className={styles.searchInput}
          />
          <button  className={styles.searchButton}>
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
              >
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                {/* <div className={styles.fundingProgress}>
                  <div
                    className={styles.fundingBar}
                    style={{
                      width: `${(project.fundingRaised / project.fundingGoal) * 100}%`,
                    }}
                  ></div>
                  <span className={styles.fundingAmount}>
                    ${project.fundingRaised.toLocaleString()} / ${project.fundingGoal.toLocaleString()}
                  </span>
                </div> */}
                <div className={styles.volunteerProgress}>
                  <div
                    className={styles.volunteerBar2}
                    style={{
                      width: `${
                        (project.fundingRaised / project.fundingGoal) *
                        100
                      }%`,
                    }}
                  />
                  
                </div>
                <span className={styles.volunteerAmount}>
                    ${project.fundingRaised.toLocaleString()} / {project.fundingGoal.toLocaleString()}
                    
                </span>
              </div>
            ))}
          </div>
        )}

        {projects.length === 0 && <div>Loading...</div>}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Donor Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DonorPage;