import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export const Home = () =>{

  useEffect(()=>{fetcher()},[])
  const [image, setImage] = useState(null)
  const [favList, setFavList] = useState([])

  const fetcher = () =>{
      fetch('https://api.thecatapi.com/v1/images/search?format=json')
      .then(res=>res.json())
      .then(data=> {
          setImage(data[0].url)
      })
  }

  const addToFav = () =>{
      setFavList([...favList, image])
      fetcher()
  }

  console.log(favList)

  return(
      <>
      <Link to="/"><button>Home</button></Link>
      <Link to="/favs"><button>Favs</button></Link>
      <div className="image-and-buttons">
          <div><img className="catpic" src={image}/></div>
          <button onClick={fetcher}>𝗫</button>
          <button onClick={addToFav}>❤</button>
      </div>
      </>
  )
}