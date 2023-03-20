/* tslint:disable */
/* eslint-disable */
/**
 * System rezerwacji miejsc na eventy
 * Niniejsza dokumentacja stanowi opis REST API implemtowanego przez serwer centralny. Endpointy 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: XXX@pw.edu.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Category } from '../models';
/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export const CategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new category
         * @param {string} categoryName name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCategories: async (categoryName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryName' is not null or undefined
            if (categoryName === null || categoryName === undefined) {
                throw new RequiredError('categoryName','Required parameter categoryName was null or undefined when calling addCategories.');
            }
            const localVarPath = `/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication token required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("sessionToken")
                    : await configuration.apiKey;
                localVarHeaderParameter["sessionToken"] = localVarApiKeyValue;
            }

            if (categoryName !== undefined) {
                localVarQueryParameter['categoryName'] = categoryName;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Return list of all categories
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCategories: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoriesApi - functional programming interface
 * @export
 */
export const CategoriesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new category
         * @param {string} categoryName name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCategories(categoryName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Category>>> {
            const localVarAxiosArgs = await CategoriesApiAxiosParamCreator(configuration).addCategories(categoryName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Return list of all categories
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCategories(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Category>>>> {
            const localVarAxiosArgs = await CategoriesApiAxiosParamCreator(configuration).getCategories(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CategoriesApi - factory interface
 * @export
 */
export const CategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create new category
         * @param {string} categoryName name of category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCategories(categoryName: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Category>> {
            return CategoriesApiFp(configuration).addCategories(categoryName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Return list of all categories
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCategories(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Category>>> {
            return CategoriesApiFp(configuration).getCategories(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export class CategoriesApi extends BaseAPI {
    /**
     * 
     * @summary Create new category
     * @param {string} categoryName name of category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public async addCategories(categoryName: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Category>> {
        return CategoriesApiFp(this.configuration).addCategories(categoryName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Return list of all categories
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public async getCategories(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Category>>> {
        return CategoriesApiFp(this.configuration).getCategories(options).then((request) => request(this.axios, this.basePath));
    }
}