/**
 * @author [Brian NARBE]
 * @email [brian.narbe@gmail.com]
 * @create date 2021-06-14 16:25:18
 * @modify date 2021-06-16 15:37:07
 * @desc [page pour tester mes applicaitons]
 */

import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
//style
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/background.css';
//wrappers
import Container from "../wrappers/Container";
import Column from "../wrappers/Column";
//data
import Data from "../data/products.json";
//fields
import Button from "../components/fields/Button";
//components
import CartOverview from '../components/cart/cartOverview';
import ProductCard from '../components/products/ProductCard';

const Home = (props) => {
    const [search, setSearch] = useState("");
    const filteredProduct = Data.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.find(cat => cat.includes(search.toLowerCase()))
    )
    const handleChange = ({ currentTarget }) => setSearch(currentTarget.value);
    return (<>
        <Column >
            <div className="input-group my-3">
                <span className="input-group-text bg-dark text-white"><AiOutlineSearch size={30} /></span>
                <input type="text" className="form-control p-3" placeholder="Rechechez le nom de votre article" value={search} onChange={handleChange} />
            </div>
        </Column>
        <Column lg={10} className=" h-100 " >
            <div className="row  scrollbar" >
                {filteredProduct.map((product, index) => {
                    return (
                        <Column md={6} xl={3} className=" mb-4" key={product.id}>
                            <ProductCard product={product}  />
                        </Column>
                    )
                }
                )}
            </div>
        </Column>
        <Column lg={2} xl={2} className="d-none d-lg-block h-100">
            <CartOverview />
        </Column>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>);
}

export default Home;