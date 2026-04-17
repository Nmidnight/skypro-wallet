import { api } from "./Api";

function getAuthConfig(token) {
    if (!token) {
        throw new Error("Authorization token is required");
    }

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

export async function getTransactions(token) {
    const response = await api.get("/transactions", getAuthConfig(token));
    return response.data;
}

export async function createTransaction(token, transaction) {
    const response = await api.post("/transactions", transaction, {
        headers: {
            ...getAuthConfig(token).headers,
            "Content-Type": "",
        },
    });
    return response.data;
}
