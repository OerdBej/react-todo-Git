import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("");

  const handleClick = (name) => {
    setName(`Irola ${name}`);
  };

  useEffect(() => {
    console.log("This effect will fire by himself");
    //fetch => promise => object => object.json()
    fetch('http://localhost:8000/blogs').then(res => {
      return res.json();
    }).then((data)=>{
      // console.log(data);
      setBlogs(data);
    })
  }, []); //empty, or we ca use a state, in order => when the state changes, run the useEffect

  const handleDelete = (id) => {
    // filter returns a new array. Store it into state
    const deleteButton = blogs.filter((pizza) => pizza.id !== id);
    setBlogs(deleteButton);
  };

  return (
    <div className='blog-list'>
      {/* condition needed: first the data was null. We need condition because we are waiting from fetch data.json(). When we receive the data, we make a condtion, if true, than pass the component with props. */}
      {
        blogs &&  <BlogList
        blogs={blogs}
        title='Dream On baby🎈'
        handleDelete={handleDelete}
      />
      }
      <button onClick={() => handleClick("❤️")}>Heart</button>
      <p>{name} </p> 
    </div>
  );
};

export default Home;



