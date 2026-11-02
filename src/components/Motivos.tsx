import { motivos, wa } from "../content"

export const Motivos = () => (
  <ul className="motivos">
    {motivos.map((item) => (
      <li key={item.id}>
        <h3>{item.label}</h3>
        <p>{item.detail}</p>
        <a className="btn btn-red" href={wa(item.text)} target="_blank" rel="noreferrer">
          Escribir
        </a>
      </li>
    ))}
  </ul>
)
