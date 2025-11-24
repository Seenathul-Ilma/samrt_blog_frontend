import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-500'>
        <Header />

        <main>
            <Outlet />           {/* Meka vitharai dynamic. meka erenna anith okkoma fixed. */}
        </main>
    </div>
  )
}

// to make responsive
// above 768px --> desktop
// below 768px --> mobile