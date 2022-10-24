/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResultsEntry } from "./ResultsEntry";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedResults = {
    readonly name?: string;
    readonly entries_count?: number;
    readonly entries?: Array<ResultsEntry>;
};
