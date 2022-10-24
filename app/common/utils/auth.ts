import type { UnicornProfile } from "~/services/unicornAuth.server";

export const getRefreshTokenFromProfile = (profile: UnicornProfile) => {
  const { refreshToken } = profile;

  return refreshToken;
};

export const getAccessTokenFromProfile = (profile: UnicornProfile) => {
  const { accessToken } = profile;

  return accessToken;
};
