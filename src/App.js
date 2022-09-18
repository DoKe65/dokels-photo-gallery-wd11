import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";

// import configuration with API key
import apiKey from "./config";

// import components
import Header from "./components/Header";
import Gallery from "./components/Gallery"

const App = () => {
  // create initial states
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState("flower");
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("Some Random Flower Images");
  
  // change the topic
  function changeTopic(newTopic) {
    setTopic(prevTopic => prevTopic = newTopic);
    setTitle(`Search results for ${newTopic.toUpperCase()}`);
  }
  
  const url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=true&text=${topic}&per_page=24`

  // get images 
  const getImages = () => {
    setIsLoading(true);
    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      let rawImgs = responseData.photos.photo;
      let imgs;
      if(rawImgs.length > 0) {
        imgs = rawImgs.map((img, index) => {
          return {
            url: `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
            key: index,
            alt: img.title
          }
        });
      } else {
        imgs = [];
      }
      setIsLoading(false);
      setImages(imgs);
    })
    .catch(error => console.log("Looks like there was a problem", error))
  }

  useEffect(() => {
    getImages();
  },[images.length, topic]);
  
  return (
    <div className="container">
      <Header changeTopic={changeTopic} url={url} />
      
          {
            isLoading ? 
            <p>Loading...</p> : 
            <Gallery images={images} topic={topic} title={title} setTitle={setTitle} />
          }
      
      
      

    </div>
    // <div className="container">
    //   
    //   {
    //     isLoading ? 
    //     <p>Loading...</p> : 
    //     <Gallery images={images} topic={topic} title={title} setTitle={setTitle} />
    //   }

    // </div>
  );
};

export default App;