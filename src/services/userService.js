const baseUrl = 'http://localhost:3005/api/users'

export const getAllUsers = async () => {
    const response = await fetch(baseUrl);

    const users = await response.json();
    return users;
}

export const createUser = async (userData) => {

    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { country, city, street, streetNumber };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}