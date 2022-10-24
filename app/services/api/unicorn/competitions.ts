import type { UnicornProfile } from "~/services/unicornAuth.server";
import type { PaginatedCompetitionList } from "~/model/gen";
import { httpGet } from "../fetcher";

export const getCompetitions = async (profile: UnicornProfile) => {
    const competitions = await httpGet<PaginatedCompetitionList>(
        "https://competitions.gathering.org/api/competitions/competitions/",
        profile
    );

    return competitions;
};
