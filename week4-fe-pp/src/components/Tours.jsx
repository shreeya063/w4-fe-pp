import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  const [toursData, setToursData] = useState(tours);
  const handleDeleteTours = (tourId) => {
    // Filter out the item with the specified ID and update the state
    const updatedTours = toursData.filter((tour) => tour.id !== tourId);
    setToursData(updatedTours);
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} onDelete={handleDeleteTours}/>;
        })}
      </div>
    </section>
  );
};
export default Tours;
