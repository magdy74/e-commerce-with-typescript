import React from "react";
import './homepage-components.css'
import DirectoryMenu from "../../components/directory-menu/directory-menu";

// title, img, id
const HomePage = () =>(
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <DirectoryMenu/>
    </div>

)

export default HomePage;