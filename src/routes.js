import { Preview } from "./routes/Preview";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
];

export default routes;
