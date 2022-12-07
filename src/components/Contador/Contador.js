import {useState} from 'react';
const Contador = (inicial) => {
    const [count, setCount] = useState (0)

    const incremento = () => {
        setCount (count+1)
    }
    const resetear= () => {
        setCount (0)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick ={() =>incremento()}>sumar producto</button>
            <button onClick ={() =>resetear()}>reset</button>
        </div>
    )
    
}
export default Contador