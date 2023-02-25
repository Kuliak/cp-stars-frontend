/**
 * Contains basic (general) information for star.
 */
interface StarBasicInfo {
  id: number;
  name: string;
  icrsRightAscension: number;
  icrsDeclination: number;
  galacticLongitude: number;
  galacticLatitude: number;
}

export default StarBasicInfo;
