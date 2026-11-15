import { useMemo, useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, Filter } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { logbook } from '../data/logbook'

const categories=['Todas',...new Set(logbook.map(x=>x.category))]
function Entry({entry}) {
  const [open,setOpen]=useState(false)
  return <article className="log-entry"><div className="log-date">{entry.date}</div><div className="log-marker"/><div className="log-body"><div className="log-entry-top"><span className="eyebrow">{entry.category}</span><span className="record-id">LOG / {String(entry.id).padStart(2,'0')}</span></div><button className="log-title" onClick={()=>setOpen(!open)}>{entry.title}{open?<ChevronUp size={17}/>:<ChevronDown size={17}/>}</button>{open&&<p>{entry.detail}</p>}</div></article>
}
export default function Logbook() {
  const [category,setCategory]=useState('Todas')
  const entries=useMemo(()=>logbook.filter(e=>category==='Todas'||e.category===category),[category])
  return <div><SectionTitle eyebrow="06 — REGISTRO DE MISIÓN" title="Bitácora" description="Decisiones, avances y dificultades del proceso." code="CAPTAIN'S LOG"/>
    <div className="log-toolbar"><span><BookOpen size={17}/> {entries.length} REGISTROS</span><label><Filter size={15}/><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></label></div>
    <div className="timeline">{entries.map(e=><Entry key={e.id} entry={e}/>)}</div>
    {!entries.length&&<p className="empty-note">No hay registros en esta categoría.</p>}
    <p className="data-note">BITÁCORA DE DESARROLLO · REGISTROS EDITABLES EN SRC/DATA/LOGBOOK.JS.</p>
  </div>
}
