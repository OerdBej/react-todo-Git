import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      libri: "Ky eshte libri pare",
      title: "Neveria",
      author: "Jean Paul Sartre",
      year: 1950,
      id: 1,
    },
    {
      libri: "Ky eshte libri dyte",
      title: "Libri i shqetesimit",
      author: "Fernando Pessoa",
      year: 1970,
      id: 2,
    },
    {
      libri: "Ky eshte libri trete",
      title: "Revolta Atlasit",
      author: "Ayn Rand",
      year: 1980,
      id: 3,
    },
    {
      libri: "Ky eshte libri katert",
      title: "Zahiri",
      author: "Paulo Coehlo",
      year: 1990,
      id: 4,
    },
    {
      libri: "Ky eshte libri peste",
      title: "Letter to my father",
      author: "Barack Obama",
      year: 2000,
      id: 5,
    },
  ]);

  const [name, setName] = useState("");

  const handleClick = (name) => {
    setName(`Ne weekend shpirti ${name}`);
  };

  useEffect(() => {
    console.log("This effect will fire by himself");
  }, []);

  const handleDelete = (id) => {
    const deleteButton = blogs.filter((pizza) => pizza.id !== id);
    setBlogs(deleteButton);
  };

  return (
    <div className='blog-list'>
      <BlogList
        blogs={blogs}
        title='This come from a props🎈'
        handleDelete={handleDelete}
      />
      <button onClick={() => handleClick("kendon")}>Click</button>
      <p>{name} ❤️ </p>
    </div>
  );
};

export default Home;
