/*
Author: <Brian NARBE> (bnprorun@gmail.com)
sort.js (c) 2021
Desc: description
Created:  2021-08-20T12:01:45.994Z
Modified: 2021-08-24T14:40:57.446Z
*/
import Moment from "moment";

export const sortingOrder = (data) => {
  const dateList = [];
  data.map((value, index) => {
    const check = dateList.findIndex(
      (element) => element === value.provisionDate
    );
    if (check === -1) dateList.push(value.provisionDate);
  });
  return dateList;

//   dateList.map((value, index) => {
//     if (index === 0) {
//     const test = data.filter((product) => product.deliveryDate === value);
//     console.log(test);
//     }
    
//   });
};
