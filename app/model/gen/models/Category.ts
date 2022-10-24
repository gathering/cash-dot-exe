/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type Category = {
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly url: string;
    readonly id: number;
    name: string;
    levels?: Record<string, any>;
};
