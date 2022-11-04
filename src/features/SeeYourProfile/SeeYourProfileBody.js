import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Back } from '../../asset/iconForSwipePage/IconOnProfile';
import { fetchUserPostByid } from '../../redux/Slice/PostSlice';
import SeeYourProfileContent from './SeeYourProfileContent';

function SeeYourProfileBody() {
  const id = useParams();
  const allPosts = useSelector(({ posts: { posts } }) => posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPostByid(id));
  }, []);
  return (
    <div className=" w-full mt-4 h-full overflow-y-scroll scrollbar-hide">
      <Link to="/post">
        <button type="button">
          <Back />
        </button>
      </Link>
      {allPosts?.map((item, index) => (
        <SeeYourProfileContent key={item.id} post={item} />
      ))}
    </div>
  );
}

export default SeeYourProfileBody;
