import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import { InfoMessageBox } from "@fremtind/jkl-message-box-react";
import type { UnboxPromise } from "~/services/api";
import { competitionsService } from "~/services/api";
import { authenticator } from "../services/auth.server";
import type { UnicornProfile } from "../services/unicornAuth.server";

export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);

    if (user) {
        const competitions = await competitionsService.getCompetitions(user);
        return {
            user,
            competitions,
        };
    }

    return user;
};

export default function Index() {
    const loaderData = useLoaderData<{
        user: UnicornProfile;
        competitions: UnboxPromise<ReturnType<typeof competitionsService.getCompetitions>>;
    } | null>();

    return (
        <>
            <header data-theme="dark">
                <h1>Cash.exe</h1>
                {loaderData ? (
                    <>
                        <form method="post" action="auth/logout">
                            <SecondaryButton>Logg ut</SecondaryButton>
                        </form>
                    </>
                ) : (
                    <form method="post" action="auth">
                        <SecondaryButton>Logg inn</SecondaryButton>
                    </form>
                )}
            </header>
            <main>
                {loaderData ? (
                    <ul>
                        {loaderData.competitions.results?.map((competition) => (
                            <li key={competition.id}>{competition.name}</li>
                        ))}
                    </ul>
                ) : (
                    <InfoMessageBox title="Du er ikke logget inn">
                        For å håndtere utdeling av premier må du først logge inn med din Unicorn-bruker.
                        <br />
                        <br />
                        <form method="post" action="auth">
                            <PrimaryButton>Logg inn</PrimaryButton>
                        </form>
                    </InfoMessageBox>
                )}
            </main>
        </>
    );
}
