import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [isSubmenuShown, setIsSubmenuShown] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    const showSidebar = () => {
        setIsSidebarShown(true);
    };

    const hideSidebar = () => {
        setIsSidebarShown(false);
    };

    const showSubmenu = (text, coordinates) => {
        const page = sublinks.find((sublink) => sublink.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuShown(true);
    };

    const hideSubmenu = () => {
        setIsSubmenuShown(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarShown,
                showSidebar,
                hideSidebar,
                isSubmenuShown,
                showSubmenu,
                hideSubmenu,
                location,
                page,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
