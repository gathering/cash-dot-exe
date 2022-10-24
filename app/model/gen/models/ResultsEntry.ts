/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns a nested representation of an object on read, but accepts only a primary key on write.
 */
export type ResultsEntry = {
    readonly title: string;
    readonly owner: string;
    /**
     * Between 0 and 32767
     */
    readonly score: number;
};
