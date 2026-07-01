import React from 'react';


const SharedButton = ({ text,path }) => {
  return (
    <>
      <style>
        {`
          .shared-btn {
            position: relative;
            padding: 10px 20px;
            border-radius: 7px;
            border: 1px solid #4AC4DE;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
            background: transparent;
            color: #fff;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 0 0 0 transparent;
            transition: all 0.2s ease-in;
          }

          .shared-btn:hover {
            background: linear-gradient( 90deg,#14497D 0%, #2774A0 50%,#4AC4DE 100%);
            box-shadow: 0 0 20px 2px rgba(0, 142, 236, 0.815);
          }

          .shared-btn:hover::before {
            animation: sh02 0.6s linear;
          }

          .shared-btn::before {
            content: "";
            display: block;
            width: 0;
            height: 86%;
            position: absolute;
            top: 7%;
            left: 0;
            opacity: 0;
            background: #fff;
            box-shadow: 0 0 50px 30px #fff;
            transform: skewX(-20deg);
          }

          @keyframes sh02 {
            from {
              opacity: 0;
              left: 0%;
            }
            50% {
              opacity: 60%;
            }
            to {
              opacity: 0;
              left: 100%;
            }
          }

          .shared-btn:active {
            box-shadow: 0 0 0 0 transparent;
          }
        `}
      </style>

      <div>
        <a href={path || '/'}>
          <button className="shared-btn ">
            {text || "Contact Us"}
          </button>
        </a>
      </div>
    </>
  );
};

export default SharedButton;