// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function projectAPI(req, res) {
  const { name } = req.query;
  let description = "La Famiglia. Welcome to the Family!";
  res.status(200).json({ name, description });
}
