
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutMe from './component/about me/AboutMe';
import Blogs from './component/blogs/Blogs';
import ProjectsDetails from './component/Projects/ProjectsDetails';
import Main from './Main/Main';
import Home from './Pages/pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/blogs',
          element : <Blogs/>
        },
        {
          path : '/aboutme',
          element : <AboutMe/>
        },
        {
          path : '/projects/:id',
          element : <ProjectsDetails/>,
          loader : ({params}) => fetch(`https://hasan-s-protfolio-server.vercel.app/projects/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className=" mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
