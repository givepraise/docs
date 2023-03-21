import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import DiscordLogo from "./Discord.svg";
import GithubLogo from "./Github.svg";
import OverlapHover from "../../components/OverlapHover";
import OverlapHoverSvg from "../../components/OverlapHoverSvg";
import React from "react";
import TwitterLogo from "./Twitter.svg";
import { useColorMode } from "@docusaurus/theme-common";

const HeaderSocialLogos = () => {
  const { colorMode } = useColorMode();

  const logoData = [
    {
      img: "/img/social-logos/github.png",
      href: "https://github.com/givepraise/praise",
      svg: <GithubLogo />,
    },
    {
      img: "/img/social-logos/discord.png",
      href: "https://discord.gg/U2ydzXBG6C",
      svg: <DiscordLogo />,
    },
    {
      img: "/img/social-logos/twitter.png",
      href: "https://twitter.com/givepraise",
      svg: <TwitterLogo />,
    },
  ];

  return (
    <div>
      {" "}
      <OverlapHover
        size={30}
        spacing={10}
        overlap={0.4}
        direction="left"
        className="mr-4"
        darkMode={colorMode === "dark"}
      >
        {logoData.map((data, index) => (
          <OverlapHoverSvg
            key={index}
            href={data.href}
            className="opacity-100 hover:opacity-70"
            svg={data.svg}
          />
        ))}
      </OverlapHover>
    </div>
  );
};

export default {
  ...ComponentTypes,
  "custom-HeaderSocialLogos": HeaderSocialLogos,
};
