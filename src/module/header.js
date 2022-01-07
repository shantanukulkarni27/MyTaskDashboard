import { DashAnchor,DashUl,DashLi } from "../components/styles";

const header = () =>{
    return(
        <div>
            <DashUl>
                <DashLi><a href="#">Dashboard</a></DashLi>
                <DashLi><a href="/contact" >Contact</a></DashLi>
                <DashLi><a href="/aboutUs">About us</a></DashLi>
            </DashUl>

        </div>
    )
}

export default header;