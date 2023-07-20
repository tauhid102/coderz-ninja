// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import Layouts from "./Component/Layouts/Layouts";
function App() {
//  const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layouts/>
//   }
//  ])
  return (
    <div>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Layouts/>
    </div>
  );
}

export default App;
