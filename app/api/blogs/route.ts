import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export async function GET() {
  const filenames = fs.readdirSync(postsDirectory);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug: filename.replace(/\.mdx?$/, ""),
      icon: data.icon || "",
    };
  });

  return NextResponse.json(blogs);
}
