import React from "react";
import MenuItem from "../menu-item/menu-item";
import './directory-menu.css'

class DirectoryMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[
            {
                id:1,
                title:'HATS',
                img:"https://i.ibb.co/cvpntL1/hats.png"
            },
            {
                id:2,
                title:'JACKETS',
                img:'https://i.ibb.co/px2tCc3/jackets.png'
            },
            {
                id:3,
                title:'SHOES',
                img:'https://i.ibb.co/0jqHpnp/sneakers.png'
            },
            {
                id:4,
                title:'WOMENS',
                img:'https://i.ibb.co/GCCdy8t/womens.png'
            },
            {
                id:5,
                title:'MENS',
                img:'https://i.ibb.co/R70vBrQ/men.png'
            }
        ]}
    }

   render(){
    return(
    <div className='directory-menu'>
        {this.state.sections.map(({title, id, img}) => 
        (<MenuItem title={title} id ={id} img={img}/>))}
    </div>
    
    )
   } 
}

export default DirectoryMenu;