import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, ChevronUp, Star, Code2, Palette, Film } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Profile() {
  const [expanded, setExpanded] = useState('skills')
  const toggle = key => setExpanded(expanded === key ? '' : key)
  return <div>
    <SectionTitle eyebrow="02 — PERSONAL DE LA FLOTA" title="Oficial a bordo" description="Registro personal · División de exploración" code="PERSONNEL / 001"/>
    <div className="profile-layout">
      <section className="profile-card">
        <div className="profile-banner"><div className="banner-stars"/></div>
        <div className="profile-avatar">SD<span>★</span></div>
        <div className="profile-info"><span className="eyebrow">ENSIGN · HUMAN</span><h2>Sol Diessler</h2><p>Desarrollo · Diseño · Exploración</p>
          <a className="github-link" href="https://github.com/soldiessler" target="_blank" rel="noreferrer"><Github size={16}/> @soldiessler <ExternalLink size={13}/></a>
        </div>
        <div className="profile-meta"><div><span>DIVISIÓN</span><strong>Soporte</strong></div><div><span>BASE</span><strong>Buenos Aires, AR</strong></div><div><span>ESTADO</span><strong className="online">En servicio</strong></div></div>
      </section>
      <section className="profile-details">
        <div className="detail-heading"><span className="eyebrow">ARCHIVO PERSONAL</span><span className="mini-code">SD / 31</span></div>
        <h2>Crear, resolver,<br/><em>seguir explorando.</em></h2>
        <p className="body-copy">Perfil generalista con interés en diseño de interfaces, desarrollo web y narrativas audiovisuales.</p>
        <div className="accordion">
          <div className="accordion-item">
            <button onClick={()=>toggle('skills')}><span><Code2 size={17}/> Habilidades</span>{expanded==='skills'?<ChevronUp/>:<ChevronDown/>}</button>
            {expanded==='skills' && <div className="accordion-content"><div className="tag-list">{['React','JavaScript','TypeScript','Next.js','CSS','Figma','Node.js','SQL'].map(x=><span className="tag" key={x}>{x}</span>)}</div></div>}
          </div>
          <div className="accordion-item">
            <button onClick={()=>toggle('interests')}><span><Film size={17}/> Intereses</span>{expanded==='interests'?<ChevronUp/>:<ChevronDown/>}</button>
            {expanded==='interests' && <div className="accordion-content"><p>Animación, cine, videojuegos, música punk/rock, ciencia ficción, literatura y diseño de experiencias.</p></div>}
          </div>
          <div className="accordion-item">
            <button onClick={()=>toggle('approach')}><span><Palette size={17}/> Forma de trabajo</span>{expanded==='approach'?<ChevronUp/>:<ChevronDown/>}</button>
            {expanded==='approach' && <div className="accordion-content"><p>Creativa, curiosa y resolutiva. Investigar, prototipar, probar y ajustar.</p></div>}
          </div>
        </div>
        <a className="inline-link" href="https://github.com/soldiessler" target="_blank" rel="noreferrer">Ver repositorios en GitHub <ExternalLink size={14}/></a>
      </section>
    </div>
  </div>
}
