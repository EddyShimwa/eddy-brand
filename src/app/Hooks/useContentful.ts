import { client } from "../config/contentfulConfig";
import { Main, MainFields } from "@/types/contentFul";

// Fetch Main data
export const fetchMainData = async (): Promise<MainFields | undefined> => {
    try {
      const response = await client.getEntries<Main>({
        content_type: "main",
      });
      if (response.items.length > 0) {
        return response.items[0].fields;
      }
    } catch (error) {
      console.error("Error fetching Main data:", error);
    }
  };
  
  // Fetch About data
//   export const fetchAboutData = async (): Promise<AboutFields | undefined> => {
//     try {
//       const response = await client.getEntries<About>({
//         content_type: "about",
//       });
//       if (response.items.length > 0) {
//         return response.items[0].fields;
//       }
//     } catch (error) {
//       console.error("Error fetching About data:", error);
//     }
//   };
  
//   // Fetch Socials data
//   export const fetchSocialsData = async (): Promise<SocialsFields[]> => {
//     try {
//       const response = await client.getEntries<Socials>({
//         content_type: "socials",
//       });
//       return response.items.map(item => item.fields);
//     } catch (error) {
//       console.error("Error fetching Socials data:", error);
//       return [];
//     }
//   };
  
//   // Fetch Skills data
//   export const fetchSkillsData = async (): Promise<SkillsFields[]> => {
//     try {
//       const response = await client.getEntries<Skills>({
//         content_type: "skills",
//       });
//       return response.items.map(item => item.fields);
//     } catch (error) {
//       console.error("Error fetching Skills data:", error);
//       return [];
//     }
//   };
  
//   // Fetch Projects data
//   export const fetchProjectsData = async (): Promise<ProjectFields[]> => {
//     try {
//       const response = await client.getEntries<Project>({
//         content_type: "projects",
//       });
//       return response.items.map(item => item.fields);
//     } catch (error) {
//       console.error("Error fetching Projects data:", error);
//       return [];
//     }
//   };
  
//   // Fetch Education data
//   export const fetchEducationData = async (): Promise<EducationFields[]> => {
//     try {
//       const response = await client.getEntries<Education>({
//         content_type: "educations",
//       });
//       return response.items.map(item => item.fields);
//     } catch (error) {
//       console.error("Error fetching Education data:", error);
//       return [];
//     }
//   };
  
//   // Fetch Experience data
//   export const fetchExperienceData = async (): Promise<ExperienceFields[]> => {
//     try {
//       const response = await client.getEntries<Experience>({
//         content_type: "experiences",
//       });
//       return response.items.map(item => item.fields);
//     } catch (error) {
//       console.error("Error fetching Experiences data:", error);
//       return [];
//     }
//   };