import { articles } from "../../../data";

export default function hanler({ query: { id } }, res) {
  const filtered = articles.filter((articles) => articles.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
