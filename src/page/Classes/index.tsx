import Search from "../../components/Search";
import Add from "../../components/Add";
import SubPageTitle from "../../components/SubPageTitle";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Class } from "../../types";
import { useState } from "react";
import { useEffect } from "react";

const Classes = () => {
  const { data: classes } = useFetch({ collection_: "teachers/123/classes" });

  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredClasses, setFilteredClasses] = useState<Class[]>(classes);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => e.target.value);
  };

  useEffect(() => {
    if (classes) {
      setFilteredClasses(() => classes);
    }
  }, [classes]);

  useEffect(() => {
    if (searchValue.length > 0) {
      setFilteredClasses(() =>
        classes.filter((class_: Class) =>
          class_.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilteredClasses(() => classes);
    }
  }, [searchValue]);

  return (
    <>
      <section>
        <SubPageTitle>Klasy</SubPageTitle>
      </section>
      <article className="flex justify-center gap-2 items-center">
        <Search handleInput={handleSearch} value={searchValue}></Search>
        <Link to="class">
          <Add></Add>
        </Link>
      </article>
      <article className="flex gap-4 flex-col">
        {filteredClasses.map((class_: Class) => (
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
