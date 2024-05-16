// App.tsx
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentsProvider } from "./context/comment/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <ProjectsProvider>
        <MembersProvider>
          <CommentsProvider>
            <RouterProvider router={router} />
          </CommentsProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
}

export default App;
