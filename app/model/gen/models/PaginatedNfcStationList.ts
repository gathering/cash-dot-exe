/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NfcStation } from "./NfcStation";

export type PaginatedNfcStationList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<NfcStation>;
};
