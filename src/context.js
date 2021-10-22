import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [isSubmenuShown, setIsSubmenuShown] = useState(true);

    const showSidebar = () => {
        setIsSidebarShown(true);
    };

    const hideSidebar = () => {
        setIsSidebarShown(false);
    };

    const showSubmenu = () => {
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
