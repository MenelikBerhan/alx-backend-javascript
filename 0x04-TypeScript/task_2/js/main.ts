interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;

}

class Director implements DirectorInterface {
  workFromHome(): string { return 'Working from home'; }
  getCoffeeBreak(): string { return 'Getting a coffee break'; }
  workDirectorTasks(): string { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
  workFromHome(): string { return 'Cannot work from home'; }
  getCoffeeBreak(): string { return 'Cannot have a break'; }
  workTeacherTasks(): string { return 'Getting to work'; }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/* OPTIONAL - w/o using type predicate (using instanceof)
function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}
function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) console.log((employee as Director).workDirectorTasks());
  else console.log((employee as Teacher).workTeacherTasks());
} */

// Using type predicate for Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
