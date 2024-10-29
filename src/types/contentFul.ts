import { Entry, EntrySkeletonType } from "contentful";

// Define Main content type
interface MainFields {
  name: string;
  shortDesc: string;
  titles: string[];
  heroImage: string;
  techStackImages: string[];
}

interface Main extends EntrySkeletonType {
  fields: MainFields;
  contentTypeId: "main";
}

// Define About content type
interface AboutFields {
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  callUrl: string;
  resumeUrl: string;
}

interface About extends EntrySkeletonType {
  fields: AboutFields;
  contentTypeId: "about";
}

// Define Socials content type
interface SocialsFields {
  icon: string;
  link: string;
}

interface Socials extends EntrySkeletonType {
  fields: SocialsFields;
  contentTypeId: "socials";
}

// Define Skills content type
interface SkillsFields {
  name: string;
  image: string;
  category: string;
}

interface Skills extends EntrySkeletonType {
  fields: SkillsFields;
  contentTypeId: "skills";
}

// Define Projects content type
interface ProjectFields {
  name: string;
  techstack: string;
  category: string;
  image: string;
  code: string;
  video: string;
  visit: string;
}

interface Project extends EntrySkeletonType {
  fields: ProjectFields;
  contentTypeId: "projects";
}

// Define Educations content type
interface EducationFields {
  institute: string;
  degree: string;
  duration: string;
  desc: string[];
}

interface Education extends EntrySkeletonType {
  fields: EducationFields;
  contentTypeId: "educations";
}

// Define Experiences content type
interface ExperienceFields {
  company: string;
  position: string;
  duration: string;
  desc: string[];
}

interface Experience extends EntrySkeletonType {
  fields: ExperienceFields;
  contentTypeId: "experiences";
}

export type { MainFields, Main, AboutFields, About, SocialsFields, Socials, SkillsFields, Skills, ProjectFields, Project, EducationFields, Education, ExperienceFields, Experience };