export interface Content {
  en: LocaleContent;
  es: LocaleContent;
  ['pt-br']: LocaleContent;
}

export interface LocaleContent {
  hero: HeroContent;
  about: AboutContent;
  projects: ProjectsContent;
  footer: string;
}

export interface HeroContent {
  button: string;
  greeting: string;
  heading: string;
  availability: string;
  location: string;
}

export interface AboutContent {
  experience: {
    heading: string;
    company1: CompanyDetail;
    company2: CompanyDetail;
    company3: CompanyDetail;
  };
  skills: SkillsContent;
  stacks: StacksContent;
  connect: ConnectContent;
}

export interface CompanyDetail {
  title: string;
  description: string;
  date: string;
}

export interface SkillsContent {
  heading: string;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
}

export interface StacksContent {
  heading: string;
  tagline: string;
  stack1: string;
  stack2: string;
  stack3: string;
  stack4: string;
  stack5: string;
}

export interface ConnectContent {
  linkedin: string;
  github: string;
  discord: string;
  telegram: string;
  footer: string;
  cta: string;
  email: string;
}

export interface ProjectsContent {
  heading: string;
  tagline: string;
  projects: ProjectDetail[];
}

export interface ProjectDetail {
  title: string;
  description: string;
  link: string;
}
