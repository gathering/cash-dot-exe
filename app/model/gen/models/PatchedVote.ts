/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedVote = {
    readonly obj_type?: string;
    readonly url?: string;
    readonly id?: number;
    readonly user?: string;
    entry?: number;
    /**
     * A number between 1 and 5
     */
    score?: number;
};
