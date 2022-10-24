export const getRequiredEnvironmentVariable = (name: string) => {
    const variable = process.env[name];

    if (typeof variable === "undefined") {
        throw `Environment variable ${name} is required, but not configured`;
    }

    return variable;
};
