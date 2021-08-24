/*
Author: <Brian NARBE> (bnprorun@gmail.com)
Accordion.jsx (c) 2021
Desc: accordion component
Created:  2021-08-20T09:26:10.045Z
Modified: 2021-08-24T14:42:16.060Z
*/

import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaHourglassHalf, FaFileUpload } from "react-icons/fa";
import Table from "../bootstrap/Table";
import TrTd from './TrTd';
import { isDefinedAndNotVoid } from '../../functions/utils';

const Accordion = ({ provisions, setProvisions }) => {

    const getSign = status => {
        return status === "WAITING" ? <FaFileUpload size={20} className="me-2 text-danger" /> :
               status === "ORDERED" ? <FaHourglassHalf size={20} className="me-2 text-warning" /> :
                                      <FaCheckCircle size={20} className="me-2 text-success" />;
    };

    return !isDefinedAndNotVoid(provisions) ? <></> : (
        <>
            <div className="accordion py-5" id="accordionExample">
                { provisions
                    .sort((a, b) => (new Date(a.provisionDate) < new Date(b.provisionDate)) ? 1 : -1)
                    .map((provision, index) => {
                        return (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={"headingOne" + index}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                            { getSign(provision.status) }
                                            { provision.supplier.name }, le { (new Date(provision.provisionDate)).toLocaleDateString('fr-FR', { timeZone: 'UTC'}) }
                                    </button>
                                    {/* { provision.status === "ORDERED" && 
                                        // <ProvisionModal item={ provision } provisions={ provisions } setProvisions={ setProvisions }/> 
                                    } */}
                                </h2>
                                <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"headingOne" + index} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="d-flex flex-column">
                                            <Table
                                                header={["Nom", "Stock", "Quantité commandé", "Fournisseur"]}
                                                variant="light"
                                            >
                                                { provision.goods.map(good => {
                                                        return <TrTd data={[good.product.name, good.stock, good.quantity, provision.supplier.name]}/>
                                                    })
                                                }
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Accordion;