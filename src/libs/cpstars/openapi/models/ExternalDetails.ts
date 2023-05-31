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
import type { VizierTable } from './VizierTable';
import {
    VizierTableFromJSON,
    VizierTableFromJSONTyped,
    VizierTableToJSON,
} from './VizierTable';

/**
 * 
 * @export
 * @interface ExternalDetails
 */
export interface ExternalDetails {
    /**
     * 
     * @type {number}
     * @memberof ExternalDetails
     */
    effectiveTemperature?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalDetails
     */
    effectiveTemperatureUnit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ExternalDetails
     */
    redshift?: number | null;
    /**
     * 
     * @type {Array<VizierTable>}
     * @memberof ExternalDetails
     */
    vizierTables?: Array<VizierTable> | null;
    /**
     * 
     * @type {string}
     * @memberof ExternalDetails
     */
    effectiveTemperatureValues?: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalDetails
     */
    effectiveTEMPERATUREVALUESREGEX?: string;
}

/**
 * Check if a given object implements the ExternalDetails interface.
 */
export function instanceOfExternalDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExternalDetailsFromJSON(json: any): ExternalDetails {
    return ExternalDetailsFromJSONTyped(json, false);
}

export function ExternalDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effectiveTemperature': !exists(json, 'effectiveTemperature') ? undefined : json['effectiveTemperature'],
        'effectiveTemperatureUnit': !exists(json, 'effectiveTemperatureUnit') ? undefined : json['effectiveTemperatureUnit'],
        'redshift': !exists(json, 'redshift') ? undefined : json['redshift'],
        'vizierTables': !exists(json, 'vizierTables') ? undefined : (json['vizierTables'] === null ? null : (json['vizierTables'] as Array<any>).map(VizierTableFromJSON)),
        'effectiveTemperatureValues': !exists(json, 'effectiveTemperatureValues') ? undefined : json['effectiveTemperatureValues'],
        'effectiveTEMPERATUREVALUESREGEX': !exists(json, 'effective_TEMPERATURE_VALUES_REGEX') ? undefined : json['effective_TEMPERATURE_VALUES_REGEX'],
    };
}

export function ExternalDetailsToJSON(value?: ExternalDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'effectiveTemperature': value.effectiveTemperature,
        'effectiveTemperatureUnit': value.effectiveTemperatureUnit,
        'redshift': value.redshift,
        'vizierTables': value.vizierTables === undefined ? undefined : (value.vizierTables === null ? null : (value.vizierTables as Array<any>).map(VizierTableToJSON)),
        'effectiveTemperatureValues': value.effectiveTemperatureValues,
        'effective_TEMPERATURE_VALUES_REGEX': value.effectiveTEMPERATUREVALUESREGEX,
    };
}

