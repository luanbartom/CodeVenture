import { db } from "../../../src/lib/db"; // conexão MySQL (mysql2/promise)

export default async function handler(req, res) {
  const { language } = req.query;

  try {
    if (req.method === "GET") {
      const [rows] = await db.query(
        "SELECT id, language, title, description, question, answer, validator_pattern FROM exercises WHERE language = ? ORDER BY id ASC",
        [language]
      );
      return res.status(200).json(rows);
    }

    return res.status(405).json({ error: "Método não permitido" });
  } catch (err) {
    console.error("Erro ao buscar exercícios:", err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
