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
import ProvisionModal from '../goods/ProvisionModal';

const Accordion = ({ provisions, setProvisions }) => {

    const getSign = status => {
        return status === "WAITING" ? <FaFileUpload size={20} className="me-2 text-danger" /> :
            status === "ORDERED" ? <FaHourglassHalf size={20} className="me-2 text-warning" /> :
                <FaCheckCircle size={20} className="me-2 text-success" />;
    };

    return !isDefinedAndNotVoid(provisions) ? <></> : (
        <>
            <div className="accordion py-5" id="accordionExample">
                {provisions
                    .map((provision, index) => {
                        return (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={"headingOne" + index}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                        {getSign(provision.status)}
                                        {provision.supplier.name}, le {(new Date(provision.provisionDate)).toLocaleDateString('fr-FR', { timeZone: 'UTC' })}
                                        {provision.status === "ORDERED" &&
                                            <ProvisionModal item={provision} provisions={provisions} setProvisions={setProvisions} index={index} />
                                        }
                                    </button>

                                </h2>
                                <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"headingOne" + index} data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-0">
                                        <div className="d-flex flex-column">
                                            <Table
                                                header={(provision.status === "DELIVERED") ?
                                                    ["Nom", "Quantité commandé", "Quantité reçue", "Fournisseur"]
                                                    :
                                                    ["Nom", "Quantité commandé", "Stock", "Fournisseur"]}
                                                className="m-0"
                                            >
                                                {provision.goods.map(good => {
                                                    return (provision.status === "DELIVERED") ? (
                                                    <TrTd data={[good.product.name, good.quantity, good.received, provision.supplier.name]} />
                                                    ) : (
                                                    <TrTd data={[good.product.name, good.quantity, good.stock, provision.supplier.name]} />)
                                                })
                                                }
                                            </Table>
                                            {/* <ProvisionModal  item={provision} provisions={provisions} setProvisions={setProvisions}/> */}
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