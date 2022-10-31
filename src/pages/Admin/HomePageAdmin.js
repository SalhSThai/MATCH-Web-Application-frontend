import GenderStatusContainer from '../../components/admin/homePageComponents/GenderStatusContainer';
import NewAccountStatusContainer from '../../components/admin/homePageComponents/NewAccountStatusContainer';
import StatusContainer from '../../components/admin/homePageComponents/StatusContainer';

export default function HomePageAdmin() {
  return (
    <>
      <div className='text-white text-[40px]'>Hello Team!</div>;
      <StatusContainer />
      <GenderStatusContainer />
      <NewAccountStatusContainer />
    </>
  );
}
