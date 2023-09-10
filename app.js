const express = require('express');
const app = express();

app.use(express.json());









app.get('/api', (req, res) => {
        const SlackName = req.query.slackName;
        const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const currentUTC = new Date().toISOString();
        const track = req.query.track;
        const github_file_url = 'https://github.com/AishaIdowu/endpoint/blob/main/app.js';
        const github_repo_url = 'https://github.com/AishaIdowu/endpoint';
        const status_code = 200;

        const response = {
            SlackName,
            currentDayOfWeek,
            currentUTC,
            track,
            github_file_url,
            github_repo_url,
            status_code
        };

        res.status(200).json(response)

       
    

})

const Port = process.env.PORT || 3000;

app.listen(Port, () => {console.log(`App listening on port:${Port}`)});