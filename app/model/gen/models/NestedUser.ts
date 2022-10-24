/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns a nested representation of an object on read, but accepts only a primary key on write.
 */
export type NestedUser = {
    readonly obj_type: string;
    readonly uuid: string;
    readonly display_name: string;
};
