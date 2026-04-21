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

function handleServerError(error) {
    if (error.response?.status >= 500) {
        throw new Error("У нас технические работы. Попробуйте позже.");
    }

    throw error;
}

export async function getTransactions(token) {
    try {
        const response = await api.get("/transactions", getAuthConfig(token));
        return response.data;
    } catch (error) {
        handleServerError(error);
    }
}

export async function createTransaction(token, transaction) {
    try {
        const response = await api.post("/transactions", transaction, {
            headers: {
                ...getAuthConfig(token).headers,
                "Content-Type": "",
            },
        });
        return response.data;
    } catch (error) {
        handleServerError(error);
    }
}
