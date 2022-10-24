/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Entry } from "./Entry";

export type PaginatedEntryList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Entry>;
};
