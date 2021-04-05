import React from "react";
import { useHistory } from "react-router";
import './ShowProduct.css'

const ShowProduct = ({ product }) => {
    console.log(product)
    let history = useHistory();
    const buyNowHandler = (id) => {
        // console.log(id)
        history.push(`/checkOut/${id}`)

    }
    return (
        // <div class="card col-md-4">
        //     <img src={product.imageURL} class="card-img-top" alt="..." width="100" />
        //     <div class="card-body">
        //         <h3 class="card-text">
        //             {product.name}
        //         </h3>
        //     </div>
        //     <div class="card-body">
        //         <h4 class="card-link">{product.price}</h4>
        //         <button class="btn btn-primary" onClick={() => buyNowHandler(product._id)}>Buy now</button>
        //         {/* <Link to='/checkOut'><button class="btn btn-primary" onClick={()=>buyNowHandler(product._id)}>Buy now</button> </Link> */}
        //     </div>
        // </div>
        <div>
            
            <div className="productItem">
                <img src={product.imageURL} alt="" />
                <h2>{product.name}</h2>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4>${product.price}</h4>
                    <button style={{ color: '#fff', background: '#72BA59', border: 'none', borderRadius: '5px' }} onClick={() => buyNowHandler(product._id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
