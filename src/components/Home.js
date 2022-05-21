import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // will make the spinner if the data fetch is geting time
  const [isPending, setIsPending] = useState(true);

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
      setIsPending(false)
    })
  }, []); //empty, or we ca use a state, in order => when the state changes, run the useEffect





  return ( 
    <div className='home'>
      {
        isPending && <div> Loading . . . 🎈 </div>
      }

      {
        blogs &&  <BlogList
        blogs={blogs}
      />
      }
      <button onClick={() => handleClick("❤️")}>Heart</button>
      <p>{name} </p> 
    </div> 
  );
};

export default Home;



