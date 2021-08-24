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


const Home = (props) => {
    const { products, setProducts } = useContext(ProductContext);
    const { cart, setCart } = useContext(CartContext);
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState("list");
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState("");
    const [currentProducts, setCurrentProducts] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedSupplier(event.value);
        setCart({ ...cart, supplier: event.value });
    }

    const filteredSearchProduct = () => {
        const tab = [...products]
        const result = tab.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.categories[0].name.toLowerCase().includes(search.toLowerCase())
        )
        setCurrentProducts(result);
    }

    const filteredSupplierProduct = () => {
        const tab = [...products]
        const result = tab.filter(product =>
            product.suppliers.findIndex(s => s['@id'] === selectedSupplier) != -1
        )
        setCurrentProducts(result);
    }

    const fetchSuppliers = async () => {
        try {
            const data = await SupplierApi.findAll();
            setSuppliers(data);
        } catch (error) {

        }
    }

    const createCurrentProductsList = () => {
        if (products && products.length > 0) setCurrentProducts(products);
    }

    const handleChange = ({ currentTarget }) => setSearch(currentTarget.value);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    useEffect(() => {
        createCurrentProductsList();
    }, [products]);

    useEffect(() => {
        filteredSupplierProduct();
    }, [selectedSupplier]);

    useEffect(() => {
        filteredSearchProduct();
    }, [search]);

    // console.log(currentProducts);
    return (<>
        <Row justifyContent="center" >
            <Column xl={12} className="">
                <div className="input-group my-3">
                    <span className="input-group-text bg-dark text-white"><AiOutlineSearch size={30} /></span>
                    <input type="text" className="form-control" placeholder="Nom produit, catégorie" value={search} onChange={handleChange} />
                </div>
            </Column>
            <Column lg={9} className=" h-100  " >
                <div className="row  scrollbar" >
                    {(currentProducts && currentProducts.length > 0) && currentProducts.map((product, index) => {
                        return (display != "list") ?
                            (<Column md={12} lg={12} xl={12} className=" mb-2" key={product.id}>
                                <ProductList product={product} />
                            </Column>
                            ) : (
                                <Column md={6} lg={4} xl={3} className=" mb-4" key={product.id}>
                                    <ProductCard product={product} />
                                </Column>
                            )
                    }
                    )}
                </div>
            </Column>
            <Column lg={3} xl={3} className="d-none d-lg-block h-100">
                <SelectList
                    data={suppliers}
                    label="Selectionnez un fournisseur..."
                    onChange={handleSelectChange}
                />
                <CartOverview />
            </Column>
        </Row>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

    </>);
}

export default Home;