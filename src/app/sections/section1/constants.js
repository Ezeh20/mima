import { CiLocationOn } from "react-icons/ci";
import { PiCalendarBlankThin } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";

const locationOption = ["England", "France", "Nigeria", "Ghana"];
const quantityOption = ["3 adults", "1 adult", "5 adults", "2 adults and 2 kids"];

export const constants = [
    {
        id: 0,
        placeholder: 'Where Are You Going?',
        readOnly: true,
        option: locationOption,
        type:'text',
        icon: (style) => <CiLocationOn className={style} />
    },
    {
        id: 1,
        placeholder: 'Check-in Date',
        readOnly: false,
        type:'date',
        icon: (style) => <PiCalendarBlankThin className={style} />
    },
    {
        id: 2,
        placeholder: 'Quantity',
        readOnly: true,
        option: quantityOption,
        type:'text',
        icon: (style) => <RiUser3Line className={style} />
    },
]