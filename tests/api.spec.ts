import { test, expect } from '@playwright/test';

test('Get users API',async ({request}) => {
   const response = await request.get('https://jsonplaceholder.typicode.com/users') ;
   const text = await response.text();
   console.log(text);
   expect(response.status()).toBe(200);

});

test('Post data using post API',async ({request}) => {

   const response= await request.post('https://jsonplaceholder.typicode.com/users',{
      data:{
         name:"Samitaa",
         username:"Samitaa_QA",
         email:"samitaa@trichy.com"
      },
      headers:{
         'Content-Type': 'application/json'
      }
   })
   const responseBody= await response.json();
   console.log(responseBody);

   expect(response.status()).toBe(201);
   expect(responseBody.name).toBe("Samitaa");

}
)