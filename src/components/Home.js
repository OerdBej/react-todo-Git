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
    setName(`Irola ${name}`);
  };

  useEffect(() => {
    console.log("This effect will fire by himself");
  }, []); //empty, or we ca use a state, in order => when the state changes, run the useEffect

  const handleDelete = (id) => {
    // filter returns a new array. Store it into state
    const deleteButton = blogs.filter((pizza) => pizza.id !== id);
    setBlogs(deleteButton);
  };

  return (
    <div className='blog-list'>
      <BlogList
        blogs={blogs}
        title='Dream On baby🎈'
        handleDelete={handleDelete}
      />
      <button onClick={() => handleClick("❤️")}>Heart</button>
      <p>{name} </p> 
    </div>
  );
};

export default Home;
