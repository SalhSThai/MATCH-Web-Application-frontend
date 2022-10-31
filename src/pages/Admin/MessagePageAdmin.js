import LeftContainer from '../../components/admin/messagePageComponents/LeftContainer';
import RightContainer from '../../components/admin/messagePageComponents/RightContainer';

export default function MessagePageAdmin() {
  return (
    <div className='bg-[#29437E] flex justify-between rounded-xl w-[95%] h-[95%]'>
      <LeftContainer />
      <RightContainer />
    </div>
  );
}
