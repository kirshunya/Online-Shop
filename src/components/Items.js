import React, { Component } from 'react'

import Image from "../img/mefedron2.0.jpeg"

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    <div className='item__product'>
                        <img className='image' src={Image} alt="Описание изображения" />
                        <br></br>
                        {el.title}
                    </div>
                ))}
            </main>
        )
    }
}

export default Items      
