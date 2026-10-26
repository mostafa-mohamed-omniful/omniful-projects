import { useEffect, useRef } from 'react';
import type { Project } from '../../content';
import './AppDialog.css';

// Runs one of the demo apps in place, so a visitor can use it without leaving the page.
export const AppDialog = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  // The demos link back home from their own pages; inside the dialog that link would load the portfolio again.
  const hideHomeLink = (frame: HTMLIFrameElement) => {
    const doc = frame.contentDocument;
    if (!doc) return;
    const style = doc.createElement('style');
    style.textContent = 'a[href="/"] { display: none !important; }';
    doc.head.appendChild(style);
  };

  return (
    <dialog
      ref={dialogRef}
      className="app-dialog"
      aria-labelledby="app-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the dialog itself.
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {project && (
        <>
          <div className="app-dialog-bar">
            <h2 className="app-dialog-title" id="app-dialog-title">{project.title}</h2>
            <a className="app-dialog-full" href={project.path} target="_blank" rel="noopener noreferrer">Open in a new tab</a>
            <button className="app-dialog-close" type="button" onClick={onClose}>Close</button>
          </div>
          <iframe
            className="app-dialog-frame"
            src={project.path}
            title={`${project.title}, running`}
            onLoad={(event) => hideHomeLink(event.currentTarget)}
          />
        </>
      )}
    </dialog>
  );
};
