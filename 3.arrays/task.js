function compareArrays(arr1, arr2) {
  const result = (arr1, arr2) => arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index]);
  return result;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = arr.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, users)=> {
    acc+=item;
    if(index === users.length - 1){
        return acc / users.length;
    }
    return acc;
  }, 0)
return result;
}