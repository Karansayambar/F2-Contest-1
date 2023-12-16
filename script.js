const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const newdata = data.filter(element => element.profession == "developer");
  console.log(newdata);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name");
  const agestring = prompt("Enter age");
  const profession = prompt("Enter profession");

  const age = parseInt(agestring);
  const newDeveloper = {name, age, profession};
  data.push(newDeveloper);
  console.log(data)
}

// 3. Remove Admins
function removeAdmin() {
  const newdata = data.filter(element => element.profession !== 'admin');
  console.log(newdata);
}

// 4. Concatenate Array
function concatenateArray() {
  const arr = [
    { name: "bob", age: 22, profession: "designer" },
    { name: "alice", age: 30, profession: "developer" },
    { name: "charlie", age: 28, profession: "admin" },
  ];

  const concat =[...data,...arr];
  console.log(concat);
}

// 5. Average Age
function averageAge() {
  const sum = data.reduce((acc,curr) => acc = acc + curr.age, 0);
  const avg = sum / data.length;
  console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.filter(person => person.age > 25);
  console.log(above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions = new Set(data.map(person => person.profession));
  const professionsArray = Array.from(uniqueProfessions);
  console.log(uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  let indx = data.findIndex(person => person.name == 'john');

  if(indx !== -1){
    data[indx].profession = "Manager";
  }else{
    console.log("john is not present in array");
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  const Professions = data.map(person => person.profession);

  const professionsArray = Array.from(Professions);

  console.log(professionsArray);
}
