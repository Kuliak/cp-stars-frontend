/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Identifiers } from './Identifiers';
import {
    IdentifiersFromJSON,
    IdentifiersFromJSONTyped,
    IdentifiersToJSON,
} from './Identifiers';
import type { Magnitude } from './Magnitude';
import {
    MagnitudeFromJSON,
    MagnitudeFromJSONTyped,
    MagnitudeToJSON,
} from './Magnitude';
import type { Motion } from './Motion';
import {
    MotionFromJSON,
    MotionFromJSONTyped,
    MotionToJSON,
} from './Motion';
import type { RadialVelocity } from './RadialVelocity';
import {
    RadialVelocityFromJSON,
    RadialVelocityFromJSONTyped,
    RadialVelocityToJSON,
} from './RadialVelocity';
import type { StarDatasourceAttribute } from './StarDatasourceAttribute';
import {
    StarDatasourceAttributeFromJSON,
    StarDatasourceAttributeFromJSONTyped,
    StarDatasourceAttributeToJSON,
} from './StarDatasourceAttribute';

/**
 * 
 * @export
 * @interface Star
 */
export interface Star {
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Star
     */
    consideredCategoryAffiliationProbabilityFlag?: string;
    /**
     * 
     * @type {string}
     * @memberof Star
     */
    id2009AANDA498961R?: string;
    /**
     * 
     * @type {string}
     * @memberof Star
     */
    binarySystemComponent?: string;
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    icrsRightAscension?: number;
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    icrsRightAscensionError?: number;
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    icrsDeclination?: number;
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    icrsDeclinationError?: number;
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    galacticLongitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Star
     */
    galacticLatitude?: number;
    /**
     * 
     * @type {string}
     * @memberof Star
     */
    alpha?: string;
    /**
     * 
     * @type {string}
     * @memberof Star
     */
    delta?: string;
    /**
     * 
     * @type {Array<Magnitude>}
     * @memberof Star
     */
    magnitudes?: Array<Magnitude>;
    /**
     * 
     * @type {Identifiers}
     * @memberof Star
     */
    identifiers?: Identifiers;
    /**
     * 
     * @type {Array<Motion>}
     * @memberof Star
     */
    motions?: Array<Motion>;
    /**
     * 
     * @type {Array<RadialVelocity>}
     * @memberof Star
     */
    radialVelocities?: Array<RadialVelocity>;
    /**
     * 
     * @type {Array<StarDatasourceAttribute>}
     * @memberof Star
     */
    starDatasourceAttributes?: Array<StarDatasourceAttribute>;
}

/**
 * Check if a given object implements the Star interface.
 */
export function instanceOfStar(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function StarFromJSON(json: any): Star {
    return StarFromJSONTyped(json, false);
}

export function StarFromJSONTyped(json: any, ignoreDiscriminator: boolean): Star {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'consideredCategoryAffiliationProbabilityFlag': !exists(json, 'consideredCategoryAffiliationProbabilityFlag') ? undefined : json['consideredCategoryAffiliationProbabilityFlag'],
        'id2009AANDA498961R': !exists(json, 'id_2009_A_AND_A_498_961_R') ? undefined : json['id_2009_A_AND_A_498_961_R'],
        'binarySystemComponent': !exists(json, 'binarySystemComponent') ? undefined : json['binarySystemComponent'],
        'icrsRightAscension': !exists(json, 'icrsRightAscension') ? undefined : json['icrsRightAscension'],
        'icrsRightAscensionError': !exists(json, 'icrsRightAscensionError') ? undefined : json['icrsRightAscensionError'],
        'icrsDeclination': !exists(json, 'icrsDeclination') ? undefined : json['icrsDeclination'],
        'icrsDeclinationError': !exists(json, 'icrsDeclinationError') ? undefined : json['icrsDeclinationError'],
        'galacticLongitude': !exists(json, 'galacticLongitude') ? undefined : json['galacticLongitude'],
        'galacticLatitude': !exists(json, 'galacticLatitude') ? undefined : json['galacticLatitude'],
        'alpha': !exists(json, 'alpha') ? undefined : json['alpha'],
        'delta': !exists(json, 'delta') ? undefined : json['delta'],
        'magnitudes': !exists(json, 'magnitudes') ? undefined : ((json['magnitudes'] as Array<any>).map(MagnitudeFromJSON)),
        'identifiers': !exists(json, 'identifiers') ? undefined : IdentifiersFromJSON(json['identifiers']),
        'motions': !exists(json, 'motions') ? undefined : ((json['motions'] as Array<any>).map(MotionFromJSON)),
        'radialVelocities': !exists(json, 'radialVelocities') ? undefined : ((json['radialVelocities'] as Array<any>).map(RadialVelocityFromJSON)),
        'starDatasourceAttributes': !exists(json, 'starDatasourceAttributes') ? undefined : ((json['starDatasourceAttributes'] as Array<any>).map(StarDatasourceAttributeFromJSON)),
    };
}

export function StarToJSON(value?: Star | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'consideredCategoryAffiliationProbabilityFlag': value.consideredCategoryAffiliationProbabilityFlag,
        'id_2009_A_AND_A_498_961_R': value.id2009AANDA498961R,
        'binarySystemComponent': value.binarySystemComponent,
        'icrsRightAscension': value.icrsRightAscension,
        'icrsRightAscensionError': value.icrsRightAscensionError,
        'icrsDeclination': value.icrsDeclination,
        'icrsDeclinationError': value.icrsDeclinationError,
        'galacticLongitude': value.galacticLongitude,
        'galacticLatitude': value.galacticLatitude,
        'alpha': value.alpha,
        'delta': value.delta,
        'magnitudes': value.magnitudes === undefined ? undefined : ((value.magnitudes as Array<any>).map(MagnitudeToJSON)),
        'identifiers': IdentifiersToJSON(value.identifiers),
        'motions': value.motions === undefined ? undefined : ((value.motions as Array<any>).map(MotionToJSON)),
        'radialVelocities': value.radialVelocities === undefined ? undefined : ((value.radialVelocities as Array<any>).map(RadialVelocityToJSON)),
        'starDatasourceAttributes': value.starDatasourceAttributes === undefined ? undefined : ((value.starDatasourceAttributes as Array<any>).map(StarDatasourceAttributeToJSON)),
    };
}
