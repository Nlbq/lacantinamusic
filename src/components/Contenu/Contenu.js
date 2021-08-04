import React, {useContext} from 'react'
import './Contenu.css'
import { ThemeContext } from '../../Context/ThemeContext'



export default function Contenu() {

    const {theme} = useContext(ThemeContext);
   

    return (
        <div className={theme ? 'contenu light' : 'contenu dark'}>
            <h1>La Cantina</h1>
            <p>La Cantina est un groupe de musiciens français originaires de Toulouse, membres du collectif Tour de Manège. <br/>
                Genre musical :
                Instrumental, ChillHop, Electronic & Cinematographic Hip-hop depuis 2013.</p>
        </div>
    )
}
