import { useMemo, useState } from 'react'
import { Search, RotateCcw, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react'
import ships from '../data/ships.json'
import SectionTitle from '../components/SectionTitle'

const factions = ['Todas', ...new Set(ships.map(s=>s.faction))]
function ShipCard({ship}) {
  const [open,setOpen] = useState(false)
  return <article className={`ship-card ${open?'expanded':''}`}>
    <div className="ship-symbol"><span className="ship-orbit"/><span className="ship-core">✦</span></div>
    <div className="ship-content"><div className="ship-top"><span className="eyebrow">{ship.faction}</span><span className="record-id">#{String(ship.id).padStart(3,'0')}</span></div>
      <h3>{ship.name}</h3><p className="ship-class">{ship.class} · {ship.registry}</p>
      {open && <div className="ship-extra"><p>{ship.description}</p><span>AÑO DE REGISTRO · {ship.year}</span><span>ESTADO · {ship.status}</span></div>}
      <button className="expand-link" onClick={()=>setOpen(!open)}>{open?'Cerrar ficha':'Ver ficha'} {open?<ChevronUp size={14}/>:<ChevronDown size={14}/>}</button>
    </div>
  </article>
}
export default function Archive() {
  const [query,setQuery] = useState('')
  const [faction,setFaction] = useState('Todas')
  const filtered = useMemo(()=>ships.filter(s=>
    [s.name,s.registry,s.class,s.faction,s.description].join(' ').toLowerCase().includes(query.toLowerCase()) &&
    (faction==='Todas'||s.faction===faction)
  ),[query,faction])
  const reset=()=>{setQuery('');setFaction('Todas')}
  return <div>
    <SectionTitle eyebrow="03 — BASE DE DATOS LOCAL" title="Archivo estelar" description="Registro de naves, clases y civilizaciones del universo." code="DATABASE / 024"/>
    <div className="archive-toolbar">
      <label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar nave, clase o facción..." aria-label="Buscar en el archivo"/></label>
      <label className="filter-box"><span>Facción</span><select value={faction} onChange={e=>setFaction(e.target.value)}>{factions.map(f=><option key={f}>{f}</option>)}</select></label>
      <button className="reset-btn" onClick={reset}><RotateCcw size={15}/> Restablecer</button>
    </div>
    <div className="results-line"><span>{filtered.length} REGISTROS ENCONTRADOS</span><span>ORDEN · ID ASCENDENTE</span></div>
    {filtered.length ? <div className="ship-grid">{filtered.map(s=><ShipCard key={s.id} ship={s}/>)}</div> : <div className="empty-state"><Search size={25}/><h3>Sin coincidencias</h3><p>Probá con otro término o restablecé los filtros.</p><button className="btn-secondary" onClick={reset}>Ver todos los registros</button></div>}
    <p className="data-note">FUENTE · ARCHIVO LOCAL JSON · DATOS DE REFERENCIA DEL UNIVERSO FICTICIO STAR TREK.</p>
  </div>
}
