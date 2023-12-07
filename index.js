const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.get('/api/requirements', (_, res) => {
    const resourcesRequirements = {
        basicFps: 10,
        basicMs: 1000,
        workersFps: 15,
        workersMs: 100
    }
    res.send(resourcesRequirements);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
