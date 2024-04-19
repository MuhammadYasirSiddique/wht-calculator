"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import whtAgents from "@/data";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    return (
      <div className="">
        <div className="mb-10">
          <h1 className="text-center text-3xl font-bold text-blue-950 pt-10">
            Major Withholding Agents
          </h1>
          <Slider {...settings}>
            {whtAgents.map((whtAgent) => (
              <div
                key={whtAgent.id}
                className="p-10 product-card hover:scale-110 object-cover transition-transform duration-300 flex"
              >
                <div className="max-w-xs rounded overflow-hidden bg-slate-200 shadow-lg h-80">
                  <div className="px-6 py-4 bg-cyan-600 text-white">
                    <div className="font-serif text-2xl mb-2 text-white">
                      {whtAgent.officeName}
                    </div>
                  </div>
                  <div className="mt-2 ml-10 mr-2">
                    <p className="text-xl text-rose-600">
                      Applicable Sections for WHT
                    </p>
                    <br />
                    <ul className="text-lg">
                      <li className="text-purple-700">{whtAgent.sections}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
