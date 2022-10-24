/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Genre } from "./Genre";

export type PaginatedGenreList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Genre>;
};
