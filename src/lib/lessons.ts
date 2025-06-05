import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const lessonsDirectory = path.join(process.cwd(), 'src', 'lessons');

export interface LessonData {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
}

export function getSortedLessonsData() {

  const fileNames = fs.readdirSync(lessonsDirectory);
  const allLessonsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');


    const fullPath = path.join(lessonsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the lesson metadata section
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; description: string }),
    };
  });
  // Sort lessons by some criteria if needed (e.g., date, order)
  return allLessonsData.sort((a, b) => {
    // Add your sorting logic here if you have a 'order' field in markdown frontmatter
    return 0;
  });
}

export async function getLessonData(slug: string): Promise<LessonData> {
  const fullPath = path.join(lessonsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the lesson metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; description: string }),
  };
}