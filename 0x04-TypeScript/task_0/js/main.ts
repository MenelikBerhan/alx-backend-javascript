interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Menelik',
  lastName: 'Berhan',
  age: 150,
  location: 'Ankober',
};

const student2: Student = {
  firstName: 'Teferi',
  lastName: 'Mekonen',
  age: 120,
  location: 'Harar',
};
// Creating a data array which a loop will source from
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table); // Drew the main table node on the document

studentsList.forEach((student: Student) => {
  const tr = table.insertRow(); //Create a new row
  for (const column of [student.firstName, student.location]) {
    const td =  tr.insertCell();  // add cell
    td.innerHTML = column;
  }
});
