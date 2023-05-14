import Layout from "./layouts/Layout";
import Header from "./page/Header/index";
import Main from "./page/Main/index";
import Footer from "./page/Footer/index";
function App() {
  return <Layout header={<Header />} main={<Main />} footer={<Footer />} />;
}

export default App;
