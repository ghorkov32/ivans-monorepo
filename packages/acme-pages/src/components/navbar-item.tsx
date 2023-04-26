import {FC} from "react";

export interface NavItem {
    href: string;
    text: string;
    icon: string;
    childrenItems?: NavItem[]
}

const NavbarItem: FC<NavItem> = ({text, icon, href, childrenItems} ) => {
    return <>
        <a

            href={href}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
            <span className="mr-2">{icon}</span>
            {text}
        </a>
        {
            childrenItems && (
            <div className="ml-8">
                {childrenItems.map((child) => (
                    <NavbarItem
                        key={child.text}
                        text={child.text}
                        href={child.href}
                        icon={child.icon}
                        childrenItems={child.childrenItems}/>
                ))}
            </div>
            )
        }
    </>;
}

export default NavbarItem