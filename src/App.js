import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
            {
                id: 1,
                title: 'Mephedrone',
                img: 'mephedrone.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 2,
                title: 'Geroin',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 3,
                title: 'Alpha PVP',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 4,
                title: 'Alpha PVP',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 5,
                title: 'Alpha PVP',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 6,
                title: 'Alpha PVP',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 7,
                title: 'Alpha PVP',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            },
            {
                id: 8,
                title: 'Alpha PVP',
                img: 'geroin.webp',
                desc: 'Lorem ipsum dolor sit amet.',
                category: 'narcos',
                price: '500.54'
            }
            ]
        }
    }
    render() {
        return (  
            <div>
                <Header />
                <div className="wrapper">
                    <Items items={this.state.items} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
