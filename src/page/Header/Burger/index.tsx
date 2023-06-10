import Button from "../../../components/Button";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineLibraryBooks, MdOutlineGroup } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const Burger = () => {
  const [expand, setExpand] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    const handleOutsideClick = (e: TouchEvent | MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (!e.target.closest(".relative")) {
          setExpand(false);
        }
      }
    };

    if (window.innerWidth < 768) {
      console.log("mobile")
      setMobile(() => true);
    } else {
      setExpand(() => false);
      setMobile(() => false);
    }

    window.onresize = () => {
      setTimeout(() => {
        if (window.innerWidth < 768) {
          console.log("mobile")
          setMobile(() => true);
        } else {
          setExpand(() => false);
          setMobile(() => false);
        }
      }, 150);
    };
    document.addEventListener("touchmove", handleOutsideClick);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("touchmove", handleOutsideClick);
      document.removeEventListener("click", handleOutsideClick);
      window.onresize = null;
    };
  }, []);

  return mobile ? (
    <div>
      <HiMenu
        className={`text-4xl cursor-pointer ${expand?"rotate-90":"rotate-0"} transition-transform delay-100 duration-150`}
        onClick={handleExpand}
      ></HiMenu>
      {expand && (
        <div
          className="absolute right-0 p-3 bg-opacity-30 shadow-md backdrop-blur-sm bg-slate-300 flex flex-col gap-2 rounded-md z-10 transition"
        >
          <Link to="/exams">
            <Button
              variant="horizontal"
              name="exams"
              className="flex gap-1 p-2"
            >
              <MdOutlineLibraryBooks />
              <span>Sprawdziany</span>
            </Button>
          </Link>
          <hr></hr>
          <Link to="/classes">
            <Button
              variant="horizontal"
              name="classes"
              className="flex gap-1 p-2"
            >
              <MdOutlineGroup />
              <span>Klasy</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="flex gap-2 mr-auto">
      <Link to="/exams">
        <Button variant="horizontal" name="exams" className="flex gap-1 p-2">
          <MdOutlineLibraryBooks />
          <span>Sprawdziany</span>
        </Button>
      </Link>
      <hr></hr>
      <Link to="/classes">
        <Button variant="horizontal" name="classes" className="flex gap-1 p-2">
          <MdOutlineGroup />
          <span>Klasy</span>
        </Button>
      </Link>
    </div>
  );
};
export default Burger;
