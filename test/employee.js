class employee {
    constructor(id,firstName,lastname,age,salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
    this.salary = salary;
    }
    getNetSalary() {
    return this.salary*0.8;
    }
    }
    let john = new employee(1,'john','lastname',21,100);
    let Bob = new employee(2,'bob','lastname',20,100);
    document.getElementById("id").innerHTML ="john's net salary is " +
    john.getNetSalary();
    document.getElementById("id1").innerHTML ="bob's net salary is " + bob.
    getNetSalary();