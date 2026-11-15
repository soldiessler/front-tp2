import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Archive from './pages/Archive'
import Exploration from './pages/Exploration'
import Tree from './pages/Tree'
import Logbook from './pages/Logbook'

export default function App() {
  return <Routes><Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/perfil" element={<Profile/>}/>
    <Route path="/archivo" element={<Archive/>}/>
    <Route path="/exploracion" element={<Exploration/>}/>
    <Route path="/sistema" element={<Tree/>}/>
    <Route path="/bitacora" element={<Logbook/>}/>
    <Route path="*" element={<Home/>}/>
  </Route></Routes>
}
