import Link from 'next/link';
import {useState} from 'react';
    
function Home(){
    return (
        <div>
            <h2>Home</h2>
            <Contador />
            <div><br></br></div>
            <div>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
            </div>
            <div><br></br></div>
            <div>Teste</div>
        </div>
    )
}

function Contador () {
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home