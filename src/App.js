import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/movie/:id",
    element: <Detail />,
  },
  {
    path: "/",
    element: <Home />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
