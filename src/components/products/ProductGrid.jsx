/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductGrid.jsx (c) 2021
Desc: Gestion des grids choisi par l'utilisateur
Created:  2021-07-13T06:49:53.350Z
Modified: 2021-07-22T13:21:37.357Z
*/
import React, { useState } from 'react';
import Container from '../../wrappers/Container';
import { FaThLarge, FaTh, FaThList } from 'react-icons/fa';
import products from '../../data/products.json';
//css
import '../../css/gridicons.css'
import Column from '../../wrappers/Column';

const ProductGrid = ({ children,setter, currentDisplay }) => {
    const [grid, setGrid] = useState('');
    const handleClick = ({ currentTarget }) => {
        const result = currentTarget.id
        setGrid(result);
        setter(result.substring(3));
    }
    return (<>

        <Container className="my-5 p-0text-start" fluid={false} justifyContent="center">
            <div className="nav p-3">
                <div></div>
                <div id="grid-config" className="ms-auto">
                    <FaThLarge id="col6" onClick={handleClick} className={`display m-1 ${(grid == "col6" || currentDisplay == 6) ? "text-info border border-info rounded-3 p-2 " : "p-2"}`} size={40} />
                    <FaTh id="col4" onClick={handleClick} className={`display m-1 ${(grid == "col4" || currentDisplay == 4) ? "text-info border border-info rounded-3 p-2 " : "p-2"}`} size={40} />
                    <FaThList id="col12" onClick={handleClick} className={`display m-1 ${(grid == "col12" || currentDisplay == 12) ? "text-info border border-info rounded-3 p-2 " : "p-2"}`} size={40} />
                </div>
            </div>
            {children}
        </Container>
    </>);
}

export default ProductGrid;