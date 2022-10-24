/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StateEnum } from "./StateEnum";

/**
 * Returns a nested representation of an object on read, but accepts only a primary key on write.
 */
export type NestedCompetition = {
    readonly obj_type: string;
    readonly id: number;
    readonly url: string;
    readonly name: string;
    readonly brief_description: string | null;
    readonly state: StateEnum;
};
