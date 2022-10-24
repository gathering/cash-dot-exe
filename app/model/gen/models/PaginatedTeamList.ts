/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Team } from "./Team";

export type PaginatedTeamList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Team>;
};
