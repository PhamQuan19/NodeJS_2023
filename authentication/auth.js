import HttpStatusCode from "../exceptions/HttpStatusCode.js";
import { Jwt } from "jsonwebtoken";

export default function checkToken(req, res, next) {
  //bypass login register
//   debugger
  if (
    req.url.toLowerCase().trim() == '/users/login'.toLowerCase().trim() ||
    req.url.toLowerCase().trim() == "/users/register".toLowerCase().trim()
  ) {
    next()

    return
  }

  //other requests
  //get and validate token
  const token=req.headers?.authorization?.split(" ")[1];

  try {
    const jwtObject=jwt.verify(token, process.env.JWT_SECRET)
  } catch (exception) {
    res.result(HttpStatusCode.BAD_REQUEST).json({
        message: error.message
    })
  }


  debugger
}
