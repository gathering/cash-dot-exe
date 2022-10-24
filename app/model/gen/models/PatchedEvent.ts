/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedEvent = {
    readonly url?: string;
    readonly id?: string;
    name?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    visible?: boolean;
    active?: boolean;
};
