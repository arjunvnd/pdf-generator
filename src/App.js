import { createHashRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";
import { BanksFormOneProvider } from "./context/BanksFormOne";

const router = createHashRouter(routes);
const App = () => {
  return (
    <BanksFormOneProvider>
      <RouterProvider router={router} />
    </BanksFormOneProvider>
  );
};

export default App;
