const express = require('express');
const app = express();









app.get('/info', (req, res) => {
        const SlackName = 'Aisha Idowu';
        const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const currentUTCOffset = new Date().getTimezoneOffset();
        const track = 'Backend';
        const github_FileURL = '';
        const github_RepoURL = 'https://github.com/AishaIdowu/endpoint';

        const response = {
            SlackName,
            currentDayOfWeek,
            currentUTCOffset,
            track,
            github_FileURL,
            github_RepoURL,
            statusCode: 200
        };

        res.json(response)

       
    

})

const Port = process.env.PORT || 3000;

app.listen(Port, () => {console.log(`App listening on port:${Port}`)});