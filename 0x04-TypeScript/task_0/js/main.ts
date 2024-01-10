interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student_1: Student = {
  firstName: 'youssef',
  lastName: 'nasrallah',
  age: 23,
  location: 'Italy'
}

const student_2: Student = {
  firstName: 'iliass',
  lastName: 'fokhar',
  age: 24,
  location: 'France'
}

const studentsList: Student[] = [student_1, student_2];

export const handleStudentsTable = (students: Student[]): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const trHead = document.createElement('tr');

  document.querySelector('body').appendChild(table);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  tableHead.appendChild(trHead);

  trHead.insertAdjacentHTML('beforeend', '<th>firstName</th>');
  trHead.insertAdjacentHTML('beforeend', '<th>location</th>');

  for (const student of students) {
    const trBody = document.createElement('tr');
    trBody.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    trBody.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.appendChild(trBody);
  }
}

handleStudentsTable(studentsList);
