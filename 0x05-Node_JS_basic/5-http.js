// A bit complex web server using http module
const fs = require('fs');
const http = require('http');
const parseUrl = require('url').parse;

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

// web server
const app = http.createServer((req, res) => { // callback attached to app.on('request') event
  const url = parseUrl(req.url); // parsed url object
  if (url.pathname === '/') {
    const data = 'Hello Holberton School!'; // response body
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', data.length);
    res.end(data); // adds data and call res.writeHead for implicit headers before sending response
  } else if (url.pathname === '/students') {
    const path = process.argv[2]; // csv file path passed as argument to this file
    getStudentInfo(path) // returns a Promise that resolves with a string about students information
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.end(data);
      });
    // .catch(() => {
    //   res.statusCode = 500; // internal server error (couldn't read from csv file)
    //   res.end();
    // });
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245.');
});

module.exports = app;
