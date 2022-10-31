

import ExploreBody from '../components/exploreComponents/ExploreBody';
import NearMeButton from '../components/exploreComponents/NearMeButton';

export default function ExplorePage() {
  return (
    <>
      <div className="flex justify-between w-full px-5">
        <div className="py-2 font-semibold">Suggest for you</div>
        <NearMeButton />
      </div>
      <div className="max-h-full overflow-y-scroll scrollbar-hide">
        <ExploreBody />
      </div>
    </>
  );
}	