import { useState } from "react"
import './index.css'
export default 

function App (){

    const [contagem, SetContagem] = useState(0)
        
    function Somar(){
        SetContagem(contagem+1)
        console.log(contagem)
    }
    function Diminuir(){
        SetContagem(contagem-1)
        console.log(contagem)
    }

    function handleChange(event) {
        const valor = parseInt(event.target.value)
        SetContagem(valor || 0)
    }

    return (
    <div class="container">
        <h1>Contador</h1>
        <button onClick={Somar}> Mais </button>
        <input type='number' name='contagem' id='contagem' value={contagem} onChange={handleChange}/>

        <button onClick={Diminuir}>Menos</button> 
     </div>
    )
}