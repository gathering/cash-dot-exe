/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type User = {
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly uuid: string;
    display_name_format: string;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    readonly url: string;
    readonly accepted_location: boolean;
    readonly row: number | null;
    readonly seat: number | null;
    readonly crew: Record<string, any> | null;
    readonly display_name: string;
    readonly email: string;
    role: string;
};
