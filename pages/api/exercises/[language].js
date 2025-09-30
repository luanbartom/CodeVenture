import htmlExercises from "../../../src/data/htmlExercises";
import cssExercises from "../../../src/data/cssExercises";
import jsExercises from "../../../src/data/jsExercises";
import reactExercises from "../../../src/data/reactExercises";

const dataByLanguage = {
  html: htmlExercises,
  css: cssExercises,
  js: jsExercises,
  react: reactExercises,
};

export default function handler(req, res) {
  const { language } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const normalized = String(language || "").toLowerCase();
  const payload = dataByLanguage[normalized];

  if (!payload) {
    return res.status(404).json({ error: "Linguagem não encontrada" });
  }

  return res.status(200).json(payload);
}
