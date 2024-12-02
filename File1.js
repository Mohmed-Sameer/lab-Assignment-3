const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>Team Member</h1><p><ul><li>Mohmed Sameer</li></ul></p>');
});
  