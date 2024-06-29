import request from "supertest";
import { expect } from "chai";
//import { getUserDetail } from "./fungsi.js";

const baseURL = "https://kasir-api.belajarqa.com";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjllZTJkOTYxLTBhMWYtNDAwZC1hYzMwLWEzOTAyZDZmMzgxNyIsImNvbXBhbnlJZCI6ImY1Yjg2ZTNmLTAwNTctNGY1ZS05N2M3LTA0ODQ5ZDE5YTBmYSIsImlhdCI6MTcxOTU2OTQ2Mn0.eBdLeIBaUO-qjgrmZ5Dh_ONMNxA_jaQ3FD8-eniCsLE";

describe("Get all booking",() => {
    it('Positive - success get all booking',async () => {
        const response = await request(baseURL)
            .get("/users/"+"f614da4b-9929-4a57-9e46-038c020b792a")
            .set('Authorization', 'Bearer '+token )

        expect((await response).status).to.equal(200)
    })
})