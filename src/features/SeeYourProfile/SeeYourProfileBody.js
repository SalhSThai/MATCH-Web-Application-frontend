import { Link } from 'react-router-dom';
import { Back } from '../../asset/iconForSwipePage/IconOnProfile';
import SeeYourProfileContent from './SeeYourProfileContent';

function SeeYourProfileBody() {
  return (
    <div className=" w-full mt-4 h-full overflow-y-scroll scrollbar-hide">
      <Link to="/message">
        <button type="button">
          <Back />
        </button>
      </Link>
      <SeeYourProfileContent />
      <SeeYourProfileContent />
      <SeeYourProfileContent />
      <SeeYourProfileContent />
      <SeeYourProfileContent />
    </div>
  );
}

export default SeeYourProfileBody;
