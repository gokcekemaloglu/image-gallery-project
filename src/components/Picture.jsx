import dataa from "../helper/data";
import "../styles/style.css";


const Picture = ({photographer,src}) => {

  return (
    <div>

      <div className="card">
      <div className="picture">
        <img src={src.large} alt="pictures" />
      </div>            
        <p>Photographer: {photographer}</p>
      </div>
      

        
    </div>
  )
}

export default Picture