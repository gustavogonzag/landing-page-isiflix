import './App.css'
import Footer from './Pages/Footer/Footer'
import NavbarMenu from './Pages/NavbarMenu/NavbarMenu'
import AppRoutes from './routes/Router'

function App() {

  return (
    <div className="App w-full bg-[url('./background-hero-session.png')] bg-no-repeat bg-contain ">
      <NavbarMenu />
      <AppRoutes />
      <div className="w-full border-t border-gray-400/50 mt-20"></div>
      <Footer />
    </div>
  )
}

export default App
