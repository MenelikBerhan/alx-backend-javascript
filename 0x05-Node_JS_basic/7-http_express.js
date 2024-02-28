// A bit complex http server using Express module
const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;
const path = process.argv[2];

// helper function to retrieve summary of student info from file
function getStudentInfo(path) {
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
        let summaryInfo = 'This is the list of our students\n';
        summaryInfo += `Number of students: ${studentList.length}\n`;
        for (const field of Object.keys(fieldDict)) {
          summaryInfo += `Number of students in ${field}: ${fieldDict[field].length}. List: ${fieldDict[field].join(', ')}\n`;
        }
        // resolve with summaryInfo (string)
        resolve(summaryInfo.trimEnd());
      }
    });
  });
}

// set handler for '/' route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// set handler for '/students' route
app.get('/students', (req, res) => {
  getStudentInfo(path)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

// listen on port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
