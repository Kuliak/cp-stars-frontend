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


import * as runtime from '../runtime';
import type {
  Star,
  StarBasicInfo,
} from '../models';
import {
    StarFromJSON,
    StarToJSON,
    StarBasicInfoFromJSON,
    StarBasicInfoToJSON,
} from '../models';

export interface GetStarDetailsRequest {
    id: number;
}

/**
 * 
 */
export class StarsControllerApi extends runtime.BaseAPI {

    /**
     * Return list of all stars in the database. Each star has only basic information assigned (coordinates).
     * Get basic (general) information about all stars.
     */
    async getBasicInfoStarsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StarBasicInfo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StarBasicInfoFromJSON));
    }

    /**
     * Return list of all stars in the database. Each star has only basic information assigned (coordinates).
     * Get basic (general) information about all stars.
     */
    async getBasicInfoStarsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StarBasicInfo>> {
        const response = await this.getBasicInfoStarsListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Response contains exhaustive information about the star both from the database and external services. Information obtained include: - coordinates - identifiers - photometry - proper motions and parallaxes
     * Get all information about specified star.
     */
    async getStarDetailsRaw(requestParameters: GetStarDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Star>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStarDetails.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StarFromJSON(jsonValue));
    }

    /**
     * Response contains exhaustive information about the star both from the database and external services. Information obtained include: - coordinates - identifiers - photometry - proper motions and parallaxes
     * Get all information about specified star.
     */
    async getStarDetails(requestParameters: GetStarDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Star> {
        const response = await this.getStarDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
