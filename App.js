import { useState } from "react"
import './index.css'
export default function App (){
    const [contagem, SetContagem] = useState(0)
    function Somar(){
        SetContagem(contagem+1)
        console.log(contagem)
    }
    function Diminuir(){
        SetContagem(contagem-1)
        console.log(contagem)
    }
    return (
    <div class="container">
        <h1>Contador</h1>
        <button onClick={Somar}> Mais </button>
        <p id='contagem'>{contagem}</p>
        <button onClick={Diminuir}>Menos</button>
     </div>
    )
}