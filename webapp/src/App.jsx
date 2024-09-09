import Header from './components/header'
import Footer from './components/footer'

import { Outlet } from 'react-router-dom'
export default function App() {

  return (
    <>
     <div>
      <Header/>
     </div>
     <div>
      <Outlet />
     </div>
     <Footer />
    </>
  )
}

