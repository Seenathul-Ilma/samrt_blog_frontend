import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import Header from './pages/Header'
import Layout from "../components/Layout";
import { useAuth } from "../context/authContext";

const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Default = lazy(() => import("../pages/Welcome"));
const Home = lazy(() => import("../pages/Home"));
const Post = lazy(() => import("../pages/Post"));
const MyPost = lazy(() => import("../pages/MyPost"));


type RequireAuthTypes = { children: ReactNode; roles?: string[] }

// another component (can create multiple components)
//const RequireAuth = ({children}: {children: ReactNode}) => {
const RequireAuth = ({ children, roles }: RequireAuthTypes) => {   // children - default prop
  const { user, loading } = useAuth()

  if(loading) {
      return <div>User Loading..!</div>
  }

  if(!user) {
    return <Navigate to="/login" replace/>
  }

  // user null da kiyl check krl vr vunata passe (if user not null)
  if(roles && !roles.some((role)=> user.roles?.includes(role))) {
    return (
      <div>
        <h2 className="text-center py-20">Access Denied..!</h2>
        <p className="text-xl font-bold mb-2">You don't have permission to view this page.</p>
      </div>
    )
  }

  return <>{children}</>

}

export default function Router() {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Suspense fallback={<div>Loading...</div>}>

        <Routes>

          
          <Route path="/" element={<Default />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/" element={<Layout />}>  
            <Route path="home" element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
            <Route path="post" element={
              <RequireAuth>
                <Post />
              </RequireAuth>
            } />
          </Route> */}

          <Route element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }>
            {/* <Route index element={<Default />} /> */}

            {/* <Route path="home" element={<Home />} />
            <Route path="post" element={<Post />} /> */}
            
            {/* <Route path="home" element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
            <Route path="post" element={
              <RequireAuth>
                <Post />
              </RequireAuth>
            } /> */}

            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route 
            path="/my-post" 
            element={
              <RequireAuth roles={["ADMIN", "AUTHOR"]}>
                <MyPost />
              </RequireAuth>
            } />

          </Route>

          {/* <Route path="/" element={<Default />} />
              <Route path="home" element={<Home />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
