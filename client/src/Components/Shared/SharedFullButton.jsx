import React from 'react';
import { Link } from "react-router";

const SharedFullButton = ({ text,path }) => {
  return (
    <>
      <style>
        {`
          .shared-btn2 {
            position: relative;
            padding: 10px 30px;
            border-radius: 7px;
            border: 1px solid transparent;
            
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
            background: linear-gradient( 90deg,#14497D 0%, #2774A0 50%,#4AC4DE 100%);
            color: #fff;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 0 0 0 transparent;
            transition: all 0.2s ease-in;
          }

          .shared-btn2:hover {
          border: 1px solid #4AC4DE;
            background: linear-gradient( 90deg,#14497D 0%, #2774A0 50%,#4AC4DE 100%);
            box-shadow: 0 0 15px 1px #14497D;
          }

          .shared-btn2:hover::before {
            animation: sh02 0.6s linear;
          }

          .shared-btn2::before {
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

          .shared-btn2:active {
            box-shadow: 0 0 0 0 transparent;
          }
        `}
      </style>

      <div>
        <Link to={`${path  || '/'}`}>
          <button className="shared-btn2 ">
            {text || "Contact Us"}
          </button>
        </Link>
      </div>
    </>
  );
};

export default SharedFullButton;