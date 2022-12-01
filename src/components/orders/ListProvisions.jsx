/*
Author: <Brian NARBE> (bnprorun@gmail.com)
ListOrders.jsx (c) 2021
Desc: component list orders
Created:  2021-08-18T12:04:46.143Z
Modified: 2021-08-24T14:40:56.067Z
*/

import React, { useEffect, useState } from "react";
// import { findCurrents} from '../../api/ProvisionApi';
import ProvisionApi from "../../api/ProvisionApi";
import { isDefinedAndNotVoid } from "../../functions/utils";
import Accordion from "../bootstrap/Accordion";
import CustomPagination from "../bootstrap/CustomPagination";
import { Spinner } from "react-bootstrap";

const ListProvisions = (props) => {
  const [load, setLoad] = useState(false);
  const [provisions, setProvisions] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchProvisions = async () => {
    try {
      const data = await ProvisionApi.findCurrents(currentPage);
      setProvisions(
        data["hydra:member"].sort((a, b) =>
          new Date(a.orderDate) < new Date(b.orderDate) ? 1 : -1
        )
      );
      setTotalItems(data["hydra:totalItems"]);
      setLoad(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoad(false);
    fetchProvisions();
  }, []);

  useEffect(() => {
    setLoad(false);
    fetchProvisions();
  }, [currentPage]);
  //   console.log(totalItems);
  return isDefinedAndNotVoid(provisions) && load ? (
    <>
      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(totalItems / 25)}
      />
      <Accordion provisions={provisions} setProvisions={setProvisions} />
    </>
  ) : (
    <div className=" d-flex justify-content-center mt-3">
      <Spinner animation="border" />
    </div>
  );
};

export default ListProvisions;
