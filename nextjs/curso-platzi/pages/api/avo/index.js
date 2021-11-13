// import { IncomingMessage, ServerResponse } from "http";
import DB from "../../../database/db";

const allAvos = async (req, res) => {
  try {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    res.status(200).setHeader("Content-Type", "aplication/json");
    res.json({ length, data: allEntries });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ length: 0, data: [], error: "Something went wrong" });
    // res.redirect("/");
  }
};

export default allAvos;
