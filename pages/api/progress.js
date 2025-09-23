import { db } from "../../src/lib/db"; // ajuste o caminho conforme tua estrutura

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { email, language } = req.query;
      if (!email || !language) {
        return res.status(400).json({ error: "email e language são obrigatórios" });
      }

      // busca usuário
      const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
      if (users.length === 0) {
        return res.json({ step: 0 });
      }

      const user = users[0];

      // busca progresso
      const [progress] = await db.query(
        "SELECT step FROM progress WHERE user_id = ? AND language = ?",
        [user.id, language]
      );

      if (progress.length === 0) {
        return res.json({ step: 0 });
      }

      return res.json({ step: progress[0].step });
    }

    if (req.method === "POST") {
      const { email, language, step } = req.body;
      if (!email || !language || step === undefined) {
        return res.status(400).json({ error: "email, language e step são obrigatórios" });
      }

      // garante usuário
      let [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
      let user;
      if (users.length === 0) {
        const [result] = await db.query("INSERT INTO users (email) VALUES (?)", [email]);
        user = { id: result.insertId, email };
      } else {
        user = users[0];
      }

      // garante progresso (upsert)
      await db.query(
        `INSERT INTO progress (user_id, language, step)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE step = VALUES(step), updated_at = CURRENT_TIMESTAMP`,
        [user.id, language, step]
      );

      return res.json({ ok: true, step });
    }

    return res.status(405).json({ error: "Método não permitido" });
  } catch (err) {
    console.error("Erro API /progress:", err);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
