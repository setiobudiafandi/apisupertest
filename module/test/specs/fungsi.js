import request from "supertest";

function getUserDetail (url,token,id) {
    const response = request(url)
    .get("/users/"+id)
    .set('Authorization', 'Bearer '+token )

    return response;
}

export{getUserDetail};