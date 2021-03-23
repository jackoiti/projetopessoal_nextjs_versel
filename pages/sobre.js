import Link from 'next/link';
import {useState} from 'react';
    
function Sobre(){
    return (
        <div>
            <h2>Sobre</h2>
            <Link href="/">
                <a>Acessar página Home</a>
            </Link>
        </div>
    )
}

export default Sobre