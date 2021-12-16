import { SeasonalInformation } from '../utilities/seasonalData';
import { seasonProp } from '../types/utilityTypes';
import { upperCaseFirstChar } from '../utilities/helperFuncs';

const SeasonalInfo = (currentSeason: seasonProp) => {
  const season: string = currentSeason.currentSeason.toLowerCase();
  const festivals: string[] = SeasonalInformation[season].festivals;
  console.log(festivals);

  return (
    <div className="flex-col items-center w-10/12 m-auto rounded searchBorder">
      <div className="flex items-center w-full px-2 py-2 bg-greenTitle">
        <h1 className="m-auto">
          It&rsquo;s {upperCaseFirstChar(season)} time! Let&rsquo;s start this
          season right!
        </h1>
      </div>
      <div className="flex m-auto mt-6 mb-2 ml-6">
        <div className="w-1/4">
          <img
            className="h-60"
            src={SeasonalInformation[season].tree}
            alt={`${season}tree`}
            title={`${season}tree`}
          />
        </div>
        <div className="flex-col w-3/4">
          <img
            className="float-left w-32 h-32 mr-6 border-2 rounded border-primary"
            src={SeasonalInformation[season].avatar}
            alt={`${season}tree`}
            title={`${season}tree`}
          />
          <p>{SeasonalInformation[season].article}</p>
        </div>
        <div className="w-1/4">
          <img
            className="h-60"
            src={SeasonalInformation[season].tree}
            alt={`${season}tree`}
            title={`${season}tree`}
          />
        </div>
      </div>
      <div className="flex-col items-center w-full m-auto text-center">
        <h1>Festivals this season:</h1>
        <ul className="flex-col m-auto">
          {festivals ? (
            festivals.map((festElem, index) => {
              return (
                <li
                  className="flex justify-center m-auto align-middle"
                  key={`${festElem}${index}lineItem`}
                >
                  <img
                    className="w-10 h-10 mr-10"
                    src="https://pierresstore.s3.us-east-2.amazonaws.com/bannerGIF.gif"
                    alt="banner"
                    title="banner"
                    key={`${festElem}${index}gifImage`}
                  />
                  <span key={`${festElem}${index}span`}>{festElem}</span>
                  <img
                    className="w-10 h-10 ml-10"
                    src="https://pierresstore.s3.us-east-2.amazonaws.com/bannerGIF.gif"
                    alt="banner"
                    title="banner"
                    key={`${festElem}${index}gifImage2`}
                  />
                </li>
              );
            })
          ) : (
            <li>No festivals</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SeasonalInfo;
