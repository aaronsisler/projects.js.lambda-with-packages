/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

class TokenService {
  constructor(oAuthToken) {
    this.oAuthUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo";
    this.oAuthToken = oAuthToken;
    [this.bearer, this.oAuthTokenVal] = oAuthToken.split(" ");
  }

  async validateToken() {
    console.log(this.bearer);
    console.log(this.oAuthToken);
    const params = { id_token: this.oAuthTokenVal };
    const response = await axios.get(this.oAuthUrl, { params });

    console.log(response.status);
    console.log(response.data);

    return response.data;
  }
}

export { TokenService };
