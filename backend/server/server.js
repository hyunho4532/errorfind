const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    credentials: true
}

const app = express();
app.use(cors(corsOptions));

app.post('/fetchData', (req, res) => {
    https.get('https://czwpwf5o4m.execute-api.ap-northeast-2.amazonaws.com/stage/error/write', (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
            console.log(data.data);
        });

        response.on('end', () => {

            const jsonData = JSON.parse(data);

            const jsonDataFromErrorType = jsonData.data.errortype

            res.send(jsonDataFromErrorType);
        })

    }).on('error', (error) => {
        console.error(error);
    })
})

app.listen(50000, () => {
    console.log('연결 완료')
})