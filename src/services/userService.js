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
    });

    const createdUser = await response.json();
    return createdUser;
}

export const getUserById = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);

    const user = await response.json();

    return user.user;
}

export const deleteUserById = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
}

export const updateUserById = async (userId, userData) => {

    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { country, city, street, streetNumber };

    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)

    })
}