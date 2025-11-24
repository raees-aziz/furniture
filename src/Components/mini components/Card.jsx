import React from "react";
import styled from "styled-components";

const Card = ({ src, name }) => {
  return (
    <StyledWrapper>
      <div className="card ">
        <div className="card-inner">
          <div className="card-front relative">
            <p className="absolute top-0 z-1 font-bebas-neue text-5xl mt-10">
              {name}
            </p>
            <img className="object-cover size-full rounded-2xl" src={src} alt="" />
            <button className="absolute bottom-10 md:hidden block text:md font-bebas-neue py-4 px-2 bg-slate-950 rounded-2xl w-40 text-main">
              Hit me 👊
            </button>
          </div>
          <div className="card-back font-bebas-neue space-y-3">
            <p className="text-main text-4xl font-bold">Acheiement</p>
            <p className="text-lg text-white ">mr karachi (2019,2020,2024)</p>
            <p className="text-main text-4xl font-bold">Speacialist</p>
            <p className="text-lg text-white ">Shoulder, legs, wing, triceps</p>
            <p className="text-main text-4xl font-bold">timing</p>
            <p className="text-lg text-white ">9:00 to 5:00</p>
            <p className="text-main text-4xl font-bold">Contact</p>
            <p className="text-lg text-white font-bebas-neue">
              email:xyz@gmail.com
            </p>
            <p className="text-lg text-white ">030xxxxxx44</p>
            <p className="text-lg text-white ">instagram</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 400px;
    height: 550px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    // margin:20px 0px
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: #232b2b;
    color: #fff;
    display: flex;
    // flex-direction:column;
    align-items: center;
    border: px solid #7afc16;
    border-radius: 20px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-back {
    background: radial-gradient(
      circle at center,
      #434343 0%,
      #000 50%,
      transparent 100%
    );
    // color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    border-radius: 20px;
    justify-content: center;
    // font-size: 24px;
    transform: rotateY(180deg);
  }
`;

export default Card;
