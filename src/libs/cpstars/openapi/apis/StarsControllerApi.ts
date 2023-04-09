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


import * as runtime from '../runtime';
import type {
  ExtendedStar,
  Identifier,
  Magnitude,
  Motion,
  RadialVelocity,
  Star,
  StarBasicInfo,
  StarDatasourceAttribute,
} from '../models';
import {
    ExtendedStarFromJSON,
    ExtendedStarToJSON,
    IdentifierFromJSON,
    IdentifierToJSON,
    MagnitudeFromJSON,
    MagnitudeToJSON,
    MotionFromJSON,
    MotionToJSON,
    RadialVelocityFromJSON,
    RadialVelocityToJSON,
    StarFromJSON,
    StarToJSON,
    StarBasicInfoFromJSON,
    StarBasicInfoToJSON,
    StarDatasourceAttributeFromJSON,
    StarDatasourceAttributeToJSON,
} from '../models';

export interface GetExtendedStarRequest {
    id: number;
}

export interface GetStarRequest {
    id: number;
}

export interface GetStarDatasourceAttributesRequest {
    starId: number;
}

export interface GetStarIdentifiersRequest {
    starId: number;
}

export interface GetStarMagnitudesRequest {
    starId: number;
}

export interface GetStarMotionsRequest {
    starId: number;
}

export interface GetStarRadialVelocitiesRequest {
    starId: number;
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
     * Response contains exhaustive information about the star both from the database and external services. IMPORTANT: Querying external sources may take some time. Information obtained include: - external data - coordinates - identifier - photometry - proper motions and parallaxes
     * Get all information about specified star including data fetched from external sources.
     */
    async getExtendedStarRaw(requestParameters: GetExtendedStarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExtendedStar>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getExtendedStar.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{id}/extended`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtendedStarFromJSON(jsonValue));
    }

    /**
     * Response contains exhaustive information about the star both from the database and external services. IMPORTANT: Querying external sources may take some time. Information obtained include: - external data - coordinates - identifier - photometry - proper motions and parallaxes
     * Get all information about specified star including data fetched from external sources.
     */
    async getExtendedStar(requestParameters: GetExtendedStarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExtendedStar> {
        const response = await this.getExtendedStarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Response contains exhaustive information ONLY from the appliaction database. Information obtained include: - coordinates - identifier - photometry - proper motions and parallaxes
     * Get all information about specified star.
     */
    async getStarRaw(requestParameters: GetStarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Star>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStar.');
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
     * Response contains exhaustive information ONLY from the appliaction database. Information obtained include: - coordinates - identifier - photometry - proper motions and parallaxes
     * Get all information about specified star.
     */
    async getStar(requestParameters: GetStarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Star> {
        const response = await this.getStarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Response contains list of all star-datasource attributes belonging to given star.
     * Get all star attributes paired with corresponding datasource.
     */
    async getStarDatasourceAttributesRaw(requestParameters: GetStarDatasourceAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StarDatasourceAttribute>>> {
        if (requestParameters.starId === null || requestParameters.starId === undefined) {
            throw new runtime.RequiredError('starId','Required parameter requestParameters.starId was null or undefined when calling getStarDatasourceAttributes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{starId}/stardatasourceattributes`.replace(`{${"starId"}}`, encodeURIComponent(String(requestParameters.starId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StarDatasourceAttributeFromJSON));
    }

    /**
     * Response contains list of all star-datasource attributes belonging to given star.
     * Get all star attributes paired with corresponding datasource.
     */
    async getStarDatasourceAttributes(requestParameters: GetStarDatasourceAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StarDatasourceAttribute>> {
        const response = await this.getStarDatasourceAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Response contains identifier belonging to given star.
     * Get all identifier corresponding to specified star.
     */
    async getStarIdentifiersRaw(requestParameters: GetStarIdentifiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Identifier>>> {
        if (requestParameters.starId === null || requestParameters.starId === undefined) {
            throw new runtime.RequiredError('starId','Required parameter requestParameters.starId was null or undefined when calling getStarIdentifiers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{starId}/identifiers`.replace(`{${"starId"}}`, encodeURIComponent(String(requestParameters.starId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentifierFromJSON));
    }

    /**
     * Response contains identifier belonging to given star.
     * Get all identifier corresponding to specified star.
     */
    async getStarIdentifiers(requestParameters: GetStarIdentifiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Identifier>> {
        const response = await this.getStarIdentifiersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Response contains list of all magnitudes belonging to given star.
     * Get all magnitudes corresponding to specified star.
     */
    async getStarMagnitudesRaw(requestParameters: GetStarMagnitudesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Magnitude>>> {
        if (requestParameters.starId === null || requestParameters.starId === undefined) {
            throw new runtime.RequiredError('starId','Required parameter requestParameters.starId was null or undefined when calling getStarMagnitudes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{starId}/magnitudes`.replace(`{${"starId"}}`, encodeURIComponent(String(requestParameters.starId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MagnitudeFromJSON));
    }

    /**
     * Response contains list of all magnitudes belonging to given star.
     * Get all magnitudes corresponding to specified star.
     */
    async getStarMagnitudes(requestParameters: GetStarMagnitudesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Magnitude>> {
        const response = await this.getStarMagnitudesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Response contains list of all motions belonging to given star. Information contain: - proper motion information - parallax information
     * Get all motions corresponding to specified star.
     */
    async getStarMotionsRaw(requestParameters: GetStarMotionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Motion>>> {
        if (requestParameters.starId === null || requestParameters.starId === undefined) {
            throw new runtime.RequiredError('starId','Required parameter requestParameters.starId was null or undefined when calling getStarMotions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{starId}/motions`.replace(`{${"starId"}}`, encodeURIComponent(String(requestParameters.starId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MotionFromJSON));
    }

    /**
     * Response contains list of all motions belonging to given star. Information contain: - proper motion information - parallax information
     * Get all motions corresponding to specified star.
     */
    async getStarMotions(requestParameters: GetStarMotionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Motion>> {
        const response = await this.getStarMotionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Response contains list of all radial velocities belonging to given star.
     * Get all radial velocities corresponding to specified star.
     */
    async getStarRadialVelocitiesRaw(requestParameters: GetStarRadialVelocitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RadialVelocity>>> {
        if (requestParameters.starId === null || requestParameters.starId === undefined) {
            throw new runtime.RequiredError('starId','Required parameter requestParameters.starId was null or undefined when calling getStarRadialVelocities.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stars/{starId}/radialvelocities`.replace(`{${"starId"}}`, encodeURIComponent(String(requestParameters.starId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RadialVelocityFromJSON));
    }

    /**
     * Response contains list of all radial velocities belonging to given star.
     * Get all radial velocities corresponding to specified star.
     */
    async getStarRadialVelocities(requestParameters: GetStarRadialVelocitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RadialVelocity>> {
        const response = await this.getStarRadialVelocitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
