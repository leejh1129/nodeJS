// middleApp.js

const express = require('express');
const cors = require('cors');

const app = express();

// 모든 요청에 응답
app.use(cors());