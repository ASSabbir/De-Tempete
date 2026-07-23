// shared/ImageTextSplit.jsx
import { FaCheckCircle } from "react-icons/fa";

export const ImageTextSplit = ({
  image,
  alt,
  imageFirst = true,
  heading,
  subheading,
  body,
  points = [],
}) => {
  const Img = (
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover rounded-2xl shadow-lg"
    />
  );
  const Text = (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-[#16244b]">{heading}</h2>
      {subheading && (
        <p className="mt-5 text-gray-500 font-semibold">{subheading}</p>
      )}
      {body && <p className="mt-3 text-gray-500 leading-7">{body}</p>}
      {points.length > 0 && (
        <div className="space-y-3 mt-6">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-light-blue text-lg shrink-0" />
              <span className="text-gray-600">{p}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
        {imageFirst ? (
          <>
            {Img}
            {Text}
          </>
        ) : (
          <>
            {Text}
            {Img}
          </>
        )}
      </div>
    </section>
  );
};
