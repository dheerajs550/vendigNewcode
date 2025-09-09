"use client"; // 👈 sabse pehle ye lagana hai

import React from "react";
import { useI18n } from "@/app/i18n/I18nContext";
import ButtomBtn from "@/components/bottombutton/page";
import HeadingTextCom from "@/components/heading/page";
import Link from "next/link";

export default function LanguagePage( {rfid} ) {
  // const { rfid } = params;
  console.log(rfid,"...") 
  const { setLang } = useI18n();
  const { t } = useI18n();

  const HeadingText = { HeadingText1: `${t("ChooseLanguage")}` };

  const pageData = [
    {
      pageData: "English",
      // pageLink: "/user/english",
      lengTeg: "en",
    },
    {
      pageData: "हिन्दी",
      // pageLink: "/user/hindi",
      lengTeg: "hi",
    },
    {
      pageData: "मराठी",
      // pageLink: "/user/marathi",
      lengTeg: "mr",
    },
  ];

  const bottomBtnRoot = {
    Cancel: "/user/popup/cancelprocess",
    Continue: `/user/help/${rfid}`,
  };

  return (
    <div className="text-center w-100">
      {/* Heading */}
      <HeadingTextCom data={HeadingText} />

      {/* Language buttons */}
      <div className="items-center mb-10" style={{ background: "#ecf6f6" }}>
        {pageData.map((label, index) => (
          <Link key={index} className="block my-4" href={`/user/language/${rfid}`}>
            <button
              onClick={() => setLang(label.lengTeg)}
              className="bg-transparent border border-teal-600 text-teal-600 hover:text-white bg-teal-600 font-medium px-6 py-2 rounded-md w-full max-w-xs hover:bg-teal-700 transition"
            >
              {label.pageData}
            </button>
          </Link>
        ))}
      </div>

      {/* Bottom buttons */}
      <ButtomBtn data={bottomBtnRoot} />
    </div>
  );
}