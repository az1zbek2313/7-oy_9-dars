import React from 'react'
import style from './style.module.css'
import Image from 'next/image';
import card3 from '../../../public/image/card3.jpeg'

function About3() {
  return (
    <div className={` ${style.container}`}>
      <div
        className={`mt-6 grid gap-y-8 lg:grid-cols-2 ${style.wrapper}`}
      >
        <Image
          src={card3}
          alt="Lounge Chair"
          className={style.image}
        />
        <div className={`${style.textWrap}`}>
          <h1 className={`apitalize text-3xl font-bold ${style.capitalize}`}>
            Comfy Bed
          </h1>
          <h4
            className={`text-xl text-neutral-content font-bold mt-2 ${style.opacity}`}
          >
            Homestead
          </h4>
          <p className="mt-3 text-xl">$129.99</p>
          <p className="mt-6 leading-8">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
          <div className={`mt-6`}>
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="mt-2">
            <button
              type="button"
              className={`badge w-6 h-6 mr-2 false ${style.color1}`}
            >
              &nbsp;
          </button>
            </div>
          </div>
          <label className="label" htmlFor="amount">
            <h4 className="text-md font-medium -tracking-wider capitalize">
              Amount
            </h4>
          </label>
          <div className="form-control w-full max-w-xs mb-3">
            <select
              className={`select select-secondary select-bordered select-md ${style.select}`}
              id="amount"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              className={`btn btn-secondary btn-md ${style.btn}`}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About3