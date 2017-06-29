import React, {PropTypes, Component} from 'react';
import AdminProductGrid from '/imports/ui/components/Products/AdminProductGrid.jsx';

export default class AdminPage extends Component {
    render() {
        if (this.props.loading) {
            return <div>'loading...'</div>;
        } else {
          let products = this.props.products;

          let productsList = products.map(function(product){
              return <AdminProductGrid key={product._id} product={product}/>
          });

            return (
                <div>
                    <div className="container">
                        {productsList}
                    </div>
                </div>
            )
        }
    }
}
