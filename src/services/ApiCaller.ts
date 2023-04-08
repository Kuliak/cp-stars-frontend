import {
  DatasourcesControllerApi,
  ExternalServicesControllerApi,
  StarsControllerApi,
} from '../libs/cpstars/openapi';

/**
 * General class for unified access to all api calls and controllers
 * throughout the application.
 */
class ApiCaller {
  static readonly datasourcesController = new DatasourcesControllerApi();
  static readonly externalServicesController = new ExternalServicesControllerApi();
  static readonly starsController = new StarsControllerApi();
}

export default ApiCaller;
