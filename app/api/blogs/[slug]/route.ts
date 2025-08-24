import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> } // 👈 params is async
) {
  const { slug } = await context.params; // 👈 await before using
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const source = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(source);

  return NextResponse.json({
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
      icon: data.icon || "",
    },
    content,
  });
}
