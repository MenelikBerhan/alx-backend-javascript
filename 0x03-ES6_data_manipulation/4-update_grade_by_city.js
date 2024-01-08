/* a function that returns an array of students for a specific city with their new grade
  students: array of student objects.
  city: string.
  newGrades: array of grade objects. Format of a grade: {studentId: 31, grade: 78}
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map(({ id, firstName, location }) => {
      const studentGrade = newGrades.find((elem) => elem.studentId === id);
      return {
        id, firstName, location, grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
