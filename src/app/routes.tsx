import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import ProjectsListing from "./components/ProjectsListing";
import ExercisesListing from "./components/ExercisesListing";
import ProjectTemplate from "./components/ProjectTemplate";
import ExerciseTemplate from "./components/ExerciseTemplate";
import CampusTransportationProject from "./components/CampusTransportationProject";
import CampusMobilitySystemDesign from "./components/CampusMobilitySystemDesign";
import DataVizCampaign from "./components/DataVizCampaign";
import BreakoutPlusProject from "./components/BreakoutPlusProjectNew";
import Isotope8Project from "./components/Isotope8Project";
import AD113DrawingExercise from "./components/AD113DrawingExercise";
import GDLabsExercise from "./components/GDLabsExercise";
import PythonLabsExercise from "./components/PythonLabsExercise";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: ProjectsListing },
      { path: "exercises", Component: ExercisesListing },

      { path: "project/breakout-plus", Component: BreakoutPlusProject },
      { path: "project/isotope-8", Component: Isotope8Project },
      { path: "project/campus-transportation", Component: CampusTransportationProject },
      { path: "project/campus-mobility-system", Component: CampusMobilitySystemDesign },
      { path: "project/data-viz-campaign", Component: DataVizCampaign },

      { path: "project/:id", Component: ProjectTemplate },
      { path: "exercise/:id", Component: ExerciseTemplate },

      { path: "exercise/ad113-drawing", Component:AD113DrawingExercise },
      { path: "exercise/:id", Component: ExerciseTemplate },

      { path: "exercise/gd-labs", Component: GDLabsExercise },
      { path: "exercise/:id", Component: ExerciseTemplate },

      { path: "exercise/python-labs", Component: PythonLabsExercise },
      { path: "exercise/:id", Component: ExerciseTemplate },
    ],
  },
]);