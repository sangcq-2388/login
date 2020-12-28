// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken";

const JWT_KEY = "sdfjoqwewqeqwehjkh";
export default (req, res) => {
  const { email, password } = req.body;
  res.json({
    token: jwt.sign(
      {
        email: "abcd@gmail.com",
        password: 123456,
      },
      JWT_KEY
    ),
  });
};
