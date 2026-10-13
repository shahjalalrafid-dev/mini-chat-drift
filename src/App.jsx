
import './App.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Message from './pages/Message';

import Settings from './pages/Settings';
import RootLayout from './components/RootLayout';
import Notification from './pages/Notification';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<RootLayout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="sidebar" element={<Sidebar />}></Route>
        <Route path="message" element={<Message />}></Route>
        <Route path="notification" element={<Notification />}></Route>
        
        <Route path="settings" element={<Settings />}></Route>
      </Route>


    </>


  )
);






function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
