import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormControl, InputGroup } from 'react-bootstrap';
import { getFloat, isDefined } from '../../functions/utils';
import ProvisionActions from '../../api/ProvisionApi';
import Button from '../fields/Button';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from "../bootstrap/Table";
import TrTd from '../bootstrap/TrTd';
import { RiCheckFill } from 'react-icons/ri';

const ProvisionModal = ({ item, provisions, setProvisions, index }) => {


    const [modalShow, setModalShow] = useState(false);
    const [receivedProvision, setReceivedProvision] = useState({...item, goods: item.goods.map(g => ({ ...g, received: g.quantity, price: "" })) });
    // const [receivedProvision, setReceivedProvision] = useState([ ...item.goods] );

    const exists = (entity, variable) => {
        return isDefined(entity) && isDefined(entity[variable]) && entity[variable].length > 0 && entity[variable] !== " ";
    };

    const handleChange = ({ currentTarget }, good) => {
        // console.log(item.goods);
        const index = receivedProvision.goods.findIndex(g => parseInt(g.id) === parseInt(good.id));
        // console.log(index);
        const newGoods = receivedProvision.goods.map((g, i) => i !== index ? g : { ...good, [currentTarget.name]: currentTarget.value });
        // console.log(newGoods);
        setReceivedProvision({...receivedProvision, goods : newGoods });
    };

    const handleSubmit = () => {
        // console.log(receivedProvision.id);
        ProvisionActions
            .update(receivedProvision.id, getProvisionToWrite())
            .then(response => {
                updateProvisions(response.data);
                setModalShow(false);
            })
            .catch(error => console.log(error));
    };

    const getProvisionToWrite = () => {
        return {
            ...receivedProvision,
            status: "DELIVERED",
            // seller: receivedProvision.seller['@id'],
            supplier: receivedProvision.supplier['@id'],
            metas: receivedProvision.metas['@id'],
            user: receivedProvision.user['@id'],
            goods: receivedProvision.goods.map(g => ({
                ...g,
                product: g.product['@id'],
                received: getFloat(g.received),
                stock: getFloat(g.stock)
            }))
        };
    };

    const updateProvisions = newProvision => {
        // const index = provisions.findIndex(p => parseInt(p.id) === parseInt(newProvision.id));
        const newProvisions = provisions.map((p, i) => i !== index ? p : newProvision);
        // console.log(newProvisions);
        setProvisions(newProvisions);
    };
    // console.log(receivedProvision);
    return (
        <>
            <Button variant="dark" textColor="white" onClick={() => setModalShow(true)} className="mx-5 my-1">
                <RiCheckFill size={20} className="mb-1" /> Receptionner
            </Button>

            <Modal show={modalShow} onHide={() => setModalShow(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {item.supplier.name} pour le {(new Date(item.provisionDate)).toLocaleDateString('fr-FR', { timeZone: 'UTC' })}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ overflowY: 'scroll' }} className="p-0">
                    {/* <h6>Détail</h6> */}
                    <Table
                        header={["Nom", "Quantité commandé", "Reception"]}
                        variant="light"
                        className="m-0"
                    >
                        {receivedProvision.goods.map(good => {
                            return <TrTd data={[good.product.name,
                            <InputGroup>
                                <FormControl
                                    name="quantity"
                                    type="number"
                                    value={good.quantity}
                                    onChange={e => handleChange(e, good)}
                                    //style={{ maxWidth: '180px' }}
                                    disabled={true}
                                />
                                <InputGroup.Text
                                // style={{ minWidth: '43px' }}
                                >
                                    {good.unit}
                                </InputGroup.Text>

                            </InputGroup>,
                            <InputGroup>
                                <FormControl
                                    name="received"
                                    type="number"
                                    value={good.received}
                                    onChange={e => handleChange(e, good)}
                                // style={{ maxWidth: '180px' }}
                                />
                                <InputGroup.Text
                                // style={{ minWidth: '43px' }}
                                >
                                    {good.unit}
                                </InputGroup.Text>
                            </InputGroup>
                            ]} />
                        })
                        }
                    </Table>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="success" onClick={handleSubmit}><i className="fas fa-check mr-2"></i> Valider</Button>
                    <Button variant="danger" onClick={() => setModalShow(false)}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProvisionModal;