import React from "react";
import './homepage-components.css'
import DirectoryMenu from "../../components/directory-menu/directory-menu";
import Header from "../../components/header/header";

// title, img, id
const HomePage = () =>(
    <div className='homepage'>
        <Header/>
        <DirectoryMenu/>
    </div>

)

export default HomePage;