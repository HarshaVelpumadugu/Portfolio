import QuickBidImg from "../../assets/QuickBid-img.png";
import ChatAppImg from "../../assets/ChatApp-img.png";
import PortfolioImg from "../../assets/portfolio-img.png";

export const ProjectsData = [
  {
    title: "QuickBid",
    img: QuickBidImg,
    description:
      "QuickBid is a dynamic online Auction Platform where users can create and join live Auctions, place real-time bids, and effortlessly modify their auction items.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://quickbid-an-online-bidding-platform-2.onrender.com/",
    githubLink:
      "https://github.com/HarshaVelpumadugu/QuickBid---An-online-Bidding-platform",
  },
  {
    title: "ChatApplication",
    img: ChatAppImg,
    description:
      "Real Time Chat Application built with MERN Stack, featuring user Authentication with JWT, online Status indicators and Search Functionality. Socket.io is used for Real-Time Communication.",
    techStack: ["React", "Socket.io", "Express", "Node.js", "MongoDB"],
    liveLink: "https://messenger-frontend-kazz.onrender.com/login",
    githubLink: "https://github.com/HarshaVelpumadugu/Messenger",
  },
  {
    title: "Portfolio",
    img: PortfolioImg,
    description:
      "A modern and interactive personal portfolio built with React and powered by Framer Motion for smooth, eye-catching animations. The portfolio showcases projects, skills, and experience with a clean and responsive layout",
    techStack: ["React", "Framer-Motion"],
    liveLink: "https://portfolio-6p91.onrender.com",
    githubLink: "https://github.com/HarshaVelpumadugu/Portfolio",
  },
];
