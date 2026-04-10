import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat({ isPlaying, danceStyle }) {
  const animationClass = isPlaying ? `dance-${danceStyle}` : '';

  return (
    <div className="cat-stage">
      <div className={`cat-wrapper ${animationClass}`}>
        <img
          src={catSvg}
          alt="Dancing cat"
          className="cat-image"
          draggable={false}
        />
      </div>
      <div className={`shadow ${isPlaying ? 'shadow-animated' : ''}`} />
    </div>
  );
}

export default DancingCat;
