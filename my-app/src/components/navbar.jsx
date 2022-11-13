import {Link} from "react-router-dom"
import {Flex,Center,Text,Square,Box,Image} from "@chakra-ui/react"
import logo1 from "../logos/logo1.gif"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBellAlert } from "react-icons/hi2";
import {FiHeart} from "react-icons/fi"
import {SlPencil} from "react-icons/sl"
import "./navbar.css"

const Navbar=()=>{

    return(
        <div className="navBar">

 <div className="image">
    <Image src={logo1} alt="logo" width="70px" marginLeft="10px" borderRadius="50%" height="60px"/>
    <Text fontSize={30} fontWeight="bold" color="green">DestinationGuide</Text>
 </div>

<div className="navLeft">
  <div className="navLeftDiv">
    
    <Text> <SlPencil/> Review</Text>
  </div>
  <div className="navLeftDiv">
   
    <Text> <FiHeart/> Trips</Text>
  </div>
  <div className="navLeftDiv">
    
    <Text> <HiOutlineBellAlert/> Alerts</Text>
  </div>
  <div className="signIn">
    <Text>Sign in</Text>
  </div>
  <div className="navLeftDiv">
  
    <Text>  <AiOutlineShoppingCart style={{}}/> Basket</Text>
    </div>
    </div> 
  </div>

    )
}
export default Navbar