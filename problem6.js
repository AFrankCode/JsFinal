function getPlace(highScores, newScore) {
    let place = 1;
  
    for (let i = 0; i < highScores.length; i++) {
      if (newScore > highScores[i]) {
        return ` ${place}${getOrdinalSuffix(place)} place!`;
      }
      place++;
    }
  
    return `${place}${getOrdinalSuffix(place)} place!`;
  }

  function getOrdinalSuffix(num) {
    if (num === 11 || num === 12 || num === 13) {
      return 'th';
    } else {
      const lastDigit = num % 10;
      switch (lastDigit) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  }

  console.log(getPlace([60, 30, 10], 90));