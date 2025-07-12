const axios = require('axios');

exports.getRecommendations = async (req, res) => {
    const { userId } = req.params;
    try {
        const response = await axios.get(`http://localhost:5001/recommendations/${userId}`);
        res.status(200).json(response.data);
    } catch (err) {
        res.status(400).json({ error: 'Error fetching recommendations' });
    }
};