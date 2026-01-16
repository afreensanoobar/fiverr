import React from "react"
import Slider from "infinite-react-carousel"
import CatCard from "../catCard/CatCard"
import { cards } from "../../data/data"

function Slides() {
  return (
    <div className="slide">
      <div className="contaner">
        <Slider>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Slides
