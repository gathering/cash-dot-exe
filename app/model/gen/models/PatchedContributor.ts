/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedContributor = {
    readonly obj_type?: string;
    readonly permissions?: Array<any>;
    readonly id?: number;
    entry?: number;
    user?: string;
    extra_info?: string | null;
    is_owner?: boolean;
};
