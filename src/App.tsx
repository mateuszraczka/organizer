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
function App() {
  const user = "test";
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>

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
          path="/classes/edit"
          element={
            <ProtectionRoute user={user}>
              <NewClass />
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
