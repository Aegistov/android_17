import React from 'react'

export class ProductData extends React.Component {
    render() {
        const productData = [
            {
                id: 1,
                product_sid: '5MJBQJ',
                name: 'apple',
                price: '1.49'
            },
            {
                id: 3,
                product_sid: '58ZIX6',
                name: 'strawberries',
                price: '4.98'
            }
        ];
        return (
            <div>
                {productData}
            </div>
        )
    }
}

export default ProductData;




