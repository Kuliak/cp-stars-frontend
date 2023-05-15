/* tslint:disable */
/* eslint-disable */
/**
 * Chemically Peculiar Stars Database OpenAPI definitions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DataSource } from './DataSource';
import {
    DataSourceFromJSON,
    DataSourceFromJSONTyped,
    DataSourceToJSON,
} from './DataSource';
import type { Star } from './Star';
import {
    StarFromJSON,
    StarFromJSONTyped,
    StarToJSON,
} from './Star';

/**
 * 
 * @export
 * @interface RadialVelocity
 */
export interface RadialVelocity {
    /**
     * 
     * @type {number}
     * @memberof RadialVelocity
     */
    id: number;
    /**
     * 
     * @type {Star}
     * @memberof RadialVelocity
     */
    star: Star;
    /**
     * 
     * @type {DataSource}
     * @memberof RadialVelocity
     */
    datasource: DataSource;
    /**
     * 
     * @type {number}
     * @memberof RadialVelocity
     */
    radialVelocity: number;
    /**
     * 
     * @type {number}
     * @memberof RadialVelocity
     */
    radialVelocityError?: number | null;
}

/**
 * Check if a given object implements the RadialVelocity interface.
 */
export function instanceOfRadialVelocity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "star" in value;
    isInstance = isInstance && "datasource" in value;
    isInstance = isInstance && "radialVelocity" in value;

    return isInstance;
}

export function RadialVelocityFromJSON(json: any): RadialVelocity {
    return RadialVelocityFromJSONTyped(json, false);
}

export function RadialVelocityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RadialVelocity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'star': StarFromJSON(json['star']),
        'datasource': DataSourceFromJSON(json['datasource']),
        'radialVelocity': json['radialVelocity'],
        'radialVelocityError': !exists(json, 'radialVelocityError') ? undefined : json['radialVelocityError'],
    };
}

export function RadialVelocityToJSON(value?: RadialVelocity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'star': StarToJSON(value.star),
        'datasource': DataSourceToJSON(value.datasource),
        'radialVelocity': value.radialVelocity,
        'radialVelocityError': value.radialVelocityError,
    };
}

