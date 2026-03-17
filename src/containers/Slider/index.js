import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus
    ? [...data.focus].sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? -1 : 1
      )
    : [];

  useEffect(() => {
  if (!byDateDesc.length) {
    return undefined;
  }

  const timer = setTimeout(() => {
    setIndex((prevIndex) =>
      prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0
    );
  }, 5000);

  return () => clearTimeout(timer);
}, [index, byDateDesc.length]);

  if (!byDateDesc.length) return null;

  return (
    <div className="SlideCardList">
      {byDateDesc.map((event, idx) => (
        <div
          key={idx.valueOf()}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img
            src={`${process.env.PUBLIC_URL}${event.cover}`}
            alt={event.title}
          />

          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc.map((event, radioIdx) => (
            <input
              key={radioIdx.valueOf()}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => setIndex(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;