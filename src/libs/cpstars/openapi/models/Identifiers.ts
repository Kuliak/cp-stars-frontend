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
/**
 * 
 * @export
 * @interface Identifiers
 */
export interface Identifiers {
    /**
     * 
     * @type {number}
     * @memberof Identifiers
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Identifiers
     */
    gaiaDR2?: string;
    /**
     * 
     * @type {string}
     * @memberof Identifiers
     */
    gaiaDR3?: string;
    /**
     * 
     * @type {string}
     * @memberof Identifiers
     */
    hd?: string;
    /**
     * 
     * @type {string}
     * @memberof Identifiers
     */
    tyc?: string;
    /**
     * 
     * @type {string}
     * @memberof Identifiers
     */
    hip?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Identifiers
     */
    defined?: boolean;
}

/**
 * Check if a given object implements the Identifiers interface.
 */
export function instanceOfIdentifiers(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function IdentifiersFromJSON(json: any): Identifiers {
    return IdentifiersFromJSONTyped(json, false);
}

export function IdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Identifiers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'gaiaDR2': !exists(json, 'gaiaDR2') ? undefined : json['gaiaDR2'],
        'gaiaDR3': !exists(json, 'gaiaDR3') ? undefined : json['gaiaDR3'],
        'hd': !exists(json, 'hd') ? undefined : json['hd'],
        'tyc': !exists(json, 'tyc') ? undefined : json['tyc'],
        'hip': !exists(json, 'hip') ? undefined : json['hip'],
        'defined': !exists(json, 'defined') ? undefined : json['defined'],
    };
}

export function IdentifiersToJSON(value?: Identifiers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gaiaDR2': value.gaiaDR2,
        'gaiaDR3': value.gaiaDR3,
        'hd': value.hd,
        'tyc': value.tyc,
        'hip': value.hip,
        'defined': value.defined,
    };
}
