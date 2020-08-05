import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingGermany } from './mediacontentratinggermany.entity';
//#endregion

export const MediaContentRatingGermanyConfig = {
  name: "MediaContentRatingGermany",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingGermanyMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingGermanyTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingGermany>;