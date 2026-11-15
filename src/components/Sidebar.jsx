import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Orbit, House, UserRound, Database, Globe2, Network, BookOpen, Radio } from 'lucide-react'

const links = [
  { to: '/', label: 'Puente', icon: House, end: true },
  { to: '/perfil', label: 'Oficial', icon: UserRound },
  { to: '/archivo', label: 'Archivo estelar', icon: Database },
  { to: '/exploracion', label: 'Exploración', icon: Globe2 },
  { to: '/sistema', label: 'Sistema', icon: Network },
  { to: '/bitacora', label: 'Bitácora', icon: BookOpen },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return <>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
      {open ? <X size={20}/> : <Menu size={20}/>}
    </button>
    {open && <button className="scrim" aria-label="Cerrar menú" onClick={() => setOpen(false)} />}
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-mark"><Orbit size={23}/></div>
        <div><span className="eyebrow">PERSONAL LOG</span><strong>STARFLEET</strong></div>
      </div>
      <div className="ship-id"><span className="status-dot"/> USS SOL · NCC-2026</div>
      <div className="nav-label">NAVEGACIÓN</div>
      <nav>
        {links.map(({to,label,icon:Icon,end}) =>
          <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Icon size={17}/><span>{label}</span>{to === '/' && <span className="nav-live">●</span>}
          </NavLink>
        )}
      </nav>
      <div className="sidebar-bottom">
        <div className="signal"><Radio size={15}/><span>SEÑAL ESTABLE</span></div>
        <span className="tiny">FEDERACIÓN UNIDA DE PLANETAS</span>
        <span className="tiny">REGISTRO · 001 / 026</span>
      </div>
    </aside>
  </>
}
