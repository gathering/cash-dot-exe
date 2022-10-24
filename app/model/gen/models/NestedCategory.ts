/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns a nested representation of an object on read, but accepts only a primary key on write.
 */
export type NestedCategory = {
    readonly obj_type: string;
    readonly url: string;
    readonly id: number;
    name: string;
    levels?: Record<string, any>;
};
