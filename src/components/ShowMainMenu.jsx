import React, { useState } from 'react';

function ShowMainMenu() {
    const [showMainMenu, setShowMainMenu] = useState(false);

    const toggleMainMenu = () => {
        setShowMainMenu(!showMainMenu);
    };

    return { showMainMenu, toggleMainMenu };
}

export default ShowMainMenu;
