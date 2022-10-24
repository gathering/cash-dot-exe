/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedTeam = {
    readonly obj_type?: string;
    readonly permissions?: Array<any>;
    readonly url?: string;
    readonly id?: number;
    readonly user_count?: number;
    readonly score?: number;
    readonly top_players?: string;
    name?: string;
};
