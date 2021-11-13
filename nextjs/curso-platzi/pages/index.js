import React from "react";
import { Card } from "@components/main";
const styleH2 = {
  textAlign: "center",
  marginTop: "2.5rem",
  marginBottom: "1.5rem",
  textTransform: "uppercase",
  color: "#909640",
};
export default function index() {
  return (
    <section>
      <h2 style={styleH2}>avo</h2>
      <Card />
    </section>
  );
}
