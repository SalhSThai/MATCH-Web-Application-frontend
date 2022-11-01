export default function SettingPageAdmin() {
  const src = 'https://picsum.photos/200';
  return (
    <div className='bg-[#29437E] flex justify-between rounded-xl w-[70vw]'>
      <div className='w-1/2 h-[80vh] '>
        <div
          className='rounded-l-xl h-full bg-cover'
          style={{ backgroundImage: `url('${src}')` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}
