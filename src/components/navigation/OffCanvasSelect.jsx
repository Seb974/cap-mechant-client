import React, { useState, useContext } from 'react';

import { Offcanvas } from "react-bootstrap"
import SuppliersListContext from '../../contexts/SuppliersListContext';
import SupplierContext from '../../contexts/SupplierContext';
import CategoryContext from '../../contexts/CategoryContext';
import Button from '../fields/Button';
import SelectList from '../fields/Select';
import { ImCancelCircle } from 'react-icons/im';
import CartOverview from '../cart/cartOverview';

const OffCanvasSelect = ({ name, children, ...props }) => {
    const { categories, setCategories, category, setCategory } = useContext(CategoryContext);
    const { supplier, setSupplier } = useContext(SupplierContext);
    const { suppliersList, setSuppliersList } = useContext(SuppliersListContext);

    const handleSelectChange = (event, currentSelect) => {
        if (currentSelect === "supp") setSupplier({ value: event.value, label: event.label });
        if (currentSelect === "cats") setCategory({ value: event.value, label: event.label });
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button variant="dark" onClick={handleShow} className="me-2">
            {children}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Body className='py-5'>
                <div className="text-center my-3">
                    <ImCancelCircle size={30} onClick={handleClose} className="text-danger" />
                </div>
                <SelectList
                    data={suppliersList}
                    label="Selectionnez un fournisseur..."
                    placeholder="Selectionnez un fournisseur"
                    onChange={(event) => handleSelectChange(event, "supp")}
                    value={supplier}
                />
                <SelectList
                    data={categories}
                    label="Selectionnez une catégorie..."
                    onChange={(event) => handleSelectChange(event, "cats")}
                    // defaultValue={category}
                    value={category}
                />

                <CartOverview />
            </Offcanvas.Body>
        </Offcanvas>
    </>);
}

export default OffCanvasSelect;