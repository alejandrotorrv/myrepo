function person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
}
Person.prototype.calculateAge = function() {
    const diff = Date.now - this.birthday.getTime();
    const epoch = new Date(diff);
    return Math.abs(epoch.getUTCFullYear - 1970);
}

Perosn.prototype.getsFullName = function() {
    return `${this.firstname} ${this.lastname}`; 
}