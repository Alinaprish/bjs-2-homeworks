function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        this.marks = marks;
    }
    else {
        this.marks = this.marks.concat(marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined){
        return 0;}
        return this.marks.reduce((acc, item, index) => {
            acc+=item;
            if(index === this.marks.length - 1){
                return acc / this.marks.length;
            }
            return acc;
        }, 0)
}


Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
