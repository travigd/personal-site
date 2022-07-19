import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
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
});
