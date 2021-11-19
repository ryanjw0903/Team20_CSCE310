import React from "react";
import { useState, useEffect } from 'react';


function Home() {
  const [data, setData] = useState(null);

useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(res => {
          console.log(res);
          setData(res.message);
      })
      .catch(err => {
        console.error("Error", err);
      })
  }, []);

  return (
    <div>
        <h1>Home Page woooooo</h1>
        <p>{data}</p>
    </div>
  );
}

export default Home;