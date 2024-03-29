const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(cookieParser());


const registerRoute = require('./routes/auth/register');
const loginRoute = require('./routes/auth/login');
// const userRoute = require('./routes/auth/user');
// const logout = require('./routes/auth/logout')
// const verify = require('./routes/auth/verify')


// const createPost = require('./routes/post/add_post')

// const profile = require('./routes/profile/profile')

app.use(registerRoute);
app.use(loginRoute);
// app.use(userRoute);
// app.use(logout)
// app.use(verify)
// app.use(profile)


// app.use(createPost)

app.options('*', cors());
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  const mypath = path.resolve(__dirname, 'client', 'build', 'index.html');
  return res.sendFile(mypath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});