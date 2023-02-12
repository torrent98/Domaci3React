import React from 'react';
import Appointment from '../Appointment';
import '../Appointments.css'
import { Button } from '../Button';

function Appointments({data, deleteAnAppointment}) {

    const headingStyle = {
        'color': '#fff',
        'margin-top': '-50px'
    }

    return (
        <div>
        {data.length == 0 ? 
            <>
                <div className='cards1'>
                    <h1 style={headingStyle}>You do not have any appointments!</h1>
                    <p className='app-text'>Make one now!</p>
                    <div className='main-btns'>
                        <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        link='/services'
                        >
                        CHECK OUR SERVICES
                        </Button>
                    </div>
                </div>
            </> : 
            <>
            <div className='cards2'>
                <h1>YOUR APPOINTMENTS</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items1'>
                            {
                                data.map(item => (<Appointment obj={item} deleteAnAppointment={deleteAnAppointment} />))
                            }
                        </ul>
                    </div>  
                </div>  
            </div>
            </>
        }
      </div>
    )
}

export default Appointments