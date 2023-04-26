import type { FC } from 'react'
import {useState} from "react";
import NavbarItem, {NavItem} from "./navbar-item";

export interface NavbarProps {
    items?: NavItem[]
}


const Navbar: FC<NavbarProps> = ({ items }) => {
    const [language, setLanguage] = useState('en-us');

    let defaultNavItems: NavItem[] = [];

    if (!items){
        defaultNavItems = [
            {
                text: 'About me',
                href: '/about-me',
                icon: '?',
            },
            {
                text: 'Showcase Apps',
                href: '',
                icon: '?',
                childrenItems: [
                    {
                        text: 'About me',
                        href: '/about-me',
                        icon: '?',
                    },
                    {
                        text: 'About me',
                        href: '/about-me',
                        icon: '?',
                    },
                ]
            },
            {
                text: 'About them',
                href: '/about-me',
                icon: '?',
            },
        ]
    }

    const handleLanguageChange = () => {
        setLanguage(language === 'en-us' ? 'es-ar' : 'en-us');
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">My App</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                {
                    defaultNavItems &&
                    <div className="text-sm lg:flex-grow">
                        {
                            defaultNavItems.map((item) =>  (
                                <NavbarItem
                                    key={item.text}
                                    text={item.text}
                                    href={item.href}
                                    icon={item.icon}
                                    childrenItems={item.childrenItems}/>
                            ))
                        }
                    </div>
                }
                <div>
                    <button
                        type="button"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLanguageChange}
                    >
                        {language}
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar
