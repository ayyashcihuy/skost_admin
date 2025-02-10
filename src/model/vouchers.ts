export enum VoucherType {
    Laundry = 1,
    Catering
}

export enum VoucherStatus {
    Available = 1,
    Used
}

export function convertVoucherTypeToString(voucherType: VoucherType): string {
    switch (voucherType) {
        case VoucherType.Laundry:
            return "Laundry"
        case VoucherType.Catering:
            return "Catering"
        default:
            return "Unknown"
    }
}

export function convertVoucherStatusToString(voucherStatus: VoucherStatus): string {
    switch (voucherStatus) {
        case VoucherStatus.Used:
            return "Used"
        case VoucherStatus.Available:
            return "Available"
        default:
            return "Unknown"
    }
}

export function convertVoucherStatusToColor(voucherStatus: VoucherStatus): string {
    switch (voucherStatus) {
        case VoucherStatus.Used:
            return "text-[#E74C3C]"
        case VoucherStatus.Available:
            return "text-[#33C13B]"
        default:
            return "text-[#33C13B]"
    }
}