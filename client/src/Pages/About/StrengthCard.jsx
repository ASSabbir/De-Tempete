const StrengthCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl duration-300 p-8 text-center border border-gray-100">

      <div className="flex justify-center">

        <div className="text-5xl text-light-blue mb-5">
          <img src={icon} className="w-15" alt="" />
        </div>

      </div>

      <h3 className="text-xl font-bold text-light-blue mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {text}
      </p>

    </div>
  );
};

export default StrengthCard;