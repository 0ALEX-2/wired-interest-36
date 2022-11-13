import "./navigation.css"
import { MenuButton,MenuList,MenuItem,Menu,Button } from "@chakra-ui/react"
import { FiChevronDown } from "react-icons/fi"

const Navigation=()=>{

    return(
        <div className="navigation">
            <div>
                Hotels
            </div>
            <div>
                Holiday Homes
            </div>
            <div>
                Things to Do
            </div>
            <div>
                Restaurants
            </div>
            <div>
                Travel Stories 
            </div>
            
               
                <Menu>
  <MenuButton as={Button} rightIcon={<FiChevronDown />}  className="menuBtn">
    More
  </MenuButton>
  <MenuList className="menuList">
    <MenuItem fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Add a Place</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Airlines</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Car Hire</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Cruises</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Flights</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Help Centre</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Package Holidays</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Travel Forums</MenuItem>
    <MenuItem  fontSize="20px" backgroundColor="black" border="1px solid white" color="white">Travellers' Choice</MenuItem>
  </MenuList>
</Menu>
           
        </div>
    )
}
export default Navigation