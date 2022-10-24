import type { OAuth2StrategyVerifyParams } from "remix-auth-oauth2";
import { OAuth2Strategy } from "remix-auth-oauth2";

// We need to import from Remix Auth the type of the strategy verify callback
import type { StrategyVerifyCallback } from "remix-auth";
import { getEnvVariable, getRequiredEnvironmentVariable } from "../common/utils/env";

// These are the custom options we need from the developer to use the strategy
export interface UnicornStrategyOptions {
    domain: string;
}

// This interface declare what extra params we will get from Auth0 on the
// verify callback
export interface UnicornExtraParams extends Record<string, string | number> {
    expires_in: number;
    token_type: "Bearer";
    scope: string;
}

// The Auth0Profile extends the OAuth2Profile with the extra params and mark
// some of them as required
export interface UnicornProfile {
    accessToken: string;
    refreshToken: string;
    profile: any;
    extraParams: any;
    provider: "unicorn";
}

// And we create our strategy extending the OAuth2Strategy, we also need to
// pass the User as we did on the FormStrategy, we pass the Auth0Profile and the
// extra params
export class UnicornStrategy<User> extends OAuth2Strategy<User, UnicornProfile, UnicornExtraParams> {
    // The OAuth2Strategy already has a name but we override it to be specific of
    // the service we are using
    name = "unicorn";

    private userInfoURL: string;
    private scope: string;

    // We receive our custom options and our verify callback
    constructor(
        options: UnicornStrategyOptions,
        // Here we type the verify callback as a StrategyVerifyCallback receiving
        // the User type and the OAuth2StrategyVerifyParams with the Auth0Profile
        // and the Auth0ExtraParams
        // This way, when using the strategy the verify function will receive as
        // params an object with accessToken, refreshToken, extraParams and profile.
        // The latest two matching the types of Auth0Profile and Auth0ExtraParams.
        verify: StrategyVerifyCallback<User, OAuth2StrategyVerifyParams<UnicornProfile, UnicornExtraParams>>
    ) {
        const authorizationURL = getRequiredEnvironmentVariable("AUTHORIZATION_URL");
        const tokenURL = getRequiredEnvironmentVariable("TOKEN_URL");
        const clientID = getRequiredEnvironmentVariable("CLIENT_ID");
        const clientSecret = getRequiredEnvironmentVariable("CLIENT_SECRET");
        const callbackURL = getRequiredEnvironmentVariable("CALLBACK_URL");

        // And we pass the options to the super constructor using our own options
        // to generate them, this was we can ask less configuration to the developer
        // using our strategy
        super(
            {
                authorizationURL,
                tokenURL,
                clientID,
                clientSecret,
                callbackURL,
            },
            verify
        );

        this.userInfoURL = `https://${options.domain}/accounts/users/@me`;
        this.scope = "identity email";
    }

    // We override the protected authorizationParams method to return a new
    // URLSearchParams with custom params we want to send to the authorizationURL.
    // Here we add the scope so Auth0 can use it, you can pass any extra param
    // you need to send to the authorizationURL here base on your provider.
    protected authorizationParams() {
        const urlSearchParams: Record<string, string> = {
            scope: this.scope,
        };

        return new URLSearchParams(urlSearchParams);
    }

    // We also override how to use the accessToken to get the profile of the user.
    // Here we fetch a Auth0 specific URL, get the profile data, and build the
    // object based on the Auth0Profile interface.
    protected async userProfile(accessToken: string): Promise<UnicornProfile> {
        let response = await fetch(this.userInfoURL, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const json = await response.json();

        return { ...json, provider: "unicorn" };
    }
}
