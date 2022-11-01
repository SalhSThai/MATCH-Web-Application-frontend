import BrowseImageButton from './BrowseImageButton';

export default function EditImageContainer() {
  const src = 'https://picsum.photos/200';

  return (
    <div className='w-1/2 h-[80vh] '>
      <div
        className='rounded-l-xl h-full bg-cover relative'
        style={{ backgroundImage: `url('${src}')` }}
      >
        <BrowseImageButton />
      </div>
    </div>
  );
}
