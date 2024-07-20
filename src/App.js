import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import Navbar from './components/Navbar';
import BookingsHistory from './components/bookingsHistory';
import BookingPage from './components/BookingPage';
import PujaBooking from './components/PujaBooking';
import PujaPackages from './components/PujaPackages';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/bookingpage' component={BookingPage}/>
        <Route exact path='/epuja/history' component={BookingsHistory}/>
        <Route exact path='/pujabooking' component={PujaBooking}/>
        <Route exact path='/pujapackages' component={PujaPackages}/>
        <Route exact path='/bookingform' component={BookingForm}/>
      </Switch>
    </>
  );
}

export default App;
