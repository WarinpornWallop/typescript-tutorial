import { getLessonData, getSortedLessonsData } from "@/lib/lessons";
import React from "react";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/CodeBlock";

interface LessonPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const lessons = getSortedLessonsData();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const awaitedParams = await params;
  const lessonData = await getLessonData(awaitedParams.slug);

  if (!lessonData) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{lessonData.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{lessonData.description}</p>
      <div
        className="prose lg:prose-xl" // ใช้ Tailwind Typography หรือจัดสไตล์เอง
        dangerouslySetInnerHTML={{ __html: lessonData.contentHtml }}
      />
      <CodeBlock
        code={`function greet(name: string): void {
        console.log(\`Hello, \${name}!\`);
        }
        greet("TypeScript");
        `}
        language="typescript"
        showLineNumbers={true}
      />
      <h2 className="mt-8 mb-4 text-3xl font-bold">ตัวอย่าง JavaScript</h2>
      <CodeBlock
        code={`const message = "Hello from JavaScript!";
        console.log(message);
        `}
        language="javascript"
        showLineNumbers={false}
      />
    </div>
  );
}
