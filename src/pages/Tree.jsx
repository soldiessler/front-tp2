import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FileCode2, Layers3 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const tree = {name:'App',type:'root',description:'Enrutador principal y contenedor de la aplicación.',children:[
  {name:'Layout',description:'Estructura compartida, barra superior y pie.',children:[
    {name:'Sidebar',description:'Identidad, navegación y estado activo.'},
    {name:'Outlet',description:'Renderiza la página correspondiente a la ruta.'}
  ]},
  {name:'Pages',description:'Pantallas asociadas a cada ruta.',children:[
    {name:'Home',description:'Portada y accesos a las secciones.'},
    {name:'Profile',description:'Perfil individual con paneles desplegables.'},
    {name:'Archive',description:'Catálogo JSON, búsqueda, filtro y fichas.'},
    {name:'Exploration',description:'Consumo de API, carga, error y reintento.'},
    {name:'Tree',description:'Árbol de componentes interactivo.'},
    {name:'Logbook',description:'Registros del proceso y filtros.'}
  ]},
  {name:'Components',description:'Piezas reutilizables de interfaz.',children:[
    {name:'SectionTitle',description:'Encabezado reutilizable mediante props.'},
    {name:'ShipCard',description:'Tarjeta reutilizable que recibe un registro JSON.'}
  ]},
  {name:'Data',description:'Datos locales separados de la presentación.',children:[
    {name:'ships.json',description:'24 registros del archivo estelar.'},
    {name:'logbook.js',description:'Entradas de la bitácora.'}
  ]}
]}
function Node({node,depth=0}) {
  const [open,setOpen]=useState(true)
  const has=!!node.children?.length
  const Icon=has?Folder:FileCode2
  return <div className="tree-node" style={{'--depth':depth}}>
    <button className={`tree-row ${node.type==='root'?'root-node':''}`} onClick={()=>has&&setOpen(!open)} aria-expanded={has?open:undefined}>
      {has?(open?<ChevronDown size={15}/>:<ChevronRight size={15}/>):<span className="tree-spacer"/>}
      <Icon size={16}/><strong>{node.name}</strong>{node.type==='root'&&<span className="root-tag">RAÍZ</span>}
    </button>
    <div className="tree-description">{node.description}</div>
    {has&&open&&<div className="tree-children">{node.children.map(child=><Node key={child.name} node={child} depth={depth+1}/>)}</div>}
  </div>
}
export default function Tree() {
  return <div><SectionTitle eyebrow="05 — ARQUITECTURA REACT" title="Sistema de componentes" description="Árbol de renderizado real de la aplicación. Abrí y cerrá las ramas." code="COMPONENT TREE"/>
    <div className="tree-panel"><div className="tree-panel-head"><span><Layers3 size={17}/> JERARQUÍA DE COMPONENTES</span><span>INTERACTIVO</span></div><div className="tree-root"><Node node={tree}/></div></div>
    <div className="tree-legend"><span><Folder size={15}/> Componente con hijos</span><span><FileCode2 size={15}/> Componente / archivo</span></div>
  </div>
}
