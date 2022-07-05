import { Link } from "react-router-dom"

export const Favs = ({favList, setFavList}) =>{

  return(
    <>
    <Link to="/"><button className="bttn btnToThere">Home</button></Link>
    <Link to="/favs"><button className="bttn btnToHere">Favs</button></Link>
    <div className="favContainer">
      <h1>Favorites</h1>
      <ul>
       {favList.map(favItem => {
         return(
          <li key={favItem} className="favItem">
            <div className="imageFrame">
              <button 
              className="bttn deleteBtn"
               onClick={()=>{ const remain = favList.filter(item => item !== favItem); setFavList(remain)}}
               >𝗫</button>
              <img alt={favItem} className="mosaicImg" src={favItem}/>
            </div>
          </li>
           )  
       })}     
      </ul>
    </div>
    </>
  )
}