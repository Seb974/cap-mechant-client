import { isDefined, isDefinedAndNotVoid } from "./utils";

const dayNames = [
    {value: 1, label: "Lu"},
    {value: 2, label: "Ma"},
    {value: 3, label: "Me"},
    {value: 4, label: "Je"},
    {value: 5, label: "Ve"},
    {value: 6, label: "Sa"},
];

export const getWeekDays = () => {
    return [
        {value: 1, label: "LUNDI", isFixed: false},
        {value: 2, label: "MARDI", isFixed: false},
        {value: 3, label: "MERCREDI", isFixed: false},
        {value: 4, label: "JEUDI", isFixed: false},
        {value: 5, label: "VENDREDI", isFixed: false},
        {value: 6, label: "SAMEDI", isFixed: false},
        {value: 0, label: "DIMANCHE", isFixed: false}
    ];
};

export const getStringDate = date => {
    return date.getFullYear() + "-" + getTwoDigits(date.getMonth() + 1) + "-" + getTwoDigits(date.getDate());
};

export const getArchiveDate = date => {
    return "" + getTwoDigits(date.getDate()) + getTwoDigits(date.getMonth() + 1) + date.getFullYear();
};

export const getTwoDigits = number => {
    return number < 10 ? '0' + number : number;
};

export const isSameDate = (date1, date2) => date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();

export const isBetween = (date, start, end) => {
    return new Date(date) >= new Date(start) && new Date(date) <= new Date(end);
};

export const getDateFrom = (date, nbDaysToAdd = 0, hour = 9) => {
    return new Date(date.getFullYear(), date.getMonth(), (date.getDate() + nbDaysToAdd), hour, 0, 0);
};

export const getDayName = date => dayNames.find(d => d.value === date.getDay()).label;