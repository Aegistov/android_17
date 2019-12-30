import React from 'react';


export class ProductList extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/v1/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    products: json['response'],
                })
            });
    }



    render() {
       console.log(this.state.products)

        var {  isLoaded, products } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
        
        return (
            <div>
                <ul>
                    {products.map(product => (
                        <li key={product.sid}>
                            <div>
                                <p>{product.name}</p>
                            </div>
                            <div>{product.price}</div>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}



}

export default ProductList;




