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
 * @interface Identifier
 */
export interface Identifier {
    /**
     * 
     * @type {number}
     * @memberof Identifier
     */
    id: number;
    /**
     * 
     * @type {Star}
     * @memberof Identifier
     */
    star: Star;
    /**
     * 
     * @type {DataSource}
     * @memberof Identifier
     */
    datasource: DataSource;
    /**
     * 
     * @type {string}
     * @memberof Identifier
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Identifier
     */
    defined?: boolean;
}

/**
 * Check if a given object implements the Identifier interface.
 */
export function instanceOfIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "star" in value;
    isInstance = isInstance && "datasource" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IdentifierFromJSON(json: any): Identifier {
    return IdentifierFromJSONTyped(json, false);
}

export function IdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): Identifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'star': StarFromJSON(json['star']),
        'datasource': DataSourceFromJSON(json['datasource']),
        'name': json['name'],
        'defined': !exists(json, 'defined') ? undefined : json['defined'],
    };
}

export function IdentifierToJSON(value?: Identifier | null): any {
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
        'name': value.name,
        'defined': value.defined,
    };
}

