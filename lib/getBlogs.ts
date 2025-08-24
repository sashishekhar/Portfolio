"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: string;
};

const postsDirectory = path.join(process.cwd(), "content/blogs");

export async function getBlogs(): Promise<BlogMeta[]> {
  const filenames = await fs.promises.readdir(postsDirectory);

  const blogs = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = await fs.promises.readFile(filePath, "utf8");

      const { data } = matter(fileContent);

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        slug: filename.replace(/\.mdx?$/, ""),
        icon: data.icon || "",
      };
    })
  );

  return blogs;
}

export async function getBlogBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const source = await fs.promises.readFile(fullPath, "utf-8");
  const { content, data } = matter(source);

  return {
    meta: data as BlogMeta,
    content,
  };
}
