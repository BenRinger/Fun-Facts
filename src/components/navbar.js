import React, {Component} from "react";
import {NavLink} from 'react-router-dom'
class Navbar extends Component{
    render() {
        return(
            <nav className="">
            <div className="container">
                <ul className="right">
                    <button> <NavLink to='/App'>Home</NavLink></button>
                    <button> <NavLink to='/fact1'>Fact 1</NavLink></button>
                    <button> <NavLink to='/fact2'>Fact 2</NavLink></button>
                    <button className="btn"> <NavLink to='/fact3'>Fact 3</NavLink></button>
                </ul>
            </div>
        </nav>
        )
    }
}



export default Navbar



// const Navbar = (props) => {

//     return (
//         <nav className="nav-wrapper red darken-3">
//             <div className="container">
//                 <a className="brand-logo">Poke'Times</a>
//                 <ul className="right">
//                     <li><Link to="/home">Home</Link></li>
//                     <li><NavLink to="/about">About</NavLink></li>
//                     <li><NavLink to="/contact">Contact</NavLink></li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }