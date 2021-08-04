import React, { useState, useEffect } from 'react'
import "./navbar.css"


export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [largeur, setLargeur] = useState(window.innerwidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth < 500) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <nav class="grey darken-3">
            {(toggleMenu || largeur > 500) && (

                <ul className="liste">
                    <li className="items"><a href="/">Accueil</a></li>
                    <li className="items"><a href="/Projects">Discographie</a></li>
                    <li className="items"><a href="/projects">Evenements</a></li>
                    <li className="items"><a href="/">Contact</a></li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="btn"><i class="small material-icons">list</i></button>

        </nav>
    )
}
