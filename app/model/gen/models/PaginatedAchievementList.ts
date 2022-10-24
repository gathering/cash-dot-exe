/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Achievement } from "./Achievement";

export type PaginatedAchievementList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Achievement>;
};
