import React from 'react';
import ProductData from './product_data';
import PRODUCT_DATA from './product_data';

export class ProductList extends React.Component {


    render() {


        return (
            <div>
                <ul>
                    {PRODUCT_DATA.map(item => <li key={item.id}>
                        {item.name}
                    </li>)}
                    {PRODUCT_DATA.map(item => <li key={item.id}>
                        {item.price}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default ProductList;




