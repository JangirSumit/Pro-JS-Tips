const REST_API = {
    get: getRequest,
    post: postRequest,
    delete: deleteRequest,
    put: putRequest
}

async function getRequest(endpoint) {
    const response = await fetch(endpoint);

    return await getResult(response);
}

async function postRequest(endpoint, bodyData) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    });

    return await getResult(response);
}

async function putRequest(endpoint, bodyData) {
    const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    });

    return await getResult(response);
}

async function deleteRequest(endpoint) {
    const response = await fetch(endpoint, {
        method: 'DELETE'
    });

    return await getResult(response);
}

async function getResult(response) {
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
    }

    const data = await response.json();

    return data;
}