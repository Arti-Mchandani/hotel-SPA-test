import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Home, HotelDetail } from './Component/Pages/ExportPages';
import { Layout } from './Component/Layout';

// Using Router to navigate to different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/hotels" replace />, // Redirect '/' to /hotels  
  },
  {
    path: "/hotels",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "hotels/:id",
    element: (  // Url for selected hotel detail
      <Layout>
        <HotelDetail />  
      </Layout>
    ),

  },
  {
    path: "*", // Catch-all route for error handling
    element: <Navigate to="/hotels" replace />, 
  },

]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;