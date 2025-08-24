import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc"; // ✅ RSC friendly MDX
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // syntax highlight theme

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const res = await fetch(`${baseUrl}/api/blogs/${params.slug}`, {
        cache: "no-store", // optional: disable caching
    });

    if (!res.ok) return notFound();

    const blog = await res.json();

    return (
        <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
            {/* Dotted Background */}
            <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

            {/* Grid layout */}
            <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full">
                {/* LEFT COLUMN */}
                <div className="relative">
                    <div className="w-[280px] h-[242px] ml-[50px]" />
                </div>

                {/* MIDDLE COLUMN */}
                <div className="middle ml-2 relative rounded-[0px] dark:shadow-xl shadow-neutral-500/50 dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">
                    <div style={{ zIndex: 100, width: '100%' }}>
                        <Navbar />
                    </div>

                    <div className="max-w-3xl mx-auto px-6 py-12">
                        {/* Blog Meta */}
                        <h1 className="mb-2 text-3xl font-bold">{blog.meta.title}</h1>
                        <p className="text-sm text-neutral-500 mb-6">{blog.meta.date}</p>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                            {blog.meta.description}
                        </p>

                        {/* Blog Content */}
                        <article className="prose dark:prose-invert max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="text-2xl font-bold text-blue-400 border-b border-gray-700 pb-1">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-xl font-semibold text-gray-200 mt-4">
                                            {children}
                                        </h2>
                                    ),
                                    strong: ({ children }) => (
                                        <strong className="text-white font-semibold">{children}</strong>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                            {children}
                                        </ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="leading-relaxed">{children}</li>
                                    ),
                                    p: ({ children }) => (
                                        <p className="text-gray-300 leading-relaxed">{children}</p>
                                    ),
                                    code: ({ children }) => (
                                        <code className="bg-gray-800 text-green-400 px-1 rounded">
                                            {children}
                                        </code>
                                    ),
                                    pre: ({ children }) => (
                                        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
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

                {/* RIGHT COLUMN */}
                <div className="relative">
                    <div className="w-[280px] h-[400px] ml-[15px]" />
                </div>
            </div>
        </div>
    );
}
