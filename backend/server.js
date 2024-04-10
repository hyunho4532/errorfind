const express = require('express');
const https = require('https');
const cors = require('cors');
const {errorTypeFromData} = require("./api/errorType/errorTypeFromData");
const {platformFromData} = require("./api/platform/platformFromData");
const {DynamoDBSettings} = require("./aws/DynamoDB");


const corsOptions = {
    origin: '*',
    credentials: true
}

const app = express();
app.use(cors(corsOptions));

app.post('/errorTypeData', (req, res) => {
    https.get('https://czwpwf5o4m.execute-api.ap-northeast-2.amazonaws.com/stage/error/write', (response) => {

        errorTypeFromData(req, res, response);

    }).on('error', (error) => {
        console.error(error);
    })
})

app.get('/errorTypeData/get', (req, res) => {
    DynamoDBSettings()
})

app.post('/platformData', (req, res) => {
    https.get('https://czwpwf5o4m.execute-api.ap-northeast-2.amazonaws.com/stage/error/write', (response) => {

        platformFromData(req, res, response);

    }).on('error', (error) => {
        console.error(error);
    })
})

app.listen(50000, () => {
    console.log('연결 완료')
})