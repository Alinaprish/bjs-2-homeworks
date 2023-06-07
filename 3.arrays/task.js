function compareArrays(arr1, arr2) {
  const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((number, index) => number);
  return true;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = arr.filter(user => user.gender === "мужской").filter(user => user.gender === "женский").map(user => user.age).reduce((acc, item, index, users)=> {
    acc+=item;
    if(index === users.length - 1){
        return acc / users.length;
    }
    return acc;
  }, 0)
}