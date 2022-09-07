export type TransactionModel = {
    data_transacao: Date | string;
    id_conta: number;
    id_transacao: number;
    valor: number;
};


export type AccountModel = {
    data_criacao: Date | string;
    flag_ativo: boolean;
    id_conta: number;
    id_pessoa: number;
    limite_saque_diario: number;
    saldo: number;
    tipo_conta: number;
};

export type BalanceModel = {
    saldo: number;
};
