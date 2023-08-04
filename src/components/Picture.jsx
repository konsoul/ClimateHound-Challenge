import '../assets/css/pictureFade.css'
import horsePhoto from '../assets/graphics/photo.jpg'
import roadPhoto from '../assets/graphics/photo2.jpg'

function Picture(props) {
  const { showHorsePhoto, showRoadPhoto } = props
  return (
    <div className="container">
      <div className={showHorsePhoto ? 'showHorse' : 'hidePicture'}>
        <img src={horsePhoto} alt="horsePhoto" className="photo" />
      </div>

      <div className={showRoadPhoto ? 'showRoad' : 'hidePicture'}>
        <img src={roadPhoto} alt="roadPhoto" className="photo" />
      </div>
    </div>
  )
}

export default Picture
