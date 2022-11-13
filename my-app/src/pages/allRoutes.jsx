
import {Route,Routes} from "react-router-dom"
import LandingPage from "./landingPage"

const AllRoutes=()=>{

    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes