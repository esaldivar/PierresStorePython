import { SeasonalInformation } from '../utilities/seasonalData';
import { seasonProp } from '../types/utilityTypes';

const SeasonalInfo = (currentSeason: seasonProp) => {
  const season: string = currentSeason.currentSeason.toLowerCase();

  return (
    <div className="flex-col items-center w-10/12 m-auto bg-red-200 rounded searchBorder">
      <div className="flex items-center w-full px-2 py-2 bg-greenTitle">
        <h1 className="m-auto">Season title</h1>
      </div>
      <div>
        <img
          className="h-60"
          src={SeasonalInformation[season].tree}
          alt={`${season}tree`}
          title={`${season}tree`}
        />
        <p className="wrap">
          Season information here. Season information here. Season information
          here. Season information here.
        </p>
      </div>
    </div>
  );
};

export default SeasonalInfo;
