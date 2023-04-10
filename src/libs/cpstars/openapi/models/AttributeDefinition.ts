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
 * @interface AttributeDefinition
 */
export interface AttributeDefinition {
    /**
     * 
     * @type {number}
     * @memberof AttributeDefinition
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AttributeDefinition
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeDefinition
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeDefinition
     */
    description: string;
}

/**
 * Check if a given object implements the AttributeDefinition interface.
 */
export function instanceOfAttributeDefinition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function AttributeDefinitionFromJSON(json: any): AttributeDefinition {
    return AttributeDefinitionFromJSONTyped(json, false);
}

export function AttributeDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': json['type'],
        'description': json['description'],
    };
}

export function AttributeDefinitionToJSON(value?: AttributeDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'description': value.description,
    };
}

