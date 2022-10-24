/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns a nested representation of an object on read, but accepts only a primary key on write.
 */
export type NestedGenre = {
    readonly obj_type: string;
    readonly id: number;
    readonly url: string;
    category: string;
    readonly name: string;
};
