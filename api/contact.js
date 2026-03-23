import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    var { name, email, message } = req.body || {};

    // ── Validation ──
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    name = String(name).trim();
    email = String(email).trim();
    message = String(message).trim();

    if (name.length > 120) {
        return res
            .status(400)
            .json({ error: "Name too long (max 120 chars)." });
    }
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email." });
    }
    if (message.length > 5000) {
        return res
            .status(400)
            .json({ error: "Message too long (max 5000 chars)." });
    }

    // ── Insert into Neon ──
    try {
        var sql = neon(process.env.DATABASE_URL);

        await sql`
            INSERT INTO contact_messages (name, email, message)
            VALUES (${name}, ${email}, ${message})
        `;

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("DB error:", err);
        return res.status(500).json({ error: "Internal server error." });
    }
}
