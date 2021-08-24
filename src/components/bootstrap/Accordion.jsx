/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Accordion.jsx (c) 2021
Desc: accordion component
Created:  2021-08-20T09:26:10.045Z
Modified: 2021-08-20T13:22:10.077Z
*/

import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { FaRegFileAlt } from "react-icons/fa";
import Table from "../bootstrap/Table";
import TrTd from './TrTd';
import { sortingOrder } from '../../functions/sort';

const Accordion = ({ table }) => {
    const [dateList, setDateList] = useState([]);

    useEffect(() => {
        if (table && table.length > 0) setDateList(sortingOrder(table));
    }, [])
    return (<>
        <div className="accordion py-5" id="accordionExample">
            {(dateList && dateList.length > 0) &&

                dateList.map((value, index) => {
                    const products = table.filter((product) => product.deliveryDate === value);
                    console.log(products);
                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={"headingOne" + index}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                    <FaRegFileAlt size={20} className="me-2" /> Commande du {Moment(value).locale('fr').format('ll')}
                                </button>
                            </h2>
                            <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"headingOne" + index} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="d-flex flex-column">
                                        <Table
                                            header={["Nom", "Stock", "Quantité commandé", "Fournisseur"]}
                                            variant="light"
                                        >

                                            {products.map((product) => {
                                               return  product.items.map((item) => {
                                                    return <TrTd data={[item.product.name, item.stock, item.orderedQty]}/>
                                                })
                                            })}
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>);
}

export default Accordion;