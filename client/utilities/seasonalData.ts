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
  const currentMonth = 7;
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
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/Maple_tree_portrait.png',
    avatar: 'https://pierresstore.s3.us-east-2.amazonaws.com/Lewis_Happy.png',
    article:
      'In spring, the grass is green. Trees regain their leaves and bloom, and pink petals blow through the air on some days. There is also a variety of crops, forageable items, and fish which only appear during this season. Salmonberry season lasts between the 15th-18th of spring. When spring starts, new logs, rocks and grass patches will spawn on the farm.',
    festivals: ['Egg Festival', 'Flower Dance'],
  },
  summer: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/Palm_tree_portrait.png',
    avatar: 'https://pierresstore.s3.us-east-2.amazonaws.com/Willy.png',
    article:
      'In summer, grass remains green, although noticeably yellower than the spring grass was. Trees are no longer in bloom and instead are thick with vibrant green leaves. Butterflies can be seen flying across the screen. Any Spring crops still planted wilt and die on the 1st of Summer. New crops, fish, and forageable items are available, however.',
    festivals: ['Luau', 'Dance of the Moonlight Jellies'],
  },
  fall: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/falltree-removebg-preview.png',
    avatar: 'https://pierresstore.s3.us-east-2.amazonaws.com/Gus_Happy.png',
    article:
      'Fall is the third season players play through. It is followed by winter and preceded by summer. Some of the most valuable crops can grow during Fall.',
    festivals: ['Stardew Valley Fair', `Spirit's Eve`],
  },
  winter: {
    tree: 'https://pierresstore.s3.us-east-2.amazonaws.com/Tree_of_the_Winter_Star.png',
    avatar: 'https://pierresstore.s3.us-east-2.amazonaws.com/Linus_Happy.png',
    article:
      'Winter is unique amongst the seasons in that no outdoors Crops apart from Winter Seeds will grow, and all Grass, Weeds, and most tilled soil (including all fertilizer, even if the tile remains tilled) will all be removed at the start of the season. Bee Houses will also not produce honey during winter. Finally, standard trees, including those planted on the farm (except fruit trees) do not grow in winter unless Tree Fertilizer is applied.',
    festivals: ['Festival of Ice', 'Night Market', 'Feast of the Winter Star'],
  },
};
