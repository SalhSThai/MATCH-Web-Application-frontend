import ExploreBody from '../components/exploreComponents/ExploreBody';
import NearMeButton from '../components/exploreComponents/NearMeButton';

export default function ExplorePage() {
  return (
    <>
      <div className="flex justify-between items-center w-full px-5 font-extrabold">
        Suggest for you
        <NearMeButton />
      </div>
      <div className="max-h-full overflow-y-scroll scrollbar-hide">
        <ExploreBody />
      </div>
    </>
  );
}
