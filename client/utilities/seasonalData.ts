import { seasonImages } from '../types/utilityTypes';

export const Seasons: seasonImages = {
  spring: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png',
  summer:
    'https://stardewvalleywiki.com/mediawiki/images/3/3d/Rainbow_Shell.png',
  fall: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png',
  winter: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Rarecrow_4.png',
};

export const seasonSetter = (): string => {
  const date = new Date();
  const currentMonth = date.getMonth();
  if (currentMonth > 1 && currentMonth < 5) {
    return 'spring';
  } else if (currentMonth > 4 && currentMonth < 8) {
    return 'summer';
  } else if (currentMonth > 7 && currentMonth < 11) {
    return 'fall';
  } else {
    return 'winter';
  }
};
