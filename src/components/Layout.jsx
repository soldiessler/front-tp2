import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import { ChevronRight } from 'lucide-react'

const labels = {'/':'Puente','/perfil':'Oficial','/archivo':'Archivo estelar','/exploracion':'Exploración','/sistema':'Sistema','/bitacora':'Bitácora'}
export default function Layout() {
  const location = useLocation()
  return <div className="app-shell">
    <Sidebar/>
    <main className="main-area">
      <header className="topbar">
        <div className="breadcrumb"><span>STARFLEET</span><ChevronRight size={13}/><strong>{labels[location.pathname] || 'Registro'}</strong></div>
        <div className="top-meta"><span className="status-dot"/> SISTEMA OPERATIVO <span className="top-divider"/> FECHA ESTELAR 2026.11</div>
      </header>
      <div className="page-wrap"><Outlet/></div>
      <footer className="footer"><span>STARFLEET PERSONNEL DATABASE</span><span>© 2026 · PROYECTO ACADÉMICO INDEPENDIENTE</span></footer>
    </main>
  </div>
}
