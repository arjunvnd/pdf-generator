import { Preview } from "./routes/Preview";
import { Home } from "./routes/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
];

export default routes;
