function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

new Student

new Student

new Student

Student.prototype.setSubject = function (subjectName) {
    subjectName = subject;
}

Student.prototype.addMarks = function (...marks) {
    Student.hasOwnProperty('marks');
    marks = [...marks];
}

Student.prototype.getAverage = function () {
    Student.hasOwnProperty('marks');
    [...marks].reduce((acc, item, index, arr)=> {
        acc+=item;
        if(index === marks.length - 1){
            return acc / marks.length;
        }
        return acc;
    }, 0)
}

Student.prototype.exclude = function (reason) {
    delete Student.subject;
    delete Student.marks;
    this.excluded = reason;
}
