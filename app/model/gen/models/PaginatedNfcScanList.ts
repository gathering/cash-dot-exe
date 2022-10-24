/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NfcScan } from "./NfcScan";

export type PaginatedNfcScanList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<NfcScan>;
};
