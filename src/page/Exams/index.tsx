import Card from "../../components/Card";
import Search from "../../components/Search";
import Add from "../../components/Add";
import SubPageTitle from "../../components/SubPageTitle";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Exam } from "../../types";
import { useState } from "react";
import { useEffect } from "react";

const Exams = () => {
  const { data: exams } = useFetch({collection_: "teachers/123/exams"});
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredExams, setFilteredExams] = useState<Exam[]>(exams);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(()=>e.target.value);
  };

  useEffect(() => {
    if(exams){
      setFilteredExams(()=>exams);
    }
  }, [exams]);

  useEffect(() => {
    if(searchValue.length>0){
      setFilteredExams(()=>exams.filter((exam:Exam) => exam.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
    else{
      setFilteredExams(()=>exams);
    }
  }, [searchValue]);

  return (
    <>
      <section>
        <SubPageTitle>Sprawdziany</SubPageTitle>
      </section>
      <article className="flex justify-center gap-2 items-center">
        <Search handleInput={handleSearch} value={searchValue}></Search>
        <Link to="exam">
          <Add></Add>
        </Link>
      </article>
      <article className="flex gap-4 flex-col">
        {filteredExams.map((exam:Exam, index:number) => (
          <Link key={index} to={`exam?id=${exam.id}`}>
            <Card>
              <Card.Header>{exam.name}</Card.Header>
              <Card.Description>{exam.description}</Card.Description>
            </Card>
          </Link>
        ))}
      </article>
    </>
  );
};
export default Exams;
