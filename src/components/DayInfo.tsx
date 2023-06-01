import {useState} from 'react';
import ModalInfo from './ModalInfo';

const DayInfo = ({ day,icon,info,temp_c,location, infoByHours }: { day:any,icon: any , location: any , info: any, temp_c:any, infoByHours:any}) => {
    const [show, setShow] = useState(false);
    return (
        <div className="card info-card">
            <div className="card-body">
            <h3 className="card-title">{day ? 
            new Date(day).toLocaleDateString('en-US', { weekday: 'long' }):
            'Now'
            } </h3>
                <div className='day-info'>
                    <img src={icon}/>
                    <div>
                       <h5 className="card-title">{temp_c}°C</h5>                       
                       <h6 className="card-title">
                       <i className='fa fa-map-marker fa-lg me-2'></i> 
                        {location.name}
                        </h6>
                        <p className="card-text">{info}</p>   
                    </div>
                </div>
                <button onClick={()=>setShow(!show)} className="btn btn-primary mt-4 btn-radius">See more info</button>
                {show && <ModalInfo open={show} onClose={()=>setShow(!show)} data={infoByHours} day={day} location={location} />}
            </div>
        </div>
    )
}

export default DayInfo