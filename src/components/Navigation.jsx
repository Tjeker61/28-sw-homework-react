import NavItem from "./NavItem.jsx";
import {navItems} from '../utils/constants.js'

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {navItems.map(item => <NavItem itemTitle={item} />)}
            </ul>
        </nav>
    );
};

export default Navigation;