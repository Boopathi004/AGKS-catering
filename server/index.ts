import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// lowdb setup for bookings
type Booking = {
  name: string;
  email: string;
  phone?: string;
  eventDate: string;
  guestCount: number;
  message?: string;
  timestamp: string;
};
interface Schema {
  bookings: Booking[];
}

const dbFile = path.resolve(__dirname, "data", "bookings.json");
const adapter = new JSONFileSync<Schema>(dbFile);
// Provide default data to avoid "missing default data" error
const db = new LowSync<Schema>(adapter, { bookings: [] });
// Load existing data or initialize
db.read();
if (!db.data) {
  db.data = { bookings: [] };
  db.write();
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Booking endpoint – stores request in bookings.json
  app.post("/api/bookings", (req, res) => {
    const { name, email, phone, eventDate, guestCount, message } = req.body;
    if (!name || !email || !eventDate || !guestCount) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newBooking: Booking = {
      name,
      email,
      phone: phone ?? "",
      eventDate,
      guestCount: Number(guestCount),
      message: message ?? "",
      timestamp: new Date().toISOString(),
    };
    db.data!.bookings.push(newBooking);
    db.write();
    res.status(201).json({ success: true, booking: newBooking });
  });

  // Serve static assets (Vite build output)
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));

  // SPA fallback – always return index.html
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 4000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
