import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./Component/Layouts/Layouts";
import Career from "./Component/Career/Career";
function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Layouts/>
  },
  {
    path:'career',
    element:<Career/>
  },
 ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Layouts/> */}
    </div>
  );
}

export default App;
