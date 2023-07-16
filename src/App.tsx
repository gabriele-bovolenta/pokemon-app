import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPokemonPage from "./Pages/DetailPage/DetailPage";
import Navbar from "./Components/Navbar/navbar.component";
import SearchPokemonPage from "./Pages/SearchPokemonPage/SearchPokemonPage";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: 
    <>
      <Navbar></Navbar>
      <HomePage /> 
    </>
  },
  { 
    path: "/home", 
    element:
    <>
      <Navbar></Navbar>
      <HomePage /> 
    </>
  },
  {
    path: "/pokemon",
    element: (
      <>
        <Navbar></Navbar>
        <SearchPokemonPage />
      </>
    ),
  },
  {
    path: "/pokemon/:pokemon",
    element: (
      <>
        <Navbar></Navbar>
        <DetailPokemonPage searchIdType={false} />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
