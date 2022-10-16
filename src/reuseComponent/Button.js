export default function Button(props) {
  const { className, children, onClick, type } = props;
  return (
    <div className={className}>
      <button
        type={type}
        onClick={onClick}
        className={`w-full h-full my-2 text-white bg-gradient-to-l from-[#ed663e] to-[#fd9a7c] hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800   group flex  items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg   `}
      >
        <span className="flex items-center rounded-md text-sm px-4 py-2">
          {children}
        </span>
      </button>
    </div>
  );
}
