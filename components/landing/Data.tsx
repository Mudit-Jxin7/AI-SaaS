import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "@/public/img/benefit-one.webp";
import benefitTwoImg from "@/public/img/benefit-two.webp";

const benefitOne = {
  title: "Enhanced Productivity",
  desc: "Simplify complex editing tasks with AI-powered automation, reducing manual effort and saving time.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Faster Turnaround",
      desc: "Accelerate project timelines by swiftly processing edits, enabling quicker delivery of high-quality images to clients.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Collaborative Workflows",
      desc: "Facilitate seamless collaboration among team members with cloud-based editing capabilities, enabling real-time sharing and feedback for smoother project workflows.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Batch Processing",
      desc: " Optimize efficiency by applying edits to multiple images simultaneously, allowing users to handle large volumes of images with ease and consistency.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Advanced Creativity",
  desc: " Receive personalized recommendations and automated enhancements based on AI algorithms, fostering creative exploration and innovation.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Precision Editing",
      desc: "Achieve pixel-perfect results with advanced AI tools for precise adjustments, empowering users to bring their artistic visions to life effortlessly.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Customizable AI Models:",
      desc: "Tailor the AI algorithms to suit specific editing requirements and stylistic preferences, empowering users to customize their editing experience for unique creative outcomes.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Accessible Learning Resources",
      desc: "Provide users with educational materials and tutorials on AI-powered editing techniques, empowering them to expand their skillset and unlock new creative possibilities.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
