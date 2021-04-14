import { FaFacebookSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
export const social = [
  {
    name: "Github",
    link: "https://github.com/NewbieWebDev",
    icon: <AiFillGithub />,
    nickname: "NewbieWebDev",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MicheleMerola15",
    icon: <FaTwitterSquare />,
    color: "rgb(29,161,242)",
    nickname: "@MicheleMerola15",
  },
  {
    name: "Linkdin",
    link: "https://www.linkedin.com/in/michele-merola/",
    icon: <AiFillLinkedin />,
    color: "rgb(10,102,194)",
    nickname: "Michele Merola",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/merolasalvatore",
    icon: <FaFacebookSquare />,
    color: "rgb(7,120,233)",
    nickname: "Miky",
  },
];

let desc = `Lorem Ipsum is simply dummy text of the printing and typesetting 
  industry. Lorem Ipsum has been the industry's standard dummy text ever 
  since the 1500s, when an unknown printer took a galley of type and s
  crambled it to make a type specimen book. It has survived not 
  only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged. It was popularised in the 1960s with 
  the release of Letraset sheets containing Lorem`;

export const about = {
  description: desc,

  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
      "React/Redux/ContextApi",
      "Gatsby",
      "Nextjs",
      "Styled Component",
      "Deployment Services",
    ],
    backend: ["Node", "Express", "GraphicQL", "MangoDB (Atlas)"],
  },
};

export const contact = [
  {
    phone: "0423737609",
    icon: <AiFillPhone />,
    color: "green",
  },
  {
    email: "mike88.merola@gmail.com",
    icon: <MdEmail />,
    color: "white",
  },
  {
    address: "Rivervale WA",
    link:
      "https://www.google.com.au/maps/place/Rivervale+WA+6103/@-31.9614391,115.9049071,15z/data=!3m1!4b1!4m5!3m4!1s0x2a32bbbcf6520317:0x504f0b535df4fe0!8m2!3d-31.961762!4d115.9139219",
    icon: <ImAddressBook />,
    color: "red",
  },
];
