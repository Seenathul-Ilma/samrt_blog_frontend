import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function Header() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <header className='bg-blue-500 text-white justify-between items-center'>
      <div className='flex space-x-4'>
        {/* <Link to="/">Welcome</Link> */}
        <Link to="/home" className='hover:underline'>Home</Link>
        <Link to="/post" className='hover:underline'>Post</Link>
        {(user.roles?.includes("ADMIN") || user.roles?.includes("AUTHOR")) && (
          <Link to="/my-post" className='hover:underline'>My Post</Link>
        )}  
      </div>
      <button onClick={handleLogin}>Logout</button>
    </header>
  )
  /* return (
    <nav 
        style={{
            display: "flex",
            justifyContent: "space-around"
        }}
    >
        
        <Link to="/">Welcome</Link>
        <Link to="/home">Home</Link>
        <Link to="/post">Post</Link>
    </nav>
  ) */
}
