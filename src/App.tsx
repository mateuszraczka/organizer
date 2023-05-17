import Layout from "./layouts/Layout";
import Header from "./page/Header/index";
import Exams from "./page/Exams/index";
//TEST IMPORTS
import NewExam from "./page/NewExam";
import Classes from "./page/Classes";
//END OF TEST IMPORTS
import Footer from "./page/Footer/index";
function App() {
  return (
  <Layout header={<Header />} footer={<Footer />}>
    <Classes></Classes>
  </Layout>
  );
}

export default App;
