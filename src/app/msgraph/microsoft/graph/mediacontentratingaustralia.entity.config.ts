import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.entity';
import { MediaContentRatingAustraliaModel } from './mediacontentratingaustralia.model';
import { MediaContentRatingAustraliaCollection } from './mediacontentratingaustralia.collection';
//#endregion

export const MediaContentRatingAustraliaConfig = {
  name: "mediaContentRatingAustralia",
  model: MediaContentRatingAustraliaModel,
  collection: MediaContentRatingAustraliaCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingAustraliaMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingAustraliaTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingAustralia>;