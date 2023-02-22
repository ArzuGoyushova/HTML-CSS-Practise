// let group = {
//     name: "P515",
//     groupSize: 4,
//     students: [],
//     findById: function (id) {
//         let student = this.students.find(s => s.id == id);
//         if (student != undefined) {
//             return student;
//         } return null;
//     },
//     addStudent: function (student) {
//         if (this.groupSize > this.students.length) {
//             this.students.push(student);
//             console.log(student.name);
//             return;
//         } else {
//             console.log("heddini ashma");
//         }
//     },
//     updateStudent: function (id, student) {
//         let existStudent = this.findById(id);
//         if (existStudent) { //truthy gorub true qaytarir, obyekt oldugundan
//             existStudent.name = student.name??existStudent.name;
//             existStudent.surname = student.surname??existStudent.surmame;
//             existStudent.age = student.age==undefined?existStudent.age:student.age;
//             return;
//         }
//     },

//     deleteStudent: function (id) {
//         let student = this.findById(id);
//         if (student) { //truthy gorub true qaytarir, obyekt oldugundan
//             this.students = this.students.filter(s => s.id != student.id);
//             return;
//         }
//     },
//     getAll: function () {
//         for (const stu of this.students) {
//             console.log(`${stu.name} ${stu.surname} ${stu.age}`);
//         }
//     },
// }


// const stu1 = {
//     id: "1",
//     name: "Aytac",
//     surname: "Veyisli",
//     age: 20
// }
// const stu2 = {
//     id: "2",
//     name: "Ponchik",
//     surname: "Unlu",
//     age: 22
// }
// const stu3 = {
//     id: "3",
//     name: "Taehyung",
//     surname: "Kim",
//     age: 27
// }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.getAll();
// group.updateStudent(3,{
//     name: "Taehyungiee",
//     surname: "Kimmm",
// });
// group.getAll();


// class Groupp{
//     constructor(groupName, groupSize){
//         this.groupName=groupName,
//         this.groupSize=groupSize;
//     }
//     groupInfo(){
//         console.log(this.groupName);
//     }
//     getName=()=>{
//         console.log("getnn");
//     }
//     static getSome(){
//         console.log("bla bla");
//     }
//     get(){
//         return this.groupName;
//     }
// }

// class Student extends Groupp{
//     constructor(groupName, groupSize, name, surname){
//         super(groupName, groupSize);
//         this.name=name;
//         this.surmame=surname;
//     }
// }
// // const groupp=new Groupp("dfs");
// // groupp.groupInfo();

// const student=new Student("p515",20,"aci","acili");
// console.log(student);
// student.getName();
// console.log(student.get());
// Groupp.getSome();


// let numbers = [1,2,10,12,3];

// Array.prototype.getLastValue=function () {
//     return this[this.length-1];
// }

// console.log(numbers.getLastValue());
//please don't touch the mouse or keyboard during the lessons

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      console.log(this)
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      console.log('hi')
      return skills[index]
    }
  }
  
  console.log(Person.favoriteSkill())
  
  class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      console.log(this)
      return info
    }
  }
  
  const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1)
  console.log(s2)
  
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  
  console.log(s2.saySomething())
  console.log(s2.getFullName())
  console.log(s2.getPersonInfo())