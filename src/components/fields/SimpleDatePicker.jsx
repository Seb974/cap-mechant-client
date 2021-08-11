/*
Author: <Brian NARBE> (bnprorun@gmail.com)
SimpleDatePicker.jsx (c) 2021
Desc: Datepicker
Created:  2021-08-05T11:05:44.031Z
Modified: 2021-08-05T12:08:25.831Z
*/

import 'flatpickr/dist/themes/material_blue.css';
import { French } from "flatpickr/dist/l10n/fr.js";
import React, { useEffect } from 'react';
import Flatpickr from 'react-flatpickr';

const SimpleDatePicker = ({selectedDate, minDate = new Date(), onDateChange, label="Date", className = "", name}) => {

    return (
        <>
            <label htmlFor="date" className="date-label">{ label }</label>
            <Flatpickr
                name="date"
                value={ selectedDate }
                onChange={ onDateChange }
                className={`form-control ${ className }`}
                options={{
                    minDate: `${minDate}`,
                    dateFormat: "d/m/Y",
                    locale: French,
                    disable: [ date => date.getDay() === 0]
                }}
            />
        </>
    );
}
 
export default SimpleDatePicker;