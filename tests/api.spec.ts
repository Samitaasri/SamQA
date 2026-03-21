import { test, expect } from '@playwright/test';

test('Get users API',async ({request}) => {
   const response = await request.get('https://jsonplaceholder.typicode.com/users') ;
   const text = await response.text();
   console.log(text);
   expect(response.status()).toBe(200);

});