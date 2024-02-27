// read file asynchronously and print info
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        // fileter out first line (column names) and empty last line
        const studentList = data.split('\n').filter((value, index) => value !== '' && index !== 0);
        // stores <field_name>:<students_list> as key value pair
        const fieldDict = {};
        // for each line add first name of student to array of the respective field
        studentList.forEach((element) => {
          const elementList = element.split(',');
          const firstName = elementList[0];
          const fieldName = elementList[3];
          // if no entry for fieldName before, assign an empty array to it
          if (!fieldDict[fieldName]) fieldDict[fieldName] = [];
          fieldDict[fieldName].push(firstName); // add student to array of fields
        });
        console.log(`Number of students: ${studentList.length}`);
        for (const field of Object.keys(fieldDict)) {
          console.log(`Number of students in ${field}: ${fieldDict[field].length}. List: ${fieldDict[field].join(', ')}`);
        }
        // resolve with empty argument to settle the promise (so that any chain with then() works)
        resolve();
      }
    });
  });
}

module.exports = countStudents;
