const AddToCartButton = ({ text }: { text: string }) => {
  return (
    <button className="flex px-4 py-2 m-auto text-white rounded bg-greenTitle hover:bg-green-600">
      {text}
    </button>
  );
};

export default AddToCartButton;
