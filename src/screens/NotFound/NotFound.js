import React from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import './css/style.css'


export const NotFound = () => {
    return <div id="notfoundCont">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>Oops! Página no encontrada</h2>
            <p>Lo siento, la página que buscabas no existe o está en construcción.</p>
            <Link to="/"><Button variant="dark">Volver al inicio</Button></Link>
        </div>
    </div>
}
