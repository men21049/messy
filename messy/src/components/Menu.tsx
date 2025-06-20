import {useState} from "react";
import menuItems from "../data/menuItems";

interface Props {
    onSetActive: (item:string) => void;
}

function Menu({onSetActive}:Props) {
     const [activeTab, setActiveTab] = useState('setup');
    
    // Get the menu items array by calling the function
    const items = menuItems();
    
    return (
        <nav className="space-y-2">
            {items.map((item) => {
                const IconComponent = item.icon;
                return (
                    <button
                        key={item.id}
                        onClick={() => {
                            setActiveTab(item.id);
                            onSetActive(item.id);
                            }
                        }
                        className={`nav-link${
                            activeTab === item.id 
                                ? ' active'
                                : '' 
                        }`}
                    >
                        <IconComponent className="mr-3" size={20} />
                        {item.label}
                    </button>
                );
            })}
        </nav>
    );
};

export default Menu;