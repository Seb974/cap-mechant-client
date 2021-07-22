/**
 * @author [Brian NARBE]
 * @email [brian.narbe@gmail.com]
 * @create date 2021-06-14 16:25:18
 * @modify date 2021-06-16 15:37:07
 * @desc [page pour tester mes applicaitons]
 */

import React, { useState } from 'react';
//wrappers
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/background.css'
const Home = (props) => {
    const [display, setDisplay] = useState(6);
    return (<>
        <div className="container-fluid px-5">
            <div class="input-group my-3 ">
                <span class="input-group-text bg-dark text-white" id="basic-addon1"><AiOutlineSearch size={30} /></span>
                <input type="text" class="form-control p-3" placeholder="Rechechez le nom de votre article" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="row ">
                <div className="col-2">
                    <div className="p-4 shadow p-3 mb-5 bg-body rounded">
                        <h1>Catégorie</h1>
                        <ul class="list-group">
                            <li class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                First checkbox
                            </li>
                            <li class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Second checkbox
                            </li>
                            <li class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Third checkbox
                            </li>
                            <li class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Fourth checkbox
                            </li>
                            <li class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Fifth checkbox
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-3">
                            <div class="card shadow mb-5 bg-body ">
                                <div class="card-header">Dessert</div>
                                <div class="card-body">
                                    <h5 class="card-title">Sushi</h5>
                                    <div class="input-group my-3 ">
                                        <span class="input-group-text bg-dark text-white px-4" id="basic-addon1">-</span>
                                        <input type="number" class="form-control p-3 " aria-label="Username" aria-describedby="basic-addon1" value="6" />
                                        <span class="input-group-text bg-dark text-white px-4" id="basic-addon1">+</span>
                                    </div>
                                </div>
                                <div class="rounded-0 rounded-bottom  btn btn-success py-3">Ajouter <span className="fw-bold mx-2">2</span>  au panier</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;