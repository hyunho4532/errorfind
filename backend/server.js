const express = require('express');
const https = require('https');
const cors = require('cors');
const bodyParser = require('body-parser');
const aws = require("aws-sdk");
const {errorTypeFromData} = require("./api/errorType/errorTypeFromData");
const {platformFromData} = require("./api/platform/platformFromData");

const docClient = new aws.DynamoDB.DocumentClient({ region: 'ap-northeast-2' });

const corsOptions = {
    origin: '*',
    credentials: true
}

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/errorTypeData', (req, res) => {
    https.get('https://czwpwf5o4m.execute-api.ap-northeast-2.amazonaws.com/stage/error/write', (response) => {

        errorTypeFromData(req, res, response);

    }).on('error', (error) => {
        console.error(error);
    })
})

app.post('/platformData', (req, res) => {
    https.get('https://czwpwf5o4m.execute-api.ap-northeast-2.amazonaws.com/stage/error/write', (response) => {

        platformFromData(req, res, response);

    }).on('error', (error) => {
        console.error(error);
    })
})

app.post('/errorBoardData', (req, res) => {

    aws.config.update ({
        region: 'ap-northeast-2',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })

    const body = req.body;

    console.log(body);

    const params = {
        TableName: 'errorBoard',
        Item: body
    };

    docClient.put(params, (err, data) => {
        if (err) {
            console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
            res.status(500).send('Error saving data to DynamoDB');
        } else {
            console.log('Added item:', JSON.stringify(data, null, 2));
            res.json(body);
        }
    });
})

app.get('/errorBoardData/get', (req, res) => {
    
    aws.config.update ({
        region: 'ap-northeast-2',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })

    const params = {
        TableName: 'errorBoard',
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            res.status(500).send('Error saving data to DynamoDB');
        } else {
            res.json(data.Items);
        }
    });
})

app.listen(50000, () => {
    console.log('연결 완료')
})