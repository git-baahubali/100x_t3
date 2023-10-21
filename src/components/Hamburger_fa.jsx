// In any component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Hamburger_fa({classname}) {
  return <FontAwesomeIcon icon={faBars} className={`${classname}`} />;
}

export default Hamburger_fa;
