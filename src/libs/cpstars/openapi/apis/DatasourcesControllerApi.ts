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

import * as runtime from '../runtime';
import type { DataSource, DataSourceBasicInfo } from '../models';
import { DataSourceBasicInfoFromJSON, DataSourceFromJSON } from '../models';

export interface GetDatasourceRequest {
  id: number;
}

/**
 *
 */
export class DatasourcesControllerApi extends runtime.BaseAPI {
  /**
   * Return list of all datasources in the database with basic information.
   * Return basic information about all datasources.
   */
  async getAllDatasourcesBasicInfoRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<DataSourceBasicInfo>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/datasources`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(DataSourceBasicInfoFromJSON)
    );
  }

  /**
   * Return list of all datasources in the database with basic information.
   * Return basic information about all datasources.
   */
  async getAllDatasourcesBasicInfo(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<DataSourceBasicInfo>> {
    const response = await this.getAllDatasourcesBasicInfoRaw(initOverrides);
    return await response.value();
  }

  /**
   * Return all information about specified datasource in the database.
   * Return exhaustive information about one datasource.
   */
  async getDatasourceRaw(
    requestParameters: GetDatasourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<DataSource>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getDatasource.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/datasources/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => DataSourceFromJSON(jsonValue));
  }

  /**
   * Return all information about specified datasource in the database.
   * Return exhaustive information about one datasource.
   */
  async getDatasource(
    requestParameters: GetDatasourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<DataSource> {
    const response = await this.getDatasourceRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
