import React from "react";
import MenuItem from "../menu-item/menu-item";
import './directory-menu.css'
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";


const DirectoryMenu = ({sections}) =>(
    <div className='directory-menu'>
        {sections.map(({title, id, img, linkUrl}) => 
        (<MenuItem title={title} key ={id} id={id} img={img} linkUrl={linkUrl}/>))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);