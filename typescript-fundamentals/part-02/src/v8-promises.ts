interface IUser {
    name: string;
    role: string;
}

interface IApiResponse<T> {
    data: T;
    response: true;
    statusCode: number;
    success: true;
    message: string;
}

const fetchUser = async (): Promise<IUser | undefined> => {
    try {
        const res = await fetch("/api/v1/some-endpoint");
        const data = (await res.json()) as IApiResponse<IUser>;

        if (!res.ok || !data.success) {
            throw new Error(`Failed to fetch user data: ${data.message}`);
        }

        return data.data;
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("Something went wrong!");
        }
    }
};

const userData = await fetchUser();

if (userData) {
    console.log(userData.name)
}
