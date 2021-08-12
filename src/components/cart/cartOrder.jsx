/*
Author: <Brian NARBE> (bnprorun@gmail.com)
cartorder.jsx (c) 2021
Desc: Recapitulatif de la commande
Created:  2021-08-02T09:38:04.925Z
Modified: 2021-08-12T08:38:10.341Z
*/

import React, { useContext } from 'react';
import Row from "../../wrappers/Row";
import CartContext from '../../contexts/CartContext';
import CartApi from '../../api/CartApi';
import Column from '../../wrappers/Column';
import 'flatpickr/dist/themes/material_blue.css';
import { French } from "flatpickr/dist/l10n/fr.js";
import Flatpickr from 'react-flatpickr';
import ConfigContext from '../../contexts/ConfigContext';
import CatalogContext from '../../contexts/CatalogContext';
import QuantityInput from '../fields/QuantityInput';

const CartOrder = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const { url, setUrl } = useContext(ConfigContext);
    const { catalogs, setCatalogs } = useContext(CatalogContext);

    const handleChange = ({ currentTarget }, index) => {
        const { name, value } = currentTarget;
        const item = [...cart.items];
        item[index][name] = value;
        setCart({ ...cart, items: item });
    }

    const handleClick = (index, name, number) => {
        const item = [...cart.items];
        item[index][name] = parseFloat(item[index][name]) + number;
        setCart({ ...cart, items: item });
    }

    const onDateChange = datetime => {
        const newDate = new Date(datetime[0].getFullYear(), datetime[0].getMonth(), datetime[0].getDate(), 9, 0, 0);
        setCart({ ...cart, deliveryDate: newDate });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        CartApi.sendOrder(cart);
    }
    return (<>
        <h1 className="fs-1 text-center mt-5"> Ma commande</h1>
        <form onSubmit={handleSubmit}>
            <Row className="py-5" justifyContent="center">

                <Column lg={12}>

                    {(cart.items && cart.items.length > 0) &&
                        (cart.items.map((product, index) => {
                            return (
                                <div className="row mb-2 justify-content-center" key={index}>
                                    <p className="col-sm-12 col-md-3 my-auto border-bottom fw-bold">{product.product.name}</p>

                                    <div className="col-sm-12 col-md-2">
                                        <QuantityInput
                                            unit={product.unit}
                                            label={"Quantité à commander"}
                                            name="orderedQty"
                                            number={product.orderedQty}
                                            onChange={(event) => handleChange(event, index)}
                                            plus={(event) => handleClick(index, "orderedQty", 1)}
                                            minus={(event) => handleClick(index, "orderedQty", -1)}
                                        />
                                    </div>
                                    <div className="col-sm-12 col-md-2 col-md-2">
                                        <QuantityInput
                                            unit={product.unit}
                                            label={"Mon stock"}
                                            name="stock"
                                            number={product.stock}
                                            onChange={(event) => handleChange(event, index)}
                                            plus={(event) => handleClick(index, "stock", 1)}
                                            minus={(event) => handleClick(index, "stock", -1)}
                                        />
                                    </div>

                                </div>
                            )
                        }))
                    }
                </Column>
                <Column lg={4}>
                    <div className="input-group my-3">
                        <label htmlFor="deliveryDate" className="date-label input-group-text bg-white border-0">Livraison le </label>
                        <Flatpickr
                            name="deliveryDate"
                            value={cart.deliveryDate}
                            onChange={onDateChange}
                            className={`form-control `}
                            options={{
                                minDate: "today",
                                dateFormat: "d/m/Y",
                                locale: French,
                                disable: [date => date.getDay() === 0]
                            }}
                        />
                    </div>
                    <div className="text-center my-3">
                        <button className="btn btn-success text-center">
                            Envoyer ma commande
                        </button>
                    </div>


                </Column>
            </Row>
        </form>

    </>);
}

export default CartOrder;