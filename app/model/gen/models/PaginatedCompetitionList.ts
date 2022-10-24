/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Competition } from "./Competition";

export type PaginatedCompetitionList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Competition>;
};
