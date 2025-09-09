// import LanguagePage from "./LanguagePage";

import LanguagePage from "../LanguagePage";

export default async function Page({ params }) {
  const { rfid } = await params;
  return <LanguagePage rfid={rfid} />;   // 👈 ab client ko prop pass ho raha hai
}