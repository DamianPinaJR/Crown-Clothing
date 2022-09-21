// Import styles
import "./App.css";
// Import from libraries
import { Routes, Route } from "react-router-dom";
// Import from pages/routes
import Home from "./routes/home/home.component"
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import NotFound from "./routes/not-found/not-found.component";
//Import from components

// Main App structure
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
// Export App by default
export default App;
