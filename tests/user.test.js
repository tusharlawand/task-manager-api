const request = require('supertest')
const app = require('../src/app')

test ('should sign up new user',async()=>{
   await request(app).post('/users').send({
       name:'Tushar Lawand',
       email:'tusharlawand@example.com',
       password:'Trupti@123'
   }).expect(201)
})