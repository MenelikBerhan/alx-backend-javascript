// Students Controller
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((fieldDict) => {
        const data = ['This is the list of our students'];
        const sortedFields = Object.keys(fieldDict).sort((x, y) => {
          if (x.toLowerCase() === y.toLowerCase()) return 0; // case insensitive sort
          return x.toLowerCase() < y.toLowerCase() ? -1 : 1;
        });
        for (const field of sortedFields) {
          data.push(`Number of students in ${field}: ${fieldDict[field].length}. List: ${fieldDict[field].join(', ')}`);
        }
        response.send(data.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      }); // send an internal server error
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params; // for /students/:major route
    if (['CS', 'SWE'].includes(major)) {
      const filePath = process.argv[2];
      readDatabase(filePath)
        .then((fieldDict) => {
          response.send(`List: ${fieldDict[major].join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        }); // send an internal server error
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
