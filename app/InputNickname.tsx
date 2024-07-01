"use client";
import { button } from "@nextui-org/theme";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export const InputNickname = () => {
  const [nickname, setNickname] = useState("");

  return (
    <>
      <div>
        <Input label="닉네임" value={nickname} onValueChange={setNickname} />
      </div>

      <div className="flex gap-3">
        <Link
          className={button({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.route.champion(nickname)}
        >
          분석하기
        </Link>
      </div>
    </>
  );
};
