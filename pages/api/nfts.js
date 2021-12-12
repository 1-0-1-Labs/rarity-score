// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getNFTs } from "../../util/nfts";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
/* const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
) */

async function nftsAPI(req, res) {
  //await cors(req, res)

  let {
    page_id = 0,
    sort_by = "rarity_score",
    order = "desc",
    traits = "",
    attr_count = "",
    query,
  } = req.query;
  let { nfts, pages } = getNFTs(
    page_id,
    sort_by,
    order,
    traits.split(",").filter((val) => val),
    attr_count,
    query
  );
  res.status(200).json({ nfts, pages });
}
export default nftsAPI;
