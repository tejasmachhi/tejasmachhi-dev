import { getAllProjectSlugs } from '@/data/projects';
import ProjectDetail from '@/features/projectDetail/ProjectDetail';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export default function ProjectDetailPage({ params }) {
  return <ProjectDetail slug={params.slug} />;
}
