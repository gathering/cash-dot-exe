/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NestedCategory } from "./NestedCategory";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type Level = {
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly url: string;
    readonly id: number;
    category: NestedCategory;
    user: string;
    level: number;
    seen?: string | null;
    delivered?: string | null;
};
