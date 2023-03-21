import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
// import OverlapHover from "../../components/OverlapHover";
// import OverlapHoverSvg from "../../components/OverlapHoverSvg";
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { OverlapHover, OverlapHoverSvg } from "react-overlap";

const HeaderSocialLogos = () => {
  const { colorMode } = useColorMode();

  const logoData = [
    {
      href: "https://github.com/givepraise/praise",
      svg: "/img/svg/Github.svg",
      alt: "GitHub",
    },
    {
      href: "https://discord.gg/U2ydzXBG6C",
      svg: "/img/svg/Discord.svg",
      alt: "Discord",
    },
    {
      href: "https://twitter.com/givepraise",
      svg: "/img/svg/Twitter.svg",
      alt: "Twitter",
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
