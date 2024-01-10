interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: boolean;
  location: string;
  [index:string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}
