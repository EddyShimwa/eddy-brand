import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
import { fetchMainData } from "./Hooks/useContentful";
// import { fetchMainData, fetchAboutData, fetchSocialsData, fetchSkillsData, fetchProjectsData, fetchEducationData, fetchExperienceData } from './contentfulFetch';

async function getData() {
  try {
    // Fetch data from Contentful
    const mainData = await fetchMainData();
    // const aboutData = await fetchAboutData();
    // const socialsData = await fetchSocialsData();
    // const skillsData = await fetchSkillsData();
    // const projectsData = await fetchProjectsData();
    // const educationData = await fetchEducationData();
    // const experienceData = await fetchExperienceData();

    // Combine the fetched data into a single object
    const data = {
      main: mainData,
      // about: aboutData,
      // socials: socialsData,
      // skills: skillsData,
      // projects: projectsData,
      // educations: educationData,
      // experiences: experienceData,
    };

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function page() {
  const data = await getData();

  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      )}
    </>
  );
}