import Layout from "./layouts/Layout";
import Header from "./page/Header/index";
import Exams from "./page/Exams/index";
//TEST IMPORTS
import NewExam from "./page/NewExam";
import Classes from "./page/Classes";
import NewClass from "./page/NewClass";
//END OF TEST IMPORTS
import Footer from "./page/Footer/index";
function App() {
  return (
  <Layout header={<Header />} footer={<Footer />}>
    <NewClass></NewClass>
  </Layout>
  );
}

export default App;
