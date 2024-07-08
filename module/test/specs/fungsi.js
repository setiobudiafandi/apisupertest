import request from "supertest";

function PostWithoutAuth (url, endpoint, reqBody) {
    const resBody = request(url)
        .post(endpoint)
        .send(reqBody)

        return resBody;
}

function PostWithAuth (token, url, endpoint, reqBody) {
    const resBody = request(url)
        .post(endpoint)
        .send(reqBody)
        .set('Authorization', 'Bearer '+token )

        return resBody;
}

function getUserDetail (url,token,id) {
    const response = request(url)
    .get("/users/"+id)
    .set('Authorization', 'Bearer '+token )

    return response;
}

function Put (token, url, endpoint, reqBody) {
    const resBody = request(url)
        .put(endpoint)
        .send(reqBody)
        .set('Authorization', 'Bearer '+token )

        return resBody;
}

function Delete (token, url, endpoint) {
    const resBody = request(url)
        .delete(endpoint)
        .set('Authorization', 'Bearer '+token )

        return resBody;
}

export{getUserDetail};
export{PostWithoutAuth};
export{PostWithAuth};
export{Put};
export{Delete};