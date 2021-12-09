import { Seasons, seasonSetter } from '../utilities/seasonalData';

const Seasonal = () => {
  //detects the month and returns the season
  const season = seasonSetter();
  return (
    <div>
      <img src={Seasons[season]} alt={season} />
    </div>
  );
};

export default Seasonal;
