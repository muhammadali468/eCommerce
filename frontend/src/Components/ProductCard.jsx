const ProductCard = ({ image, name, price, salePrice }) => {
  return (
    <div className="w-64 rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      
      {/* Image */}
      <div className="h-40 w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-800">
          {name}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-indigo-600">
            ${salePrice}
          </span>

          {price && (
            <span className="text-sm text-gray-400 line-through">
              ${price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
