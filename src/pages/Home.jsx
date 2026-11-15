import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Compass, Radio, Shield, Sparkles } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const facts = [{n:'24',label:'REGISTROS DE NAVES'},{n:'06',label:'SECCIONES'},{n:'01',label:'OFICIAL A BORDO'}]
export default function Home() {
  return <div className="home-page">
    <div className="hero">
      <div className="hero-grid"/>
      <div className="hero-content">
        <div className="hero-kicker"><span className="status-dot"/> TRANSMISIÓN PRIORITARIA · CANAL 01</div>
        <div className="hero-title">EL ESPACIO.<br/><em>LA ÚLTIMA</em><br/>FRONTERA.</div>
        <p className="hero-copy">Diario de exploración de una oficial de la Flota Estelar. Un pequeño archivo sobre tecnología, mundos y curiosidad.</p>
        <div className="hero-actions"><Link className="btn-primary" to="/archivo">Explorar archivo <ArrowUpRight size={16}/></Link><Link className="text-link" to="/perfil">Conocer a la oficial <ArrowRight size={15}/></Link></div>
      </div>
      <div className="hero-orbit"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="planet"><span/></div><div className="orbit-label label-a">SECTOR 001</div><div className="orbit-label label-b">EXPLORACIÓN ACTIVA</div></div>
      <div className="hero-index">01 <span>/</span> 06</div>
    </div>
    <div className="stat-strip">{facts.map(f=><div className="stat" key={f.label}><strong>{f.n}</strong><span>{f.label}</span></div>)}</div>
    <section className="home-intro">
      <div><span className="eyebrow">01 — MISIÓN</span><h2>Conocer para<br/><em>comprender.</em></h2></div>
      <div className="intro-right"><p>La exploración empieza con una pregunta. Este espacio reúne perfiles, registros y recursos para recorrer el universo de Star Trek desde una mirada personal.</p><Link className="inline-link" to="/bitacora">Leer la bitácora <ArrowRight size={15}/></Link></div>
    </section>
    <div className="quick-grid">
      <Link to="/perfil" className="quick-card"><div className="quick-icon"><Shield/></div><span className="eyebrow">PERSONAL</span><h3>Oficial a bordo</h3><p>Perfil, habilidades e intereses.</p><ArrowUpRight className="quick-arrow"/></Link>
      <Link to="/archivo" className="quick-card"><div className="quick-icon"><Compass/></div><span className="eyebrow">CATÁLOGO</span><h3>Archivo estelar</h3><p>24 naves y facciones registradas.</p><ArrowUpRight className="quick-arrow"/></Link>
      <Link to="/exploracion" className="quick-card"><div className="quick-icon"><Sparkles/></div><span className="eyebrow">DATOS EN VIVO</span><h3>Exploración</h3><p>Información de cuerpos celestes.</p><ArrowUpRight className="quick-arrow"/></Link>
    </div>
    <div className="mission-note"><Radio size={17}/><span>REGISTRO DE MISIÓN</span><p>“Allí afuera, esperando ser descubiertas, hay nuevas posibilidades.”</p><small>— CUADERNO DE A BORDO</small></div>
  </div>
}
