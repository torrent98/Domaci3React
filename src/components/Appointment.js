import React from 'react'
import { Button } from './Button'

function Appointment({obj, deleteAnAppointment}) {
    return (
        <>
        <li className='cards__item'>
          <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap1' data-category={'Appointment'}>
              <img
                className='cards__item__img'
                src={obj.src}
              />
            </figure>
            <div className='cards__item__info'>
            <h5 className='cards__item__title1'>{obj.name}</h5>
            <p>{obj.date}</p>
                <div className='star-container'>
                  <ul>
                    <li>
                      <Button 
                        className='btns' 
                        buttonStyle='btn--primary' 
                        buttonSize='btn--medium' 
                        link={'/appointments'} 
                        id = {obj.id}
                        onClick={deleteAnAppointment}
                      >
                        CANCEL APPOINTMENT
                      </Button>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </li>
      </>
    )
}

export default Appointment