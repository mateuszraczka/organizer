import Search from "../../components/Search";
import Add from "../../components/Add";
import SubPageTitle from "../../components/SubPageTitle";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Class } from "../../types";

const Classes = () => {
  const { data } = useFetch({collection_: "classes"});
  const classes = data as Class[];
  return (
    <>
      <section>
        <SubPageTitle>Klasy</SubPageTitle>
      </section>
      <article className="flex justify-center gap-2 items-center">
        <Search></Search>
        <Link to="class">
          <Add></Add>
        </Link>
      </article>
      <article className="flex gap-4 flex-col">
        {classes.map((class_: Class) => (
          <Link key={class_.id} to={`class?id=${class_.id}`}>
            <Card>
              <Card.Header>{class_.name}</Card.Header>
            </Card>
          </Link>
        ))}
      </article>
    </>
  );
};
export default Classes;
