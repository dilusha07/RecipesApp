import {Routes, Route, Outlet} from 'react-router-dom'
import Footer from './components/Footer';
import RecipeDetails from './pages/RecipeDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';

// function Layout(){
//   return (
//     <>
//       <Navbar/>
//         <Outlet/>
//       <Footer/>
//     </>
//   )
// }
function App() {
  return (
    <div className='bg-black'>
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='recipes/:id' element={<RecipeDetails/>} />
        </Route>
      </Routes> */}
      <Home/>
    </div>
  );
}

export default App;
