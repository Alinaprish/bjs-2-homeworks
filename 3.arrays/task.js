function compareArrays(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, users)=> {
    acc+=item;
    if(index === users.length - 1){
        return acc / users.length;
    }
    return acc;
  }, 0)
  return result;
}