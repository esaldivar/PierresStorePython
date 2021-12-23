const Cart = () => {
  const total = 10;
  const numberOfItems = 2;
  return (
    <div className="flex-col w-4/5 bg-blue-200">
      <div className="flex items-center w-full py-4 bg-greenTitle">
        <h1 className="m-auto font-bold text-center">
          Cart: ${total} ({numberOfItems} items)
        </h1>
      </div>
    </div>
  );
};

export default Cart;
