import { seasonImages, seasonInfo } from '../types/utilityTypes';

export const Seasons: seasonImages = {
  spring: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png',
  summer:
    'https://stardewvalleywiki.com/mediawiki/images/3/3d/Rainbow_Shell.png',
  fall: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png',
  winter: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Rarecrow_4.png',
};

export const seasonSetter = (): string => {
  const date = new Date();
  // const currentMonth = date.getMonth();
  const currentMonth = 2;
  if (currentMonth > 1 && currentMonth < 5) {
    return 'Spring';
  } else if (currentMonth > 4 && currentMonth < 8) {
    return 'Summer';
  } else if (currentMonth > 7 && currentMonth < 11) {
    return 'Fall';
  } else {
    return 'Winter';
  }
};

export const SeasonalInformation: seasonInfo = {
  spring: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/winter_tree-removebg-preview.png',
  },
  summer: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/winter_tree-removebg-preview.png',
  },
  fall: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/winter_tree-removebg-preview.png',
  },
  winter: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/winter_tree-removebg-preview.png',
  },
};
