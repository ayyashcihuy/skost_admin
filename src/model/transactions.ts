export enum TransactionType {
    Payment = 1,
    Withdrawal
}

export enum TransactionStatus {
    Pending = 1,
    Success,
    Failed
}

export interface Transaction {
    id: number;
    date: Date;
    transaction_type: TransactionType;
    property: string;
    amount: number;
    customer_name: string;
    status: TransactionStatus;
}

export function convertTransactionTypeToString(transactionType: TransactionType): string {
    switch (transactionType) {
        case TransactionType.Payment:
            return "Pembayaran";
        case TransactionType.Withdrawal:
            return "Tarik Dana";
        default:
            return "Unknown";
    }
}

export function convertTransactionStatusToString(transactionStatus: TransactionStatus): string {
    switch (transactionStatus) {
        case TransactionStatus.Pending:
            return "Menunggu";
        case TransactionStatus.Success:
            return "Berhasil";
        case TransactionStatus.Failed:
            return "Gagal";
        default:
            return "Unknown";
    }
}

export function convertTransactionStatusToColor(transactionStatus: TransactionStatus): string {
    switch (transactionStatus) {
        case TransactionStatus.Pending:
            return "text-[#F39C12]";
        case TransactionStatus.Success:
            return "text-[#33C13B]";
        case TransactionStatus.Failed:
            return "text-[#E74C3C]";
        default:
            return "text-[#33C13B]";
    }
}

export function convertAmountToIDRString(amount: number): string {
    return `Rp. ${amount.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
