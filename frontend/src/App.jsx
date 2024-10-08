import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Sidebar from "./components/common/SideBar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";

    function App() {
      const { data: authUser, isLoading } = useQuery({
        queryKey: ["authUser"],//call it and use in other component
        queryFn: async () => {
          try {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            if (data.error) return null;
            if (!res.ok) {
              throw new Error(data.error || "Something went wrong");
            }
            console.log("authUser is here:", data);
            return data;
          } catch (error) {
            throw new Error(error);
          }
        },
      });
    
      if (isLoading) {
        return (
          <div className='h-screen flex justify-center items-center'>
            <LoadingSpinner size='lg' />
          </div>
        );
      }
    
      return (
        
        <div className='flex max-w-6xl mx-auto'>
       {authUser && <Sidebar />}
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
				<Route path='/login' element={!authUser ? <Login /> : <Navigate to='/' />} />
				<Route path='/signup' element={!authUser ? <Signup /> : <Navigate to='/' />} />
				<Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
				<Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
			</Routes>
			{authUser && <RightPanel />}
			<Toaster />
      </div>
        
      );
    }

export default App
