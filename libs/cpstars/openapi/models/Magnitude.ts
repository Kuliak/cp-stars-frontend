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
import type { DataSource } from './DataSource';
import {
    DataSourceFromJSON,
    DataSourceFromJSONTyped,
    DataSourceToJSON,
} from './DataSource';

/**
 * 
 * @export
 * @interface Magnitude
 */
export interface Magnitude {
    /**
     * 
     * @type {number}
     * @memberof Magnitude
     */
    id?: number;
    /**
     * 
     * @type {DataSource}
     * @memberof Magnitude
     */
    datasource?: DataSource;
    /**
     * 
     * @type {string}
     * @memberof Magnitude
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Magnitude
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof Magnitude
     */
    error?: number;
    /**
     * 
     * @type {string}
     * @memberof Magnitude
     */
    quality?: string;
    /**
     * 
     * @type {string}
     * @memberof Magnitude
     */
    uncertaintyFlag?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Magnitude
     */
    defined?: boolean;
}

/**
 * Check if a given object implements the Magnitude interface.
 */
export function instanceOfMagnitude(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MagnitudeFromJSON(json: any): Magnitude {
    return MagnitudeFromJSONTyped(json, false);
}

export function MagnitudeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Magnitude {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'datasource': !exists(json, 'datasource') ? undefined : DataSourceFromJSON(json['datasource']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'quality': !exists(json, 'quality') ? undefined : json['quality'],
        'uncertaintyFlag': !exists(json, 'uncertaintyFlag') ? undefined : json['uncertaintyFlag'],
        'defined': !exists(json, 'defined') ? undefined : json['defined'],
    };
}

export function MagnitudeToJSON(value?: Magnitude | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'datasource': DataSourceToJSON(value.datasource),
        'name': value.name,
        'value': value.value,
        'error': value.error,
        'quality': value.quality,
        'uncertaintyFlag': value.uncertaintyFlag,
        'defined': value.defined,
    };
}

