import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import campusImage from "../../imports/Image_-1.png";
import campusMobilitySystemImg from "../../imports/Screenshot_2026-05-01_at_23.17.48.png";
import dataVizCampaignImg from "../../imports/Screenshot_2026-05-01_at_23.22.44.png";
import isotope8Img from "../../imports/isotope-8-cover.png";
import BreakoutPlusCover from "./BreakoutPlusCover";
import ProjectCard from "./portfolio/ProjectCard";

export default function ProjectsListing() {
  const projects = [
    {
      id: "breakout-plus",
      title: "Breakout Plus",
      description: "Arcade Game with Dynamic Power-Up System",
      tools: ["Game Development", "System Design", "Interaction"],
      customCover: true
    },
    {
      id: "isotope-8",
      title: "The Truth Game: Isotope-8",
      description: "A survival horror game focused on school exploration, story progression, and environmental tension.",
      tools: ["Game Design", "Level Design", "Story"],
      imageSrc: isotope8Img
    },
    {
      id: "campus-transportation",
      title: "Campus Mobility & Bike Lane Safety Redesign",
      description: "UX research and interaction design study addressing campus transportation infrastructure and micromobility safety.",
      tools: ["UX Research", "Systems Design", "Interaction Design"],
      imageSrc: campusImage
    },
    {
      id: "campus-mobility-system",
      title: "Campus Mobility Navigation System",
      description: "A digital intervention designed based on research insights to improve safety, navigation clarity, and interaction between pedestrians and riders.",
      tools: ["Figma", "UX Design", "System Design"],
      imageSrc: campusMobilitySystemImg
    },
    {
      id: "data-viz-campaign",
      title: "Data Visualization Major Awareness Campaign",
      description: "A multi-platform campaign using website, video, and poster to increase awareness of the Data Visualization major at Purdue University.",
      tools: ["Campaign Design", "UX", "Visual Communication"],
      imageSrc: dataVizCampaignImg
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl text-white mb-3">Projects</h1>
        <p className="text-slate-400">
          Completed works and polished game development projects
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tools={project.tools}
            imageSrc={project.imageSrc}
            customCover={project.customCover ? <BreakoutPlusCover /> : undefined}
          />
        ))}
      </div>
    </div>
  );
}