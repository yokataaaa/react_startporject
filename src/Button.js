import icReset from "./assets/ic-reset.svg"

function Button({ onClick }) {
  return <button onClick={onClick}><img className="App-reset" src={icReset} alt="초기화"/></button>;
}

export default Button;