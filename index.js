
let person = { name: "Akinade Adepoju", age: 40, sex: "Male", location: "Abuja" };

let people = [
    { name: "Akinade Adepoju", age: 40, sex: "Male", location: "Abuja" },
    { name: "Alice Adepoju", age: 32, sex: "Female", location: "Abuja" }
];

function printPeople() {
    let gender = "";
    let genderF = "";
    let sex = people[0].sex;
    let sexF = people[1].sex;

    if (sex === "Male")
        gender = "He ";
    else gender = "She ";

    if (sexF !== "Female")
        genderF = "He ";
    else genderF = "She ";

    console.log(people[0].name + " is " + people[0].age + " years old. " + gender + "lives in " + people[0].location);
    console.log(people[1].name + " is " + people[1].age + " years old. " + genderF + "lives in " + people[1].location);

}

function printPerson() {
    for (let i = 0; i < 3; i++) {
        console.log(person.name);
        console.log(person.age);
        console.log(person.sex);
        console.log(person.location);
    }
}

printPeople();
// printPerson();
