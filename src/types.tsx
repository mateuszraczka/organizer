export type Grade = {
  id: string;
  name: string;
  value: number;
  weight: number;
  examId: string;
};

export type Student = {
  id: number;
  forename: string;
  surname: string;
  number: number;
  grades?: Grade[];
};

export type Class = {
  id: string;
  name: string;
  description: string;
  teacher: string;
  year: number;
  students: Student[] | [];
};

export type StudentFormField = {
  forename: string;
  surname: string;
  number: number;
};

export type ClassFormField = {
    name: string;
    description: string;
    teacher: string;
    year: number;
};
