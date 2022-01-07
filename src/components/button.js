import {Btn} from "./styles"
const MyButton = (props) =>{
    return(
        <Btn className={props.class}>{props.name}</Btn>
    )
}

export default MyButton;