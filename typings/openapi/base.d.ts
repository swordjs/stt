/**
 * OpenAI API
 * APIs for sampling from and fine-tuning language models
 *
 * The version of the OpenAPI document: 1.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Configuration } from './configuration';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare const BASE_PATH: string;
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
  csv: string;
  ssv: string;
  tsv: string;
  pipes: string;
};
/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string;
  options: AxiosRequestConfig;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
  protected basePath: string;
  protected axios: AxiosInstance;
  protected configuration: Configuration | undefined;
  constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
  field: string;
  constructor(field: string, msg?: string);
}
