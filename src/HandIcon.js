import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value, className = '' }) {
  const src = IMAGES[value];
  const alt = value;
  return <img className={className} src={src} alt={alt}/>;
}

export default HandIcon;