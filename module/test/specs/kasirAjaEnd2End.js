import request from "supertest";
import { expect } from "chai";
import { getUserDetail } from "./fungsi.js";
import { PostWithoutAuth } from "./fungsi.js";
import { PostWithAuth } from "./fungsi.js";
import { Put } from "./fungsi.js";
import { Delete } from "./fungsi.js";
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

let userID;

describe("Create user",() => {
    it("Create user success",async() => {
        const payload = {
            "name": "kasir-serbaguna",
            "email": "user@example.com",
            "password": "jiasda2321@"
         }
        const response = PostWithAuth(accessToken, baseURL, "/users", payload)
        userID = (await response).body.data.userId

        expect((await response).status).to.equal(201)
        expect((await response).body.status).to.equal("success")
    })
})

describe("Get user detail",() => {
    it('Success get user detail',async () => {
        const respon = getUserDetail(baseURL,accessToken,userID);

        expect((await respon).status).to.equal(200)
        expect((await respon).body.status).to.equal("success")
        expect((await respon).body.data.user.id).to.equal(userID)
    })
})

describe("Update user",() => {
    it("Update user success",async() => {
        const payload = {
            "name": "update user",
            "email": "updateuser@example.com"
         }
        const response = Put(accessToken, baseURL, "/users/" + userID, payload)

        expect((await response).status).to.equal(200)
        expect((await response).body.message).to.contain("berhasil")
    })
})

describe("Delete user",() => {
    it("Delete user success",async() => {
        const response = Delete(accessToken, baseURL, "/users/" + userID)

        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.equal("success")
    })
})