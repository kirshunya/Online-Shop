import React from 'react'

export default function Header() {
    return (
        <header>
            <div>
                <div className='wrapper'>
                    <span className='logo'>Narcos</span>
                    <ul className='nav'>
                        <li>About us</li>
                        <li>Contacts</li>
                        <li><a href="reg.html">Log In</a></li>
                    </ul>
                </div>
            </div>
            <div className='presentation'></div>
        </header>
    )
}
