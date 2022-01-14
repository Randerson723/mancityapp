import React from 'react'
import SHOP_DATA from '../shop.data';
import CollectionPreview  from '../components/preview-collection/collection-preview.component';



class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    const p = SHOP_DATA;

    
      return (
        <React.Fragment>
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <h6>
                  {p.name}
                  <span className="float-right">${p.price}</span>
                </h6>
              </div>
              <div className="card-body">
                <img className="card-img-top" src={p.images[0]} alt={p.name} />
                <button
                  
                  style={{ marginBottom: "25px" }}
                  className="btn btn-success btn-block"
                >
                  Add to Cart
                </button>
                </div>
            </div>
          </div>
        </React.Fragment>
      );
    
  } 
}

export default ShopPage;