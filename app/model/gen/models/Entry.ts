/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntryContributor } from "./EntryContributor";
import type { File } from "./File";
import type { NestedCompetition } from "./NestedCompetition";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type Entry = {
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly id: number;
    readonly url: string;
    title: string;
    competition: NestedCompetition;
    status?: string;
    crew_msg?: string | null;
    screen_msg?: string | null;
    vote_msg?: string | null;
    comment?: string | null;
    readonly contributors: Array<EntryContributor>;
    readonly files: Array<File>;
    readonly is_contributor: boolean;
    readonly is_owner: boolean;
    readonly owner: string;
    order?: number;
    /**
     * Between 0 and 32767
     */
    score?: number;
};
