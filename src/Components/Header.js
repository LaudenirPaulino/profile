import keyConceptsImage from '../assets/images/engenharia-icon.png';
import "../Styles/Header.css"

export default function Header() {
  return (
    <header>
      <div>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Laudenir Paulino</h1>
        <p>Construindo o Futuro.</p>
      </div>
    </header>
  )
}