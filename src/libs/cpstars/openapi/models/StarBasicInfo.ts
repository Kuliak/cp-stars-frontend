/* tslint:disable */
/* eslint-disable */
/**
 * Chemically Peculiar Stars Database OpenAPI definitions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StarBasicInfo
 */
export interface StarBasicInfo {
    /**
     * 
     * @type {number}
     * @memberof StarBasicInfo
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StarBasicInfo
     */
    id2009AANDA498961R?: string;
    /**
     * 
     * @type {string}
     * @memberof StarBasicInfo
     */
    consideredCategoryAffiliationProbabilityFlag?: string;
    /**
     * 
     * @type {string}
     * @memberof StarBasicInfo
     */
    binarySystemComponent?: string;
    /**
     * 
     * @type {number}
     * @memberof StarBasicInfo
     */
    icrsRightAscension?: number;
    /**
     * 
     * @type {number}
     * @memberof StarBasicInfo
     */
    icrsDeclination?: number;
    /**
     * 
     * @type {number}
     * @memberof StarBasicInfo
     */
    galacticLongitude?: number;
    /**
     * 
     * @type {number}
     * @memberof StarBasicInfo
     */
    galacticLatitude?: number;
}

/**
 * Check if a given object implements the StarBasicInfo interface.
 */
export function instanceOfStarBasicInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function StarBasicInfoFromJSON(json: any): StarBasicInfo {
    return StarBasicInfoFromJSONTyped(json, false);
}

export function StarBasicInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarBasicInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'id2009AANDA498961R': !exists(json, 'id_2009_A_AND_A_498_961_R') ? undefined : json['id_2009_A_AND_A_498_961_R'],
        'consideredCategoryAffiliationProbabilityFlag': !exists(json, 'consideredCategoryAffiliationProbabilityFlag') ? undefined : json['consideredCategoryAffiliationProbabilityFlag'],
        'binarySystemComponent': !exists(json, 'binarySystemComponent') ? undefined : json['binarySystemComponent'],
        'icrsRightAscension': !exists(json, 'icrsRightAscension') ? undefined : json['icrsRightAscension'],
        'icrsDeclination': !exists(json, 'icrsDeclination') ? undefined : json['icrsDeclination'],
        'galacticLongitude': !exists(json, 'galacticLongitude') ? undefined : json['galacticLongitude'],
        'galacticLatitude': !exists(json, 'galacticLatitude') ? undefined : json['galacticLatitude'],
    };
}

export function StarBasicInfoToJSON(value?: StarBasicInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'id_2009_A_AND_A_498_961_R': value.id2009AANDA498961R,
        'consideredCategoryAffiliationProbabilityFlag': value.consideredCategoryAffiliationProbabilityFlag,
        'binarySystemComponent': value.binarySystemComponent,
        'icrsRightAscension': value.icrsRightAscension,
        'icrsDeclination': value.icrsDeclination,
        'galacticLongitude': value.galacticLongitude,
        'galacticLatitude': value.galacticLatitude,
    };
}

