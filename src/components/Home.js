import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // deconstructure the states object form useFetch hooks.
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  const [name, setName] = useState("");

  const handleClick = (name) => {
    setName(`Irola ${name}`);
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading . . . 🎈 </div>}

      {blogs && <BlogList blogs={blogs} />}
      <button onClick={() => handleClick("❤️")}>Heart</button>
      <p>{name} </p>
    </div>
  );
};

export default Home;
