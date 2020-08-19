/* eslint-disable import/prefer-default-export */
import { TokenService } from "../../services/token-service";

const auth = async (event, _context, callback) => {
  try {
    const { headers } = event;
    const token = headers.Authorization;
    const tokenService = new TokenService(token);

    const result = await tokenService.validateToken();

    const response = { statusCode: 200, body: JSON.stringify(result) };

    return callback(null, response);
  } catch (error) {
    const response = { statusCode: 500, body: JSON.stringify(error) };

    return callback(null, response);
  }
};

export { auth };
