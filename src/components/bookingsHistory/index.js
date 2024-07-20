import { BiLeftArrowAlt } from "react-icons/bi";
import emptypic from '../../emptypic.png'
import { Link } from "react-router-dom";
import './history.css'

const BookingsHistory=()=>{
    return (
        <div className="history-container">
            <div className="top">
                <BiLeftArrowAlt size={35}/>
                <h1 className="history-heading">Puja History</h1>
            </div>
            <div className="bottom">
                <img src={emptypic} alt='empty-image' className="history-empty-logo"/>
                <h1 className="head">No Puja has been booked you yet</h1>
                <p className="description">Book your Puja online at Popular Temples of India.<br/> Panditji will take sankalp with your name and gotra <br/>during the Puja</p>
                <Link to='/bookingpage' className="l"><button className="book-btn">Book Pooja Now</button></Link>
            </div>
        </div>
    )
}
export default BookingsHistory