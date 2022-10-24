/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatusEnum } from "./StatusEnum";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type File = {
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly id: number;
    readonly url: string;
    name: string;
    type?: string | null;
    status?: StatusEnum;
    active?: boolean;
};
