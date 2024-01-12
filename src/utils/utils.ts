import moment from "moment";
import {ru} from "/src/utils/momentLocalization";

export const pluralClinicalTrial = (value) => {
    if (value == -1) {
        return "Нет"
    } else if (value == 0) {
        return "Неуспешны"
    }

    return "Успешны"
}

export const ifDateNull = (value) => {
    if (value == null) {
        return null
    } else 

    return moment(value).locale(ru()).format("D MMMM HH:mm")
}