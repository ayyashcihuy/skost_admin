export const dummyVoucherTable = Array.from({ length: 30 }, (_, i) => {
    const status = Math.random() < 0.5 ? 1 : 2; // Randomly select 1 or 2
    const createdDate = new Date(Date.now() - Math.floor(Math.random() * 1000000000)); // Random past date
    const redeemDate = status === 2 ? new Date(createdDate.getTime() + Math.floor(Math.random() * 1000000000)) : undefined;

    return {
        id: `ABC${Math.floor(1000000 + Math.random() * 9000000)}`,
        user_id: `user${i + 1}`,
        voucher_type: Math.random() < 0.5 ? 1 : 2, // Randomly select 1 or 2
        status,
        redeem: redeemDate,
        updated: new Date(),
        created: createdDate,
    };
});