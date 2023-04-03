import React, { Component } from "react";
import Slider from "react-slick";
import {RiStarFill, RiStarHalfFill} from "react-icons/ri"
import avater1 from "../assets/client-sm-1.jpg"
import avater2 from "../assets/client-sm-3.jpg"
export default class TestiCarosal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="md:flex justify-between align-middle">
            <div className="card bg-slate-100 p-12 md:mr-3">
                <div className="card-header flex align-middle justify-start">
                  <img src={avater2} alt="avater2" className="mr-3 rounded-full" />
                  <p>
                    <strong>Dennis Jacques</strong><br></br>
                    <span>User from USA</span>
                  </p>
                </div>
                <div className="card__body my-4">
                  <p>Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="card__footer flex justify-start align-middle">
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                </div>
              </div>

              <div className="card bg-slate-100 p-12 mt-5 md:my-0 md:ml-3">
                <div className="card-header flex align-middle justify-start">
                  <img src={avater1} alt="avater1" className="mr-3 rounded-full" />
                  <p>
                    <strong>Dennis Jacques</strong><br></br>
                    <span>User from USA</span>
                  </p>
                </div>
                <div className="card__body my-4">
                  <p>Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="card__footer flex justify-start align-middle">
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarHalfFill className="text-yallow-400"/>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="md:flex justify-between align-middle">
            <div className="card bg-slate-100 p-12 md:mr-3">
                <div className="card-header flex align-middle justify-start">
                  <img src={avater2} alt="avater2" className="mr-3 rounded-full" />
                  <p>
                    <strong>Dennis Jacques</strong><br></br>
                    <span>User from USA</span>
                  </p>
                </div>
                <div className="card__body my-4">
                  <p>Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="card__footer flex justify-start align-middle">
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                </div>
              </div>

              <div className="card bg-slate-100 p-12 mt-5 md:mt-0 md:ml-3">
                <div className="card-header flex align-middle justify-start">
                  <img src={avater1} alt="avater1" className="mr-3 rounded-full" />
                  <p>
                    <strong>Dennis Jacques</strong><br></br>
                    <span>User from USA</span>
                  </p>
                </div>
                <div className="card__body my-4">
                  <p>Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="card__footer flex justify-start align-middle">
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarFill className="text-yallow-400"/>
                    <RiStarHalfFill className="text-yallow-400"/>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}