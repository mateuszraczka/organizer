import Layout from "./layouts/Layout";
import Header from "./page/Header/index";
import Exams from "./page/Exams/index";
//TEST IMPORTS
import NewExam from "./page/NewExam";
import Classes from "./page/Classes";
import NewClass from "./page/NewClass";
//END OF TEST IMPORTS
import Footer from "./page/Footer/index";
import { Routes, Route } from "react-router-dom";
import ProtectionRoute from "./components/ProtectionRoute";
import ClassContextProvider from "./contexts/ClassContextProvider";

function App() {
  const user = "user";
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectionRoute user={user}>
              <Exams />
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
          path="/exams/edit"
          element={
            <ProtectionRoute user={user}>
              <NewExam />
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
        <Route
          path="/login"
          element={<></>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
