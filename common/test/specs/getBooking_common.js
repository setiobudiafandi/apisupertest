const { expect } = require("chai");
const request = require("supertest");
const baseURL = "https://restful.booker.herokuapp.com";

describe("Get all booking",() => {
    it('Positive - success get all booking',() => {
        const response = request(baseURL)
            .get("/booking")

        expect(response.status).to.equal(200)
    })
})