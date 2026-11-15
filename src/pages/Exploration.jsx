import { useCallback, useEffect, useState } from 'react'
import { RefreshCw, Globe2, Orbit, ExternalLink } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Exploration() {
  const [bodies,setBodies] = useState([])
  const [status,setStatus] = useState('loading')
  const [updated,setUpdated] = useState('')
  const load = useCallback(async()=>{
    setStatus('loading')
    try {
      const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,true')
      if(!response.ok) throw new Error('No se pudo consultar el servicio.')
      const data = await response.json()
      setBodies((data.bodies || []).slice(0,12))
      setUpdated(new Date().toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'}))
      setStatus('success')
    } catch(e) {
      setStatus('error')
    }
  },[])
  useEffect(()=>{load()},[load])
  return <div>
    <SectionTitle eyebrow="04 — TELEMETRÍA EXTERNA" title="Exploración" description="Datos astronómicos consultados desde una API pública." code="LIVE DATA / API"/>
    <div className="api-banner"><div className="api-icon"><Globe2 size={24}/></div><div><span className="eyebrow">FUENTE DE DATOS</span><h3>Le Système Solaire</h3><p>Información de planetas y cuerpos del sistema solar. Consulta pública sin clave privada.</p><a href="https://api.le-systeme-solaire.net/" target="_blank" rel="noreferrer">Documentación de la API <ExternalLink size={13}/></a></div><button className="refresh-btn" onClick={load} disabled={status==='loading'}><RefreshCw size={15} className={status==='loading'?'spin':''}/> Actualizar</button></div>
    <div className="api-status"><span className={`status-dot ${status==='error'?'red':status==='loading'?'amber':''}`}/>{status==='loading'?'RECIBIENDO TRANSMISIÓN...':status==='error'?'ERROR DE CONEXIÓN':`DATOS ACTUALIZADOS · ${updated}`}</div>
    {status==='loading' && <div className="api-message"><div className="loader-orbit"><Orbit/></div><h3>Estableciendo conexión</h3><p>Solicitando datos al archivo astronómico...</p></div>}
    {status==='error' && <div className="api-message error-message"><h3>Señal interrumpida</h3><p>No fue posible obtener los datos. Comprobá tu conexión e intentá nuevamente.</p><button className="btn-primary" onClick={load}><RefreshCw size={15}/> Reintentar consulta</button></div>}
    {status==='success' && <div className="planet-grid">{bodies.map((b,i)=><article className="planet-card" key={b.id}><div className={`planet-art planet-${i%8}`}><span/></div><div className="planet-data"><span className="eyebrow">CUERPO CELESTE · {String(i+1).padStart(2,'0')}</span><h3>{b.englishName || b.name}</h3><p>{b.isPlanet?'Planeta':'Cuerpo del sistema solar'} · {b.bodyType || 'Registro'}</p><div className="planet-facts"><span>GRAVEDAD <b>{b.gravity ?? '—'} m/s²</b></span><span>RADIO <b>{b.meanRadius ?? '—'} km</b></span></div></div></article>)}</div>}
    <p className="data-note">LOS DATOS SE OBTIENEN EN EL NAVEGADOR. LA APLICACIÓN NO ALMACENA CREDENCIALES.</p>
  </div>
}
