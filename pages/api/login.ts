// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { handleSignIn } from "./../../lib/firebaseAuth";

type Data = {
  message: string;
  token: string;
  user: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { token, user } = await handleSignIn();
    res.json(200).json({
      message: "Login Successful",
      token,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
