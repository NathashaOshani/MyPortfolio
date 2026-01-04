import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MicrocontrollerProject from "./pages/MicrocontrollerProject";
import WebDevelopmentProjects from "./pages/WebDevelopmentProjects";
import FoodDeliveryProject from "./pages/FoodDeliveryProject";
import UIUXProjects from "./pages/UIUXProjects";
import ThreeDCarouselProject from "./pages/ThreeDCarouselProject";
import TodoProject from "./pages/TodoProject";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microcontroller-project" element={<MicrocontrollerProject />} />
        <Route path="/web-development-projects" element={<WebDevelopmentProjects />} />
        <Route path="/food-delivery-project" element={<FoodDeliveryProject />} />
        <Route path="/ui-ux-projects" element={<UIUXProjects />} />
        <Route path="/uiux-3d-carousel" element={<ThreeDCarouselProject />} />
        <Route path="/todo-project" element={<TodoProject />} />
      </Routes>
    </div>
  );
}

export default App;
