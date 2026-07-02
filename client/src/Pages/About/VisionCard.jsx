const VisionCard = ({ title, text }) => {
  return (
    <div className="relative border border-light-blue rounded-xl p-6 bg-white">

      <span className="absolute -top-4 left-5 bg-light-blue text-dark-blue px-5 py-1 rounded-md font-semibold">
        {title}
      </span>

      <p className="text-gray-600 leading-7">
        {text}
      </p>

    </div>
  );
};

export default VisionCard;