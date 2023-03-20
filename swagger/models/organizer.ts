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
import { Event } from './event';
/**
 * 
 * @export
 * @interface Organizer
 */
export interface Organizer {
    /**
     * 
     * @type {number}
     * @memberof Organizer
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Organizer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Organizer
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Organizer
     */
    password?: string;
    /**
     * 
     * @type {Array<Event>}
     * @memberof Organizer
     */
    events?: Array<Event>;
    /**
     * User Status
     * @type {string}
     * @memberof Organizer
     */
    status?: OrganizerStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum OrganizerStatusEnum {
    Pending = 'pending',
    Confirmed = 'confirmed'
}
