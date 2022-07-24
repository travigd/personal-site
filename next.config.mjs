import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";

import rehypeHighlight from "rehype-highlight";

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeHighlight, { subset: false }]],
  },
});

export default withMDX({
  pageExtensions: ["js", "jsx", "tsx", "mdx"],
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
  },
});
