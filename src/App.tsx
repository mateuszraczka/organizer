import Layout from "./layouts/Layout";
import Header from "./page/Header";
//PAGES IMPORTS
import Exams from "./page/Exams";
import NewExam from "./page/NewExam";
import Classes from "./page/Classes";
import Home from "./page/Home";
import NewClass from "./page/NewClass";
import CheckExam from "./page/CheckExam";
import ExamResults from "./page/ExamResults";
//PAGES IMPORTS
import { Routes, Route } from "react-router-dom";
import ProtectionRoute from "./components/ProtectionRoute";
import ClassContextProvider from "./contexts/NewClassContextProvider";
import NewExamContextProvider from "./contexts/NewExamContextProvider";
import CheckExamContextProvider from "./contexts/CheckExamContextProvider";
import { Navigate } from "react-router-dom";

function App() {
  const user = "teacher";
  return (
    <Layout header={<Header />}>
      <Routes>
        <Route path="/login" element={<p>Logowanie</p>} />
        <Route
          path="/"
          element={
            <ProtectionRoute user={user}>
              <Home />
            </ProtectionRoute>
          }
        />
        <Route
          path="/exams"
          element={
            <ProtectionRoute user={user}>
              <Exams />
            </ProtectionRoute>
          }
        />
        <Route
          path="/exams/exam"
          element={
            <ProtectionRoute user={user}>
              <NewExamContextProvider>
                <NewExam />
              </NewExamContextProvider>
            </ProtectionRoute>
          }
        />
        <Route
          path="/checkexam"
          element={
            <ProtectionRoute user={user}>
              <CheckExamContextProvider>
                <CheckExam></CheckExam>
              </CheckExamContextProvider>
            </ProtectionRoute>
          }
        />
        <Route
          path="/checkexam/result"
          element={
            <ProtectionRoute user={user}>
              <ExamResults></ExamResults>
            </ProtectionRoute>
          }
        />
        <Route
          path="/classes"
          element={
            <ProtectionRoute user={user}>
              <Classes />
            </ProtectionRoute>
          }
        />
        <Route
          path="/classes/class"
          element={
            <ProtectionRoute user={user}>
              <ClassContextProvider>
                <NewClass />
              </ClassContextProvider>
            </ProtectionRoute>
          }
        />
        <Route path="/invalidPath" element={<p>Invalid path</p>} />
        <Route path="*" element={<Navigate to="/invalidPath"></Navigate>} />
      </Routes>
    </Layout>
  );
}

export default App;
