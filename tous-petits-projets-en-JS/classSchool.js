class School{
    constructor(name, numberOfStudents, level){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      typeof(num) === "number"?this._numberOfStudents = num:"Invalid input: numberOfStudents must be set to a Number.";
    }
    quickFacts() {
     console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`) 
    }
    pickSubStituteTeacher(substituteTeachers) {
      let n = Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[n]; 
    }
  }
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, numberOfStudents);
      
      this._level = 'primary';
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name,numberOfStudents);
      this._level = 'highschool';
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return console.log(this._sportsTeams);
    }
  }
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury.numberOfStudents);
  lorraineHansbury.quickFacts();
  let arr = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  let teacher = lorraineHansbury.pickSubStituteTeacher(arr);
  console.log(teacher);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] );
  alSmith.sportsTeams;
  