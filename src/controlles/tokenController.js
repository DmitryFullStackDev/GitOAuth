const axios = require("axios");

class TokenController {
  async getToken(req, res) {
    const code = req.params.code;

    try {
      const response = await axios.post('https://github.com/login/oauth/access_token', null, {
        params: {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          code: code,
        },
        headers: {
          Accept: 'application/json',
        },
      });

      const token = response.data.access_token;

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Failed to authenticate' });
    }
  }
  async getWelcome(req, res) {
      res.json({ welcome: true });
  }
}

module.exports = new TokenController()
