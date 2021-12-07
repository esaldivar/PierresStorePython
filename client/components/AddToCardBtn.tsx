const PierreButton = ({ text }) => {
  return (
    <div className="m-auto">
      <button className="flex px-8 py-2 text-white rounded bg-greenTitle hover:bg-green-600">
        {text}
      </button>
    </div>
  );
};

export default PierreButton;
