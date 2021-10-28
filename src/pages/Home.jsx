/**
 * @author [Brian NARBE]
 * @email [brian.narbe@gmail.com]
 * @create date 2021-06-14 16:25:18
 * @modify date 2021-06-16 15:37:07
 * @desc [page pour tester mes applicaitons]
 */

import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
//api
import SupplierApi from '../api/SupplierApi';
//style
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/background.css';
//wrappers
import Container from "../wrappers/Container";
import Column from "../wrappers/Column";
//components
import CartOverview from '../components/cart/cartOverview';
import ProductCard from '../components/products/ProductCard';
import ProductContext from '../contexts/ProductContext';
import Row from '../wrappers/Row';
import ProductList from '../components/products/ProductList';
import SelectList from '../components/fields/Select';
import CartContext from '../contexts/CartContext';
import SuppliersListContext from '../contexts/SuppliersListContext';
import SupplierContext from '../contexts/SupplierContext';
import SupplierProductsContext from '../contexts/SupplierProductsContext';
import CategoryContext from '../contexts/CategoryContext';
import OffCanvasSelect from '../components/navigation/OffCanvasSelect';
import { IoOptions } from 'react-icons/io5';


const Home = (props) => {
    const { supplierProducts, setSupplierProducts } = useContext(SupplierProductsContext);
    const { cart, setCart } = useContext(CartContext);
    const { categories, setCategories, category, setCategory } = useContext(CategoryContext);
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState("list");
    const { supplier, setSupplier } = useContext(SupplierContext);
    const { suppliersList, setSuppliersList } = useContext(SuppliersListContext);
    const [selectedSupplier, setSelectedSupplier] = useState("");
    const [currentProducts, setCurrentProducts] = useState([]);

    const handleSelectChange = (event, currentSelect) => {
        if (currentSelect === "supp") setSupplier({ value: event.value, label: event.label, isIntern : event.isIntern });
        if (currentSelect === "cats") setCategory({ value: event.value, label: event.label });
    }

    const filteredSearchProduct = () => {
        const checkCat = (category.value === '') ? "" : category.label;
        if (supplierProducts && supplierProducts.length > 0) {
            const tab = [...supplierProducts]
            const result = tab.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase()) &&
                product.categories.toLowerCase().includes(checkCat.toLowerCase())
            )
            setCurrentProducts(result);
        }
    }

    const createCurrentProductsList = () => {
        if (supplierProducts && supplierProducts.length > 0) filteredSearchProduct(supplierProducts);
    }

    const handleChange = ({ currentTarget }) => setSearch(currentTarget.value);

    useEffect(() => {
        createCurrentProductsList();
        setSearch("");
    }, [supplierProducts]);

    useEffect(() => {
        filteredSearchProduct();
    }, [search, category]);
    // console.log(categories);
    // console.log(category);
    return (<>
        <Row justifyContent="center p-0">
            <Column xl={12} className="d-flex flex-row">
                <div className="input-group my-3">
                    <span className="input-group-text bg-dark text-white"><AiOutlineSearch size={30} /></span>
                    <input type="text" className="form-control" placeholder="Rechercher..." value={search} onChange={handleChange} />
                </div>
                <div className="my-auto ms-2 d-xs-block d-lg-none ">
                    <OffCanvasSelect placement='start'>
                        <IoOptions size={25}  className="mb-1"/>
                    </OffCanvasSelect>
                </div>

            </Column>
        </Row>
        <Row justifyContent="start h-100 p-0">
            <Column lg={9} className=" h-100 " >
                <div className="row scrollbar" >
                    {(currentProducts && currentProducts.length > 0) && currentProducts.map((product, index) => {
                        return (display != "list") ?
                            (<Column md={12} lg={12} xl={12} className=" mb-2" key={product.id}>
                                <ProductList product={product} />
                            </Column>
                            ) : (
                                <Column sm={6} md={4} lg={4} xl={4} xxl={3} className=" mb-4" key={product.id}>
                                    <ProductCard product={product} />
                                </Column>
                            )
                    }
                    )}
                    {(currentProducts.length <= 0) &&
                        <span className=" my-5 text-center text-dark fst-italic">Merci de bien vouloir selectionner un fournisseur</span>
                    }
                </div>
            </Column>
            <Column lg={3} xl={3} className="d-none d-lg-block  ">
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
            </Column>
        </Row>


    </>);
}

export default Home;