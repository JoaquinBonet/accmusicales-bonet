import React from 'react'
import { useHistory } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import './css/style.css'


export const NotFound = () => {
    const history = useHistory();
    return <div id="notfoundCont">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>Oops! Página no encontrada</h2>
            <p>Lo siento, la página que buscabas no existe o está en construcción.</p>
            <Button variant="dark" onClick={(e) => history.push("/") } className="home">Volver al inicio</Button>
        </div>
    </div>
}
