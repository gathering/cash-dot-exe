/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns a nested representation of an object on read, but accepts only a primary key on write.
 */
export type EntryContributor = {
    readonly obj_type: string;
    readonly id: number;
    readonly user: string;
    extra_info?: string | null;
    is_owner?: boolean;
};
