import React, { Component } from 'react';

//hoc
import Content from './../../../hoc/Content/Content'

//data
import data from '../ProductList/data';

//classes
import classes from './FullProduct.scss';

class FullProduct extends Component {
    render () {
    let match = this.props.match
    const product = data.find(({id} ) => {
        return (
            id == match.params.id)  
    } )
    console.log(this.props);
        return (
            <Content> 
                <div className={classes.FullProduct}>
                    <figure className={classes.ProductImg}>
                        <img src={product.imgUrl} alt="watch"/>
                    </figure>
                    <div className={classes.ProductContent}>
                        <h3>
                            {product.product_name}
                        </h3>
                        <div className={classes.ProductDescription}>
                            {product.description}
                        </div>
                    </div>
                    
                 </div>
            </Content>

        )
    }
}

export default FullProduct