import request from "supertest";
import { expect } from "chai";
import { getUserDetail } from "./fungsi.js";
import { PostWithoutAuth } from "./fungsi.js";
import { baseURL } from "./value.js";

let accessToken;

describe("Login",() => {
    it("Login success",async() => {
        const payload = {
                "email": "sampleku@ex.com",
                "password": "pswd123"
             }
        const response = PostWithoutAuth(baseURL,"/authentications",payload)

        expect((await response).status).to.equal(201)
        accessToken = (await response).body.data.accessToken
    })
})

describe("Get user detail",() => {
    it('Positive - success get user detail',async () => {
        const respon = getUserDetail(baseURL,accessToken,"f614da4b-9929-4a57-9e46-038c020b792a");

        expect((await respon).status).to.equal(200)
    })
})