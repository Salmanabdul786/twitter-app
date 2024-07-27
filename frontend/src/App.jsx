import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Sidebar from "./components/common/SideBar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

    function App() {
      return (
        
        <div className='flex max-w-6xl mx-auto'>
        <Sidebar/>
          <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/signup'  element={<Signup />} />
            <Route path='/login'  element={<Login />} />
            <Route path='/notifications'  element={<NotificationPage />} />
            <Route path='/profile/:username'  element={<ProfilePage />} />


          </Routes>
          <RightPanel/>
        </div>
        
      );
    }

export default App
