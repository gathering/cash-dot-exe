/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Vote } from "./Vote";

export type PaginatedVoteList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Vote>;
};
