// read file synchronously and print info
const fs = require('fs');

function countStudents(path) {
  // check if file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf-8');
  const studentList = data.toString().split('\n').slice(1).filter((line) => line.trim() !== '');
  // fileter out first line (column names) and empty last line
  // const studentList = fs.readFileSync(path, { encoding: 'utf-8' }).split('\n')
  //   .filter((value, index) => value.trim() !== '' && index !== 0);
  // stores <field_name>:<students_list> as key value pair
  const fieldDict = {};
  // for each line add first name of student to array of the respective field
  studentList.forEach((element) => {
    const elementList = element.toString().split(',');
    const firstName = elementList[0];
    const fieldName = elementList[3];
    // if no entry for fieldName before, assign an empty array to it
    if (!Object.hasOwn(fieldDict, fieldName)) fieldDict[fieldName] = [];
    fieldDict[fieldName].push(firstName); // add student to array of fields
  });
  console.log(`Number of students: ${studentList.length}`);
  for (const field of Object.keys(fieldDict)) {
    console.log(`Number of students in ${field}: ${fieldDict[field].length}. List: ${fieldDict[field].join(', ')}`);
  }
}

module.exports = countStudents;
