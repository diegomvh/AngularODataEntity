import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.entity';
//#endregion

export const MediaContentRatingUnitedKingdomConfig = {
  name: "mediaContentRatingUnitedKingdom",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingUnitedKingdomMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingUnitedKingdomTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingUnitedKingdom>;