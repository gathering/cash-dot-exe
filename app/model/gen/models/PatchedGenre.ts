/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedGenre = {
    readonly obj_type?: string;
    readonly permissions?: Array<any>;
    readonly id?: number;
    category?: string;
    name?: string;
};
