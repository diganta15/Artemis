const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { auth } = require('express-openid-connect');

const {userDataRouter} = require('./routes/userData');

const app = express();
const PORT = 8000;


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:8000',
    clientID: 'qn6LDCbni1zCd5yzrwXQPVYhyWsQiKqo',
    issuerBaseURL: 'https://dev-xvkfw8dm.jp.auth0.com'
};
app.use(morgan('dev'));
app.use(cors());

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    if (req.oidc.isAuthenticated()){
        res.status(200).json(req.oidc.user);
    }
    else{
        res.status(401).send(false);
    }
});

app.use('/user', userDataRouter);

// app.get('/dashboard',(req,res)=>{
//     res.send(req.oidc.user);
// })


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});