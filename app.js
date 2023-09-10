const express = require('express');
const app = express();

app.use(express.json());





app.get('/api', (req, res) => {
        const slack_name = req.query.slack_name;
        const track = req.query.track;

        const current_day = new Date().toLocaleDateString('en-US', { 
            weekday: 'long' 
        });

        // UTC Time
        const utc_time = new Date().toISOString();
        const formatted_utc_time = utc_time.slice(0, -5) + "Z";
        
        const github_file_url = 'https://github.com/AishaIdowu/endpoint/blob/main/app.js';
        const github_repo_url = 'https://github.com/AishaIdowu/endpoint';
        
        const status_code = 200;


        const response = {
            slack_name,
            current_day,
            utc_time:formatted_utc_time,
            track,
            github_file_url,
            github_repo_url,
            status_code
        };

        res.status(200).json(response)

       
    

})

const Port = process.env.PORT || 3000;

app.listen(Port, () => {console.log(`App listening on port:${Port}`)});