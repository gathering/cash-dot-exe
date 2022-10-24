/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NestedUser } from "./NestedUser";

export type PaginatedNestedUserList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<NestedUser>;
};
