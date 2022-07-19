import { PageLayout } from "@/layout/page";
import * as fs from "fs";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import path from "path";

interface Props {
  pages: ReadonlyArray<{
    slug: string;
    about: PageAbout;
  }>;
}

interface PageAbout {
  title: string;
  summary: string;
  date: string;
}

const PostIndex: NextPage<Props> = ({ pages }) => {
  return (
    <PageLayout pageTitle={"Posts"}>
      <div className="prose">
        <h1>Posts</h1>
        <p>
          I occasionally write up my misadventures. Sometimes I even learn
          something (and even, rarely, I find something I want to share with the
          world).
        </p>
        <p>
          Disclaimer: I'm a developer but I am not your developer. Everything
          here is accurate only as far as I could be bothered to check it. If
          you notice anything wrong, please let me know by{" "}
          <a href="https://twitter.com/travisdeprato" target="_blank">
            yelling at me on Twitter
          </a>
          , but don't blame if you blow up prod.
        </p>
        <ol>
          {pages.map(({ slug, about }) => (
            <div>
              <h3>
                <Link href={`/posts/${slug}`} key={slug} className="block">
                  {about.title}
                </Link>
                <div className="text-gray-500 text-sm">{about.date}</div>
              </h3>
              <p>{about.summary}</p>
            </div>
          ))}
        </ol>
      </div>
    </PageLayout>
  );
};

export default PostIndex;

const getStaticProps: GetStaticProps<Props> = async () => {
  const cwd = process.cwd();
  const files = fs
    .readdirSync(path.join(cwd, "src/pages/posts"))
    .filter((file) => file.endsWith(".mdx"));
  const pages = await Promise.all(
    files.map(async (slug) => {
      const page = await import(`./${slug}`);
      return {
        slug: slug.substring(0, slug.length - 4),
        about: page.ABOUT,
      };
    })
  );
  return {
    props: {
      pages,
    },
  };
};

export { getStaticProps };
