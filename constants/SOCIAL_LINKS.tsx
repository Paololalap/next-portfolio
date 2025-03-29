import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconLink,
  IconMail,
} from "@tabler/icons-react";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/paololalap",
    icon: <IconBrandGithub />,
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/paolo-lalap-0196aa212/",
    icon: <IconBrandLinkedin />,
    text: "LinkedIn",
  },
  {
    href: "mailto:paolomorales1502@gmail.com",
    icon: <IconMail />,
    text: "Email",
  },
  {
    href: "https://www.upwork.com/freelancers/~01a06479bb30b298a9",
    icon: <IconBrandUpwork />,
    text: "Upwork",
  },

  {
    href: "https://www.onlinejobs.ph/jobseekers/info/1869295",
    icon: <IconLink/>,
    text: "OnlineJobs",
  },
];

export { SOCIAL_LINKS };
