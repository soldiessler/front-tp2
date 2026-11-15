export default function SectionTitle({eyebrow, title, description, code}) {
  return <div className="section-title">
    <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>
    {code && <span className="section-code">{code}</span>}
  </div>
}
