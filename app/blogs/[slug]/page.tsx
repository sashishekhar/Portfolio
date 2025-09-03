import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";       // ✅ light mode
import "highlight.js/styles/github-dark.css"; // ✅ dark mode handled with `dark:`

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Updated interface for Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    // Await the params Promise
    const { slug } = await params;
    
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) return notFound();

    const blog = await res.json();

    return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50  bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        {/* MIDDLE COLUMN (main content) */}
        <div className="middle w-full max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

          <div className="absolute top-0 -left-8 h-full w-[20px] opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="herringbone" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#herringbone)" />
            </svg>

          </div>

          {/* RIGHT STRIP (mirrored waves) */}
          <div className="absolute top-0 -right-8 h-full w-[20px] opacity-60 transform scale-x-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="herringbone" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#herringbone)" />
            </svg>

          </div>

          <div style={{ zIndex: 100, width: "100%" }}>
                        <Navbar />
                    </div>

                    <div className="max-w-3xl mx-auto px-6 py-12">
                        {/* Blog Meta */}
                        <h1 className="mb-2 text-3xl font-bold text-neutral-900 dark:text-white">
                            {blog.meta.title}
                        </h1>
                        <p className="text-sm text-neutral-500 mb-6">{blog.meta.date}</p>
                        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                            {blog.meta.description}
                        </p>

                        {/* Blog Content */}
                        <article className="prose prose-neutral dark:prose-invert items-start max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 border-b border-gray-300 dark:border-gray-700 pb-1">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-xl font-semibold text-neutral-800 dark:text-gray-200 mt-4">
                                            {children}
                                        </h2>
                                    ),
                                    strong: ({ children }) => (
                                        <strong className="text-black dark:text-white font-semibold">
                                            {children}
                                        </strong>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-gray-300">
                                            {children}
                                        </ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="leading-relaxed">{children}</li>
                                    ),
                                    p: ({ children }) => (
                                        <p className="text-neutral-700 dark:text-gray-300 leading-relaxed">
                                            {children}
                                        </p>
                                    ),
                                    code: ({ children }) => (
                                        <code className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-green-400 px-1 rounded">
                                            {children}
                                        </code>
                                    ),
                                    pre: ({ children }) => (
                                        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-neutral-800 dark:text-gray-200">
                                            {children}
                                        </pre>
                                    ),
                                }}
                            >
                                {blog.content}
                            </ReactMarkdown>
                        </article>
                    </div>

                    <div className="mt-20">
                        <Footer />
                    </div>
        </div>
      </div>
    </div>
  );
}

// Optional: Add generateMetadata function if you want dynamic meta tags
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      return {
        title: 'Blog Post Not Found',
      };
    }
    
    const blog = await res.json();
    
    return {
      title: blog.meta.title,
      description: blog.meta.description,
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
    };
  }
}