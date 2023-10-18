interface NavLink {
  id: number;
  title: string;
  link: string;
}

interface ResumeData {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  technology: string[];
  link?: string;
}
export const navLinksData: NavLink[] = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "Resume",
    link: "resume",
  },
];

export const resumeData: ResumeData[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Pixability",
    location: "Boston, MA",
    date: "March 2022 - June 2023",
    description:
      "Developed UI for Contextual Segment List Builder",
    technology: ["React", "Typescript", "Node.js", "Python", "AWS"],
  },
{
    id: 2,
    title: "UI Engineer",
    company: "Accenture",
    location: "San Jose, CA",
    date: "March 2019 - Dec 2021",
    description:
      "Developed stuff",
    technology: ["Angular", "Typescript"],
  },
{
    id: 3,
    title: "UI Engineer",
    company: "Open Source - self employed",
    location: "San Jose, CA",
    date: "May 2018 - Dec 2021",
    description:
      "Developed Nodejs.dev website",
    technology: ["React", "Typescript"],
    link: "https://nodejs.dev",
  },
];
