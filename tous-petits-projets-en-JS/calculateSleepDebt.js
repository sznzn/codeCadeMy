const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 6;
      break;
      case 'wednesday':
      return 5;
      break;
      case 'thursday':
      return 6.5;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 10;
      break;
      case 'sunday':
      return 7.5;
      break;
      default:
      return 'erreur';
      break;
    }
  }
  console.log(getSleepHours('saturday'));
  const getActualSleepHours = () =>{
   return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
  }
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = (idealHours) => {
    return idealHours*7 ;
  }
  console.log(getActualSleepHours()-getIdealSleepHours(7.5));
  
  const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours(7.5);
   if(actualSleepHours === idealSleepHours){
    return console.log('You got the perfect sleep!');
     
   }else if(actualSleepHours > idealSleepHours){
     return console.log('You got '+ (actualSleepHours-idealSleepHours) +' more sleep than neened');
   }else if(actualSleepHours < idealSleepHours){
     return console.log('You should get some rest, plus ' + (idealSleepHours - actualSleepHours) + ' hours'); 
   }
  }
  calculateSleepDebt();