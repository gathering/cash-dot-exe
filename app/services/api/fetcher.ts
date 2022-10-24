import { getAccessTokenFromProfile } from "../../common/utils/auth";
import type { UnicornProfile } from "../unicornAuth.server";

export type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

const token = (profile: UnicornProfile | undefined) => (profile ? getAccessTokenFromProfile(profile) : null);

export const fetcher = async <T>(request: Request) => {
    return fetch(request).then<Promise<T>>(async (res) => {
        if (!res.ok) {
            try {
                const body = await res.json();
                return Promise.reject({
                    status: res.status,
                    ok: false,
                    body,
                });
            } catch (e) {
                return Promise.reject({
                    status: res.status,
                    ok: false,
                    body: "An unexpected error occured",
                });
            }
        }

        if (res.status === 204) {
            return Promise.resolve("Deleted");
        }

        return res.json();
    });
};

export const httpGet = async <T>(url: string, user?: UnicornProfile): Promise<T> => {
    const defaultHeaders: HeadersInit = {
        Accept: "application/json",
    };

    if (user) defaultHeaders["Authorization"] = `Bearer ${token(user)}`;

    const requestArgs: RequestInit = {
        method: "GET",
        headers: { ...defaultHeaders },
    };
    return fetcher<T>(new Request(url, requestArgs));
};

// httpPost, httpPut, etc
