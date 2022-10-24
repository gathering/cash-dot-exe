/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contributor } from "./Contributor";

export type PaginatedContributorList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Contributor>;
};
