import {SsoUser} from "../../ekb2-api";

export const emptyUser: SsoUser = {
    "@class": "",
    stoken: "",
    stokenExpire: "",
    refreshToken: "",
    login: "",
    fio: "",
    email: "",
    phone: "",
    orgId: "",
    orgName: "",
    orgDesc: "",
    parentOrgId: "",
    childOrgIds: "",
    accessOrgIds: "",
    refsOrgIds: "",
    roles: "",
    grants: "",
    remoteIP: "",
    remoteClient: "",
    anonymouse: false,
    deviceuuid: "",
    pushenabled: false,
    pushtoken: "",
    name: ""
};

export type UserProfile = {
    user: SsoUser,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean
}

export const emptyUserProfile: UserProfile = {
    user: emptyUser,
    error: undefined,
    isLoading: false,
    isLoaded: false
}

