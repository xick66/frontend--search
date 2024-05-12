import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import GitHubCalendar from 'react-github-calendar';
import HamburgerMenu from "./hamburger";

const VolunteerView = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Clean Water Initiative",
      description:
        "Providing clean and accessible water to underserved communities.",
      image: "/images/cleanwater.jpeg",
      location: "Kengeri, Bengaluru",
      host: {
        name: "Anand Kumar",
        profilePicture: "/images/anandkumar.jpeg",
      },
      volunteerNeeded: 25,
      volunteerJoined: 9,
    },
    {
      id: 2,
      title: "Reforestation Project",
      description: "Planting trees to combat deforestation and climate change.",
      image: "/images/reforestation.jpeg",
      location: "Mathikere, Bengaluru",
      host: {
        name: "Krishna",
        profilePicture: "/images/krishna.jpeg",
      },
      volunteerNeeded: 50,
      volunteerJoined: 41,
    },
    {
      id: 3,
      title: "Education Empowerment",
      description:
        "Improving access to quality education for underprivileged children.",
      image: "/images/education.jpeg",
      location: "Aahwahan Foundation",
      host: {
        name: "Sheela",
        profilePicture: "/images/Sheela.jpeg",
      },
      volunteerNeeded: 10,
      volunteerJoined: 6,
    },
    {
      id: 4,
      title: "Animal Welfare Program",
      description: "Protecting and rehabilitating stray dogs.",
      image: "/images/animalwelfare.jpg",
      location: "Sarvoham Foundation",
      host: {
        name: "Chethan Shetty",
        profilePicture: "/images/Chethan.jpeg",
      },
      volunteerNeeded: 15,
      volunteerJoined: 11,
    },
    {
      id: 5,
      title: "Disaster Relief Efforts",
      description:
        "Providing aid and support during natural disasters and emergencies.",
      image: "/images/disaster.jpeg",
      location: "Assam",
      host: {
        name: "Olivia",
        profilePicture: "/images/olivia.jpeg",
      },
      volunteerNeeded: 45,
      volunteerJoined: 35,
    },
  ]);
  const [userInfo, setUserInfo] = useState({
    name: "Rahul",
    karmaPoints: 150,
    profilePicture: "/images/my face (1).jpg",
    activityHistory: [
      {
        id: 1,
        activity: "Volunteered for Clean Water Initiative",
        date: "2023-05-10",
      },
      {
        id: 2,
        activity: "Planted 20 trees for Reforestation Project",
        date: "2023-05-08",
      },
      {
        id: 3,
        activity: "Tutored 10 children for Education Empowerment",
        date: "2023-05-05",
      },
      {
        id: 4,
        activity: "Donated supplies for Disaster Relief Efforts",
        date: "2023-05-02",
      },
    ],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const contributionDays = Array.from({ length: 84 }, () => ({
    date: new Date(
      Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
    ),
    hours: Math.random() < 0.2 ? Math.floor(Math.random() * 5) + 1 : 0,
  }));

  const handleVolunteerClick = (project) => {
    console.log(`Volunteering for project: ${project.title}`);
    router.push(`/project/${project.id}`);
  };

  const handleCreateInitiative = () => {
    console.log("Creating a new initiative");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };



  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };




  return (
    <div className={styles.container}>
      <Head>
        <title>Volunteer View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HamburgerMenu/>

      <div
        className={`${styles.main} ${isSidebarOpen ? styles.mainShrink : ""}`}
      >
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Volunteer Opportunities</span>
        </h1>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
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
                    <span className={styles.locationText}>
                      {project.location}
                    </span>
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
                    className={styles.volunteerBar2}
                    style={{
                      width: `${
                        (project.volunteerJoined / project.volunteerNeeded) *
                        100
                      }%`,
                    }}
                  />
                  
                </div>
                
                <span className={styles.volunteerAmount}>
                    {project.volunteerJoined} / {project.volunteerNeeded}{" "}
                    volunteers
                </span>
                
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
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <button className={styles.sidebarToggle} onClick={toggleSidebar}>
          <svg
            className={`${styles.sidebarToggleIcon} ${
              isSidebarOpen ? "" : styles.sidebarToggleIconRotated
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

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="M8.59 16.34l5.3-5.3a.996.996 0 0 0 0-1.41l-5.3-5.3a.996.996 0 1 0-1.41 1.41L11.17 12l-3.89 3.89a.996.996 0 1 0 1.41 1.41z"/>
</svg> */}
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

          {/* <div className={styles.contributionGraph}>
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
          </div> */}

         

          <GitHubCalendar
            username="grubersjoe"
            transformData={selectLastHalfYear}
            hideColorLegend
            colorScheme = "dark"
            
            labels={{
              totalCount: "{{count}} contributions in the last half year",
            }}
          />

          

         


        </div>
      </div>

      {/* <div className={styles.createInitiative}>
        <button
          className={styles.createButton}
          onClick={handleCreateInitiative}
        >
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
      </div> */}
    </div>
  );
};

export default VolunteerView; 