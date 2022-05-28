import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import Main from "./Main";
import Footer from "./Footer";


export default function App() {

    const [openMenu,setOpenMenu] = React.useState(false);

    function showMenu() {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    }
    
    function closeMenu(){
        setOpenMenu(false);
    }

    return (
        <div className="app">
            <div className='wallpaper'>
                <Header 
                    showMenu={showMenu}
                />
                <Navbar 
                    openMenu={openMenu}
                    closeMenu={closeMenu}
                />
                <Section />
            </div>
            <Main />
            <Footer />
        </div>
    )
}
