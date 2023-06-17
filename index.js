const getCurrentDay = () => {
    const days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    
    return days[currentDayIndex];
  };
  
  const currentDay = getCurrentDay();
  
  switch (currentDay) {
    case "სამშაბათი":
    case "ხუთშაბათი":
      console.log("სამშაბათი და ხუთშაბათი დღეები არის გაკვეთილები");
      break;
    default:
      console.log(currentDay + " დღე არის სამუშაო დღე");
      break;
  }
  