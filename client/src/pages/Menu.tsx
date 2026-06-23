import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Menu Page - displays the catering menu rendered from markdown.
 * The markdown file is placed in the public folder (client/public/menu.md)
 * and fetched at runtime.
 */
export default function Menu() {
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/menu.md')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load menu');
        return res.text();
      })
      .then(setContent)
      .catch((e) => setError(e.message));
  }, []);

  if (error) {
    return <div className="container py-20 text-center text-red-500">{error}</div>;
  }

  return (
    <section className="py-20 bg-background text-foreground" id="menu">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Menu</h2>
        {content ? (
          <article className="prose prose-lg max-w-none mx-auto">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        ) : (
          <p className="text-center">Loading menu...</p>
        )}
      </div>
    </section>
  );
}
