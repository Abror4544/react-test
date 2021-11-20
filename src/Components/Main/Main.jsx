import Intro from "../Intro/Intro";
import Modul from "../Modul/Modul";

//SASS
import './Main.scss'

function Main(){
    return(
        <div className='main'>
        <Intro/>
        <Modul/>
        </div>
    )
}

export default Main