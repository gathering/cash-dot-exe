/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Level } from "./Level";

export type PaginatedLevelList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Level>;
};
