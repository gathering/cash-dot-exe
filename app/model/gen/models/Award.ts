/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NestedAchievement } from "./NestedAchievement";
import type { NestedUser } from "./NestedUser";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type Award = {
    readonly obj_type: string;
    readonly url: string;
    readonly id: number;
    user: NestedUser;
    achievement: NestedAchievement;
    readonly created: string;
};
