import { articles } from "../../../data";

export default function hanler(req, res) {
  res.status(200).json(articles);
}
