let group = {
    name: "P515",
    groupSize: 4,
    students: [],
    findById: function (id) {
        let student = this.students.find(s => s.id == id);
        if (student != undefined) {
            return student;
        } return null;
    },
    addStudent: function (student) {
        if (this.groupSize > this.students.length) {
            this.students.push(student);
            console.log(student.name);
            return;
        } else {
            console.log("heddini ashma");
        }
    },
    updateStudent: function (id, student) {
        let existStudent = this.findById(id);
        if (existStudent) { //truthy gorub true qaytarir, obyekt oldugundan
            existStudent.name = student.name??existStudent.name;
            existStudent.surname = student.surname??existStudent.surmame;
            existStudent.age = student.age==undefined?existStudent.age:student.age;
            return;
        }
    },

    deleteStudent: function (id) {
        let student = this.findById(id);
        if (student) { //truthy gorub true qaytarir, obyekt oldugundan
            this.students = this.students.filter(s => s.id != student.id);
            return;
        }
    },
    getAll: function () {
        for (const stu of this.students) {
            console.log(`${stu.name} ${stu.surname} ${stu.age}`);
        }
    },
}


const stu1 = {
    id: "1",
    name: "Aytac",
    surname: "Veyisli",
    age: 20
}
const stu2 = {
    id: "2",
    name: "Ponchik",
    surname: "Unlu",
    age: 22
}
const stu3 = {
    id: "3",
    name: "Taehyung",
    surname: "Kim",
    age: 27
}

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.getAll();
group.updateStudent(3,{
    name: "Taehyungiee",
    surname: "Kimmm",
});
group.getAll();


class Groupp{
    constructor(groupName, groupSize){
        this.groupName=groupName,
        this.groupSize=groupSize;
    }
    groupInfo(){
        console.log(this.groupName);
    }
    getName=()=>{
        console.log("getnn");
    }
    static getSome(){
        console.log("bla bla");
    }
    get(){
        return this.groupName;
    }
}

class Student extends Groupp{
    constructor(groupName, groupSize, name, surname){
        super(groupName, groupSize);
        this.name=name;
        this.surmame=surname;
    }
}
// const groupp=new Groupp("dfs");
// groupp.groupInfo();

const student=new Student("p515",20,"aci","acili");
console.log(student);
student.getName();
console.log(student.get());
Groupp.getSome();


let numbers = [1,2,10,12,3];

Array.prototype.getLastValue=function () {
    return this[this.length-1];
}

console.log(numbers.getLastValue());
//please don't touch the mouse or keyboard during the lessons
