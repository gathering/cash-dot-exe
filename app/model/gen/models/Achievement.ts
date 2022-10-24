/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NestedCategory } from "./NestedCategory";
import type { TypeEnum } from "./TypeEnum";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type Achievement = {
    readonly obj_type: string;
    readonly permissions: Array<any>;
    readonly url: string;
    readonly id: number;
    /**
     * Requires manual validation to be awarded. This will be automatically set based on the contents of Award QuerySet.
     */
    readonly manual_validation: boolean;
    readonly my_award_count: number;
    category: NestedCategory;
    name: string;
    /**
     * Font Awesome icon class (fa-xxxx).
     */
    icon?: string | null;
    /**
     * Human friendly what needs to be done in order to be awarded this achievement. This is used to aid both users trying to achieve it and admins when awarding.
     */
    requirement: string;
    /**
     * Between 0 and 32767
     */
    points: number;
    /**
     * Allow users to be awarded this achievement multiple times. Allowed intervals should be written in the requirement field to help users and aid when manual validation is active.
     */
    multiple: boolean;
    /**
     * Hide the details of this Achievement until the user has been awarded it.
     */
    hidden: boolean;
    type: Array<TypeEnum>;
};
