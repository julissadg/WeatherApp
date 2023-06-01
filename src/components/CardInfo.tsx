import DayInfo from "./DayInfo";

const CardInfo = ({ data }: { data: any }) => {
  const {
    forecast = {},
    current = {},
    location = {}
  } = data;

  const {
    forecastday = {}
  } = forecast;

  const {
    condition={}
} = current;

  
  return (
    <div className="box-glass">
      <div className="card info-card wrapper">
        <DayInfo day={''} icon={condition.icon} temp_c={current.temp_c} info={condition.text} location={location} infoByHours={forecastday[0].hour}/>
        {Object.keys(forecastday).slice(1).map((keyName, i) => (
          <DayInfo key={i} day={forecastday[i]?.date}
            icon={forecastday[i]?.day.condition.icon}
            temp_c={forecastday[i]?.day.avgtemp_c}
            info={forecastday[i]?.day.condition.text}
            location={location}
            infoByHours={forecastday[i]?.hour}
            />
        ))}
      </div>
    </div>
  )
}

export default CardInfo