let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
}

function addToObj(personObj, key, value) {
    personObj[key] = value;
  }
  console.log(addToObj(obj, 'homeState', 'tennessee'))