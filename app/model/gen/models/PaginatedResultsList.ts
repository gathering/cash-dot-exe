/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Results } from "./Results";

export type PaginatedResultsList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Results>;
};
