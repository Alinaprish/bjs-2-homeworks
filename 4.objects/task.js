function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}


this.Student.prototype.setSubject = function (subjectName) {
    this.subjec = subjectName;
}


this.Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        this.marks = marks;
    }
    else {
        this.marks = this.marks.concat(marks);
    }
}

this.Student.prototype.getAverage = function () {
    if (this.marks === undefined){
        return 'Нет оценок';
    }else {
        return this.marks.reduce((acc, item, index, arr) => {
            acc+=item;
            if(index === marks.length - 1){
                return acc / marks.length;
            }
            return acc;
        }, 0)
}
}

this.Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete thus.marks;
    this.excluded = reason;
}
