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
};

export type Class = {
  id: string;
  name: string;
  description: string;
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
    year: number;
};

export type ExamFormField = {
    name: string;
    description: string;
    exercises: Exercise[];
};

export type ExerciseFormField = {
    name: string;
    points: number;
    type: string;
};

export type Exam = {
    id: string;
    name: string;
    description: string;
    exercises: Exercise[];
};

export type Exercise = {
    id: number;
    name: string;
    points: number;
    type: string;
};

export type StudentResult = {
    id: number;
    exercises: {
        id: number;
        gainedPoints: number | null;
        maxPoints: number;
    }[] | [];
};

export type ExamResult = {
    examId: string;
    classId: string;
    date: Date;
    students: StudentResult[] | [];
};