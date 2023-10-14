import { RiHome7Fill, RiApps2Line, RiSettingsLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";


export const constant = [
    {
        id: 0,
        text: 'Dashboard',
        icon: (style) => <RiHome7Fill className={style} />
    },
    {
        id: 1,
        text: 'Explore City',
        icon: (style) => <RiApps2Line className={style} />
    },
    {
        id: 2,
        text: 'Ticket',
        icon: (style) => <CiMail className={style} />
    },
    {
        id: 3,
        text: 'Favorite',
        icon: (style) => <BsHeart className={style} />
    },
    {
        id: 4,
        text: 'Settings',
        icon: (style) => <RiSettingsLine className={style} />
    },

]