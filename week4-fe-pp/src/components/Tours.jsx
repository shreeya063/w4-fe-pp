import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
