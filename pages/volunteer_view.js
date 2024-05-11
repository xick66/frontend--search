import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const VolunteerView = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Clean Water Initiative',
      description: 'Providing clean and accessible water to underserved communities.',
      image: '/project1.jpg',
      location: 'Nairobi, Kenya',
      host: {
        name: 'Jane Smith',
        profilePicture: '/host1.jpg',
      },
      volunteerNeeded: 25,
      volunteerJoined: 15,
    },
    {
      id: 2,
      title: 'Reforestation Project',
      description: 'Planting trees to combat deforestation and climate change.',
      image: '/project2.jpg',
      location: 'Amazon Rainforest, Brazil',
      host: {
        name: 'Michael Johnson',
        profilePicture: '/host2.jpg',
      },
      volunteerNeeded: 50,
      volunteerJoined: 30,
    },
    {
      id: 3,
      title: 'Education Empowerment',
      description: 'Improving access to quality education for underprivileged children.',
      image: '/project3.jpg',
      location: 'New Delhi, India',
      host: {
        name: 'Sarah Lee',
        profilePicture: '/host3.jpg',
      },
      volunteerNeeded: 40,
      volunteerJoined: 25,
    },
    {
      id: 4,
      title: 'Animal Welfare Program',
      description: 'Protecting and rehabilitating endangered animal species.',
      image: '/project4.jpg',
      location: 'Serengeti National Park, Tanzania',
      host: {
        name: 'David Nguyen',
        profilePicture: '/host4.jpg',
      },
      volunteerNeeded: 30,
      volunteerJoined: 20,
    },
    {
      id: 5,
      title: 'Disaster Relief Efforts',
      description: 'Providing aid and support during natural disasters and emergencies.',
      image: '/project5.jpg',
      location: 'Puerto Rico, USA',
      host: {
        name: 'Olivia Hernandez',
        profilePicture: '/host5.jpg',
      },
      volunteerNeeded: 45,
      volunteerJoined: 35,
    },
  ]);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    karmaPoints: 150,
    profilePicture: '/profile.jpg',
    activityHistory: [
      { id: 1, activity: 'Volunteered for Clean Water Initiative', date: '2023-05-10' },
      { id: 2, activity: 'Planted 20 trees for Reforestation Project', date: '2023-05-08' },
      { id: 3, activity: 'Tutored 10 children for Education Empowerment', date: '2023-05-05' },
      { id: 4, activity: 'Donated supplies for Disaster Relief Efforts', date: '2023-05-02' },
    ],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const contributionDays = Array.from({ length: 84 }, () => ({
    date: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000),
    hours: Math.random() < 0.2 ? Math.floor(Math.random() * 5) + 1 : 0,
  }));

  const handleVolunteerClick = (project) => {
    console.log(`Volunteering for project: ${project.title}`);
    router.push(`/project/${project.id}`);
  };

  const handleCreateInitiative = () => {
    console.log('Creating a new initiative');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Volunteer View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.main} ${isSidebarOpen ? styles.mainShrink : ''}`}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Volunteer Opportunities</span>
        </h1>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectDetails}>
                  <div className={styles.projectLocation}>
                    <svg
                      className={styles.locationIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21c-1.66 0-3-1.34-3-3a3 3 0 013-3c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3zm6-9c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
                        stroke="#d1ff4f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={styles.locationText}>{project.location}</span>
                  </div>
                  <div className={styles.projectHost}>
                    <img
                      src={project.host.profilePicture}
                      alt={project.host.name}
                      className={styles.hostProfilePicture}
                    />
                    <span className={styles.hostName}>{project.host.name}</span>
                  </div>
                </div>
                <div className={styles.volunteerProgress}>
                  <div
                    className={styles.volunteerBar}
                    style={{
                      width: `${(project.volunteerJoined / project.volunteerNeeded) * 100}%`,
                    }}
                  />
                  <span className={styles.volunteerAmount}>
                    {project.volunteerJoined} / {project.volunteerNeeded} volunteers
                  </span>
                </div>
                <button
                  className={styles.volunteerButton}
                  onClick={() => handleVolunteerClick(project)}
                >
                  Volunteer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
      >
        <button className={styles.sidebarToggle} onClick={toggleSidebar}>
          <svg
            className={`${styles.sidebarToggleIcon} ${
              isSidebarOpen ? '' : styles.sidebarToggleIconRotated
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="#d1ff4f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.profilePreview}>
          <div className={styles.profileInfo}>
            <img
              src={userInfo.profilePicture}
              alt={userInfo.name}
              className={styles.profilePicture}
            />
            <h3 className={styles.profileName}>{userInfo.name}</h3>
            <div className={styles.karmaPoints}>
              <span className={styles.karmaLabel}>Karma Points:</span>
              <span className={styles.karmaValue}>{userInfo.karmaPoints}</span>
            </div>
          </div>
        </div>

        <div className={styles.activityHistory}>
          <h3 className={styles.activityTitle}>Activity History</h3>
          {userInfo.activityHistory.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <span className={styles.activityText}>{activity.activity}</span>
              <span className={styles.activityDate}>{activity.date}</span>
            </div>
          ))}
        </div>

        <div className={styles.activityGraph}>
          <h3 className={styles.activityGraphTitle}>Contribution Overview</h3>
          <div className={styles.contributionGraph}>
            <div className={styles.contributionMonths}>
              {['Apr', 'May', 'Jun'].map((month, index) => (
                <div key={index} className={styles.monthLabel}>
                  {month}
                </div>
              ))}
            </div>
            <div className={styles.contributionWeekdays}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className={styles.weekdayLabel}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.contributionDays}>
              {Array.from({ length: 84 }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.contributionDay} ${
                    contributionDays[index].hours > 0 && contributionDays[index].date.getMonth() < 5
                      ? styles[`contributionLevel${Math.min(contributionDays[index].hours, 4)}`]
                      : ''
                  }`}
                  title={`${contributionDays[index].date.toDateString()} - ${
                    contributionDays[index].hours
                  } hours`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.createInitiative}>
        <button className={styles.createButton} onClick={handleCreateInitiative}>
          <svg
            className={styles.createIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4v16m-8-8h16"
              stroke="#d1ff4f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VolunteerView;
