import Card from "../../components/Card";
import Search from "../../components/Search";
import Add from "../../components/Add";
import SubPageTitle from "../../components/SubPageTitle";
import { Link } from "react-router-dom";

const exams = [
  {
    id: "cbc-512-ddd",
    name: "Exam 1",
    date: "2021-10-10",
    description: "This is a description a a a aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a a    aaaaaaaaaaaaaaaaaaaaaa aa aaaaaaaaaaaaaaaa",
  },
  {
    id: "abc-123-def",
    name: "Exam 2",
    date: "2021-10-10",
    description: "This is a description aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
];

const ExamsPage = () => {
  return (
    <>
      <section>
        <SubPageTitle>Sprawdziany</SubPageTitle>
      </section>
      <article className="flex justify-center gap-2 items-center">
        <Search></Search>
        <Link to="edit">
          <Add></Add>
        </Link>
      </article>
      <article className="flex gap-4 flex-col">
        {exams.map((exam, index) => (
          <Link key={index} to={`edit?exam=${exam.id}`}>
            <Card>
              <Card.Header>{exam.name}</Card.Header>
              <Card.Description>{exam.description}</Card.Description>
              <Card.Date>{exam.date}</Card.Date>
            </Card>
          </Link>
        ))}
      </article>
    </>
  );
};
export default ExamsPage;
