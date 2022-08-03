import { WiSunrise, WiDaySunny } from "react-icons/wi";
import { BsMoonStars } from "react-icons/bs";

export default function TimeOfDayIcon ({timeOfDay}) {
  switch(timeOfDay.toLowerCase()) {
    case 'morning':
      return <WiSunrise/>
    case 'daytime':
      return <WiDaySunny/>
    case 'evening':
      return <BsMoonStars/>
    default:
      return <WiDaySunny/>
  }
  
}