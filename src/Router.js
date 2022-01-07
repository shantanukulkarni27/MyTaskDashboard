import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs } from "./page/index";
import { Header } from "./module/index";


const Router = (props) =>{
    console.log("my data is",{props})
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Header/>} />
        </Routes>
        <Routes>
            <Route path="" element={<Dashboard/>} />
        </Routes>
        <Routes>
            <Route path="/aboutUs"  element={<AboutUs data={props.data} />} />
        </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default Router;