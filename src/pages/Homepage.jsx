import Picture from "../components/Picture"
import "../styles/style.css"
import dataa from "../helper/data"


const Homepage = () => {
  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <div className="pictures">

          {dataa.map((item, index)=>(
          <Picture {...item} key={index}/>
          ))}
            
      </div>            
        
    </div>
  )
}

export default Homepage