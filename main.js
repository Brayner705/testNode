import express from 'express';

const app = express();

app.get('/', (requ, resp) => {
    resp.send('<h1>Hello, World!</h1>');
})

app.get('/about', (requ, resp) => {
    resp.send('<h1>About Us</h1><p>This is the about page.</p>');
})

app.listen(3000)

console.log('Server is running on http://localhost:3000');