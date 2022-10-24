/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NestedGenre } from "./NestedGenre";
import type { VisibilityEnum } from "./VisibilityEnum";

/**
 * Extends the built-in ModelSerializer to enforce calling clean() on the associated model during validation.
 */
export type PatchedCompetition = {
    readonly obj_type?: string;
    readonly permissions?: Array<any>;
    readonly id?: number;
    readonly url?: string;
    genre?: NestedGenre;
    name?: string;
    brief_description?: string | null;
    description?: string | null;
    rules?: string;
    prizes?: Record<string, any> | null;
    fileupload?: Record<string, any> | null;
    links?: Record<string, any> | null;
    participant_limit?: number | null;
    toornament?: string | null;
    /**
     * Visible for regular users
     */
    published?: boolean;
    visibility?: VisibilityEnum;
    /**
     * Is this an externally run competition where we only report results?
     */
    report_win_loss?: boolean;
    rsvp?: boolean;
    /**
     * URL to Header Image for competition.
     */
    header_image?: string | null;
    /**
     * Required when an image is set.
     */
    header_credit?: string | null;
    sponsor_name?: string | null;
    sponsor_logo?: string | null;
    /**
     * Minimum number of contributors per entry.
     */
    team_min?: number | null;
    /**
     * Maximum number of contributors per entry.
     */
    team_max?: number | null;
    /**
     * Human readable string of which extra info, if any, is required from contributors?
     */
    contributor_extra?: string | null;
    /**
     * URL to infopage for external competition.
     */
    external_url_info?: string | null;
    /**
     * URL for logging in to external competition.
     */
    external_url_login?: string | null;
    readonly state?: string;
    readonly entries_count?: number;
    register_time_start?: string | null;
    register_time_end?: string | null;
    run_time_start?: string | null;
    run_time_end?: string | null;
    vote_time_start?: string | null;
    vote_time_end?: string | null;
    /**
     * If set, a pre-show lockdown will block all edits to the competition and related entries from the specified time to 'Showtime End'
     */
    show_prestart_lock?: string | null;
    show_time_start?: string | null;
    show_time_end?: string | null;
    readonly team_required?: boolean;
    readonly created?: string;
    readonly last_updated?: string;
    readonly next_state?: string;
    /**
     * Competition should have extra visibility
     */
    featured?: boolean;
    /**
     * Auto-Qualify will automatically qualify entries when they fulfill the requirements for number of contributors and extra info
     */
    autoqualify?: boolean;
};
