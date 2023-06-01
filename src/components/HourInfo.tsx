const HourInfo = ({time,icon,temp_c,info,location}:{time:any,icon:any,temp_c:any,info:any,location:any}) => {
  return (
    <div className="card info-card size-card-hour">
            <div className="card-body">
            <h3 className="card-title">{ 
                time.slice(-5)
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
            </div>
        </div>
  )
}

export default HourInfo