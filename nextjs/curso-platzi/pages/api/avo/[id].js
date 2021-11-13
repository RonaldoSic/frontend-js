import DB from "../../../database/db";
const getOneAvoById = async (req, res) => {
  try {
    const { id } = req.query;
    const db = new DB();
    const avo = await db.getById(id);
    res.status(200).setHeader("Content-Type", "aplication/json");
    res.json(avo);
    // res.json({ length, data: id });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ data: [], error: "Something went wrong" });
  }
};

export default getOneAvoById;
