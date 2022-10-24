/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LookingForEnum } from "./LookingForEnum";
import type { NestedCompetition } from "./NestedCompetition";
import type { NestedUser } from "./NestedUser";
import type { RankEnum } from "./RankEnum";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type MatchRequest = {
    active?: boolean;
    text: string;
    rank: RankEnum;
    role: string;
    competition: NestedCompetition;
    looking_for?: LookingForEnum;
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly id: number;
    author: NestedUser;
};
