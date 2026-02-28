import ProjectDetail from '@/features/projectDetail/ProjectDetail';

export default function ProjectDetailPage({ params }) {
  return <ProjectDetail slug={params.slug} />;
}
