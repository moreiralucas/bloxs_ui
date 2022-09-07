import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AccountModel } from "./models";

let env = process.env.VUE_APP_ENVIRONMENT;

const urls: Record<string, string> = {
    dev: "http://localhost:8080",
    prod: "http://localhost:8080",
};

let http = axios.create({
    baseURL: urls[env],
    headers: {},
});

const services = {
    createAccount: async (
        data: AccountModel,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<AccountModel>> => {
        const url = `/account`;
        return await http.post(url, data, config);
    },
    getBalanceByID: async (
        id_account: number | string | null,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<AccountModel>> => {
        const url = `/account/${id_account}/balance`;
        return await http.get(url, config);
    },
    blockAccountByID: async ( // FIXME:Add data parameter
        id_account: number | string | null,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<AccountModel>> => {
        const url = `/account/${id_account}/block`;
        return await http.post(url, config);
    },
    depositAccountByID: async (  // FIXME:Add data parameter
        id_account: number | string | null,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<AccountModel>> => {
        const url = `/account/${id_account}/deposit`;
        return await http.post(url, config);
    },
    extractAccountByID: async (
        id_account: number | string | null,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<AccountModel>> => {
        const url = `/account/${id_account}/extract`;
        return await http.get(url, config);
    },
    withdrawByID: async (  // FIXME:Add data parameter
        id_account: number | string | null,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<AccountModel>> => {
        const url = `/account/${id_account}/withdraw`;
        return await http.post(url, config);
    },
};

export default services;
