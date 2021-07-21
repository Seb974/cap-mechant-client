/**
 * @author [Brian NARBE]
 * @email [brian.narbe@gmail.com]
 * @create date 2021-06-14 16:25:18
 * @modify date 2021-06-16 15:37:07
 * @desc [page pour tester mes applicaitons]
 */

import React, { useState } from 'react';
//wrappers
import Container from "../wrappers/Container";
import Column from "../wrappers/Column";
//components
import LoginForm from '../components/forms/LoginForm';
import ProductGrid from '../components/products/ProductGrid';

//data
import products from "../data/products.json";
import ProductImgCard from '../components/products/ProductImgCard';

const PageTest = (props) => {
    const [display, setDisplay] = useState(4);
    console.log(display);
    return (<>
    {/* <ProductImgCard></ProductImgCard> */}
        <ProductGrid setter={setDisplay}>
            {products.map((value, index) => {
                return (
                    <Column key={index} md={display} className=" mb-4">
                        <ProductImgCard/>
                    </Column>
                )
            })}
        </ProductGrid>

    </>);
}

export default PageTest;