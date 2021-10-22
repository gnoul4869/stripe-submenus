import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const { isSidebarShown, hideSidebar } = useGlobalContext();
    return (
        <aside
            className={`${
                isSidebarShown ? 'sidebar-wrapper show' : 'sidebar-wrapper'
            }`}
        >
            <div className="sidebar">
                <button className="close-btn" onClick={hideSidebar}>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    {sublinks.map((sublink, index) => {
                        const { links, page } = sublink;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((link, index) => {
                                        const { label, icon, url } = link;
                                        return (
                                            <a href={url} key={index}>
                                                {icon} {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
