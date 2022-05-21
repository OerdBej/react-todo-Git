import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // will make the spinner if the data fetch is geting time
  const [isPending, setIsPending] = useState(true);
  // When we catch the error, we store it into a state
  const [error, setError] = useState(null);

  const [name, setName] = useState("");

  const handleClick = (name) => {
    setName(`Irola ${name}`);
  };

  useEffect(() => {
    setTimeout(() => {
      //fetch => promise => object => object.json()
      fetch('http://localhost:8000/blogs').then(res => {
        // connection is OK, but cannot get the endpoint json is falsy or does not exist?!, or other problems. Is the response ok, or rather if !ok if the response is is 
        if(!res.ok) {
          throw Error('Could not fetch the data. This is catched by the catch()')

        }
        console.log(res);
        return res.json();
      }).then((data)=>{
        // console.log(data);
        setBlogs(data);
        setIsPending(false)
        setError(null);
      })
      .catch((err) => {
        // console.log(err.message)
        // When we get the error, it is not loading data, so we set it to false
        setIsPending(false);
        setError(err.message)
      })
    }, 1000);
  }, []); //empty, or we ca use a state, in order => when the state changes, run the useEffect





  return ( 
    <div className='home'>
      {error && <div>{error}</div>}
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



