/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Award } from "./Award";

export type PaginatedAwardList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Award>;
};
