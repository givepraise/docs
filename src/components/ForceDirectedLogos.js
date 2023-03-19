import React, { useEffect, useRef } from "react";
import { forceCenter, forceManyBody, forceSimulation } from "d3-force";

const ForceDirectedLogos = ({ width = 600, height = 470, distance = 30 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const logoUrls = [
      "/img/logos/bankless.png",
      "/img/logos/brightid.png",
      "/img/logos/deepwork.png",
      "/img/logos/giveth.png",
      "/img/logos/gnosis.png",
      "/img/logos/protein.png",
      "/img/logos/tec.png",
      "/img/logos/cs.png",
      "/img/logos/gm.png",
      "/img/logos/dappnode.png",
      "/img/logos/refidao.png",
      "/img/logos/shapeshift.png",
      "/img/logos/talentdao.png",
    ];

    const logoLinks = [
      "https://bankless.givepraise.xyz",
      "https://brightid.givepraise.xyz",
      "https://praise.deepwork.studios",
      "https://praise.giveth.io",
      "https://praisegnosisdao.com",
      "https://protein.givepraise.xyz",
      "https://praise.tecommons.org",
      "https://praise.commonsstack.org",
      "https://https://praise.generalmagic.io/",
      "https://dappnode.givepraise.xyz",
      "https://refidao.givepraise.xyz",
      "https://shapeshift.givepraise.xyz",
      "https://talentdao.givepraise.xyz",
    ];

    const nodes = logoUrls.map((url, index) => ({
      index,
      url,
      link: logoLinks[index],
      radius: 80,
    }));

    const simulation = forceSimulation(nodes)
      .force("charge", forceManyBody().strength(-distance))
      .force("center", forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    function ticked() {
      context.clearRect(0, 0, width, height);

      nodes.forEach((d, i) => {
        const img = new Image();
        img.src = logoUrls[i];
        context.drawImage(
          img,
          d.x - d.radius / 2,
          d.y - d.radius / 2,
          d.radius,
          d.radius
        );
      });
    }

    function handleClick(event) {
      const { offsetX, offsetY } = event;
      const node = nodes.find(
        (d) => Math.hypot(offsetX - d.x, offsetY - d.y) <= d.radius / 2
      );
      if (node) {
        window.open(node.link, "_blank");
      }
    }

    canvas.addEventListener("click", handleClick);

    return () => {
      simulation.stop();
      canvas.removeEventListener("click", handleClick);
    };
  }, [width, height, distance]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default ForceDirectedLogos;
