import Button from "../../components/Button";
import SubPageTitle from "../../components/SubPageTitle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <SubPageTitle>Strona główna</SubPageTitle>
      </section>
      <section className="flex">
        <Link to="/checkexam">
          <Button
            className="bg-green-400 hover:bg-green-300 rounded-md justify-center items-centers text-md p-2"
            variant="horizontal"
          >
            Sprawdź sprawdzian
          </Button>
        </Link>
      </section>
    </>
  );
};
export default Home;
