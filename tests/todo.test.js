const { app, server } = require("../app.js");
const request = require("supertest");

describe("API /todo", () => {
  it("GET /todo", (done) => {
    request(app)
      .get("/todo")
      .expect(200)
      .then((response) => {
        const data = response.body[0];
        expect(data.title).toBe("Makan");
        done();
      })
      .catch(done);
  });

  it("GET /todo/:id", (done) => {
    request(app)
      .get("/todo/2")
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.title).toBe("Minum");
        expect(data.status).toBe("Sudah");
        done();
      })
      .catch(done);
  });

  it("POST /todo", (done) => {
    request(app)
      .post("/todo")
      .send({
        title: "Makan",
        status: "Sudah",
      })
      .expect(201)
      .then((response) => {
        const data = response.body;
        expect(data.message).toBe("New data created");
        done();
      })
      .catch(done);
  });

  it("Delete /todo", (done) => {
    request(app)
      .delete("/todo/4")
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.message).toBe("Data deleted succesfully");
        done();
      })
      .catch(done);
  });
});

afterAll((done) => {
  server.close();
  done();
});
