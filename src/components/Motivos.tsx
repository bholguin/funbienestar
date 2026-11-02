import { motivos, wa } from "../content"

export const Motivos = () => (
  <ul className="motivos">
    {motivos.map((item) => (
      <li key={item.id}>
        <a href={wa(item.text)} target="_blank" rel="noreferrer">
          {item.label}
        </a>
      </li>
    ))}
  </ul>
)
