import { DashHead } from "../components/styles";
import {MyButton,Counter} from "../components/index";
import { Header } from "../module/index";
const Dashboard = () =>{
    return(
        <>
        <Header/>
        <DashHead>Welcome to dashboards</DashHead>
        <MyButton name=" My Button" class="variant" />
        <Counter/>
        </>
    )
}

export default Dashboard;