import ProjectLayout from '@/shared/ui/ProjectLayout/ProjectLayout';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ProjectLayout>{children}</ProjectLayout>
    </section>
  );
}
