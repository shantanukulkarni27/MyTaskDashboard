import { DashHead } from "../components/styles";
import {MyButton} from "../components/index";
import { Header } from "../module/index";
const Dashboard = () =>{
    return(
        <>
        <Header/>
        <DashHead>Welcome to dashboards</DashHead>
        <MyButton name="myButton" class="variant" />
        </>
    )
}

export default Dashboard;