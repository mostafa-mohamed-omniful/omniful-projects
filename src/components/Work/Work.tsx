import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { projects, type Project } from '../../content';
import './Work.css';

// One project on the pinned stage. While it crosses, the left half travels up and the right half down,
// so the title tears at the seam and lines up exactly when the project is centred.
const ProjectStage = ({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const travel = (distance: number) => (reduceMotion ? [0, 0, 0] : [distance, 0, -distance]);
  const paneUp = useTransform(scrollYProgress, [0, 0.5, 1], travel(20).map((v) => `${v}svh`));
  const paneDown = useTransform(scrollYProgress, [0, 0.5, 1], travel(-20).map((v) => `${v}svh`));
  const titleUp = useTransform(scrollYProgress, [0, 0.5, 1], travel(24).map((v) => `${v}svh`));
  const titleDown = useTransform(scrollYProgress, [0, 0.5, 1], travel(-24).map((v) => `${v}svh`));

  return (
    <article className="work-project" ref={ref}>
      <div className="work-stage">
        <div className="work-pane">
          <motion.img src={project.whole.src} alt={project.whole.alt} width={720} height={900} loading="lazy" style={{ y: paneUp }} />
        </div>
        <div className="work-pane">
          <motion.img src={project.detail.src} alt={project.detail.alt} width={720} height={900} loading="lazy" style={{ y: paneDown }} />
        </div>

        {/* Each half of the stage holds its own copy of the title, clipped at the seam. */}
        <h3 className="work-title site-display">
          <span className="work-title-col">
            <motion.span className="work-title-text" style={{ y: titleUp }}>{project.title}</motion.span>
          </span>
          <span className="work-title-col work-title-col-right" aria-hidden="true">
            <motion.span className="work-title-text" style={{ y: titleDown }}>{project.title}</motion.span>
          </span>
        </h3>

        <div className="work-caption">
          <div className="work-meta">
            <p className="work-discipline">{project.discipline}</p>
            <a
              className="work-open"
              href={project.path}
              onClick={(event) => {
                // A modified click still opens the app in its own tab or window.
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                event.preventDefault();
                onOpen(project);
              }}
            >
              Open the app
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Work = ({ onOpen }: { onOpen: (project: Project) => void }) => (
  <section className="work" id="work" aria-labelledby="work-heading">
    <h2 className="work-heading" id="work-heading"><span>Selected work</span></h2>
    {projects.map((project) => (
      <ProjectStage key={project.path} project={project} onOpen={onOpen} />
    ))}
  </section>
);
