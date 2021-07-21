/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ProductImgCard.jsx (c) 2021
Desc: produit carte version full photo
Created:  2021-07-13T10:16:58.387Z
Modified: 2021-07-21T12:57:31.873Z
*/
import React from 'react';
import {IoCartOutline} from 'react-icons/io5';
import Button from '../../components/fields/Button';

const ProductImgCard = (props) => {
    return (<>
        <div style={{
            position: 'relative',
            display: 'block'
        }}>
            <div style={{
                position: 'relative',
                // overflow: 'hidden'
            }}>
                <img src="img/products/600x800.jpg" alt="" style={{
                    width: "100%"
                }} />
            </div>

            <div className=" bottom-0 start-0"  style={{
                position: 'absolute',
                width: '100%',
                //height: '10%'
            }}>
                <div>
                    <div className="input-group">
                        <span className="btn btn-dark p-3" id="basic-addon1">-</span>
                        <input type="text" className="form-control border" placeholder="Ajouter une quantité" aria-label="Username" aria-describedby="basic-addon1" />
                        <span className="btn btn-dark p-3" id="basic-addon1">+</span>
                        <button className="btn btn-success p-3" id="basic-addon1"><IoCartOutline></IoCartOutline></button>
                    </div>
                </div>

            </div>
        </div>

    </>);
}

export default ProductImgCard;
