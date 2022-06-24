class employee {
    constructor(id,firstName,lastname,age,workYears) {
    this.id = id;
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
    this.workYears = workYears;
}
getposition() {
if(this.workYears<2) return 'junior';
else if(this.workYears<5) return 'middle';
else return 'senior';
}
}
let John = new employee(1,'john','lastname',21,2);
let BOb = new employee(2,'bob','lastname',20,7);
document.getElementById("id").innerHTML ="john is " + john.getposition();
document.getElementById("id1").innerHTML ="bob is " + Bob.getposition();