import request from "supertest";

function PostWithoutAuth (url, endpoint, reqBody) {
    const resBody = request(url)
        .post(endpoint)
        .send(reqBody)

        return resBody;
}

function getUserDetail (url,token,id) {
    const response = request(url)
    .get("/users/"+id)
    .set('Authorization', 'Bearer '+token )

    return response;
}

export{getUserDetail};
export{PostWithoutAuth};