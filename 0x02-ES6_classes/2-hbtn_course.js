export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw new TypeError('Name must be a string');

    if (typeof (length) !== 'number') throw new TypeError('Length must be a number');

    if (!Array.isArray(students)) throw new TypeError('Students must be an array of strings');

    students.forEach((element) => {
      if (typeof (element) !== 'string') throw new TypeError('Students must be an array of strings');
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  set name(value) { this._name = value; }

  set length(value) { this._length = value; }

  set students(value) { this._students = value; }
}
