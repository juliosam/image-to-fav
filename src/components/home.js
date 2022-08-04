import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export const Home = ({favList, setFavList}) =>{

  useEffect(()=>{fetcher()},[])
  const [image, setImage] = useState(null)

  const fetcher = () =>{
    fetch('https://api.thecatapi.com/v1/images/search?format=json')
    .then(res=>res.json())
    .then(data=> {
      setImage(data[0].url)
      console.log(data)
    })
  }
 //Pre-populate the todo list with github issues from this url: https://api.github.com/repos/every-io/demo-issues/issues
  const addToFav = () =>{
    setFavList([...favList, image])
    fetcher()
  }
  console.log(favList)

  return(
      <>
      <Link to="/"><button className="bttn btnToHere">Home</button></Link>
      <Link to="/favs"><button className="bttn btnToThere">Favs</button></Link>
      <div className="image-and-buttons">
        <div className="frame"><img alt={image} className="catpic" src={image}/></div>
        <div className="bottomButtons">
          <button className="bttn btnHomeBottom" onClick={fetcher}>𝗫</button>
          <button className="bttn btnHomeBottom" onClick={addToFav}>❤</button>
        </div>
      </div>
      </>
  )
}