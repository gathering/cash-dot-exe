/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MatchRequest } from "./MatchRequest";

export type PaginatedMatchRequestList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<MatchRequest>;
};
