import React from 'react';
import ProductData from './product_data';

export class ProductList extends React.Component {


    render() {


        return (
            <div>
                <ul>
                    {ProductData.map(item => <li key={item.id}>
                        {item.name}
                    </li>)}
                    {ProductData.map(item => <li key={item.id}>
                        {item.price}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default ProductList;




