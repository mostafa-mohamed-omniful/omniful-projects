import { useEffect, useRef, useState } from 'react';
import { roles } from '../../content';
import { Reveal } from '../Reveal/Reveal';
import './Experience.css';

export const Experience = () => {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  // The row crossing the middle of the viewport becomes active as the list scrolls.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="xp" id="experience" aria-labelledby="xp-heading">
      <figure className="xp-figure">
        <div className="xp-frame">
          {roles.map((role, index) => (
            <img
              key={role.name}
              className={index === active ? 'is-active' : undefined}
              src={role.picture.src}
              alt={index === active ? role.picture.alt : ''}
              aria-hidden={index !== active}
              loading="lazy"
              width={1200}
              height={1500}
            />
          ))}
        </div>
        <figcaption className="xp-caption">{roles[active].picture.caption}</figcaption>
      </figure>

      <div className="xp-body">
        <Reveal>
          <h2 className="xp-heading site-display" id="xp-heading">Experience</h2>
        </Reveal>
        <ul className="xp-list">
          {roles.map((role, index) => (
            <li
              key={role.name}
              data-index={index}
              ref={(row) => { rowRefs.current[index] = row; }}
            >
              <Reveal order={index + 1}>
                <button
                  type="button"
                  className={`xp-row${index === active ? ' is-active' : ''}`}
                  aria-expanded={index === active}
                  aria-controls={`xp-detail-${index}`}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <span className="xp-name">{role.name}</span>
                  <span className="xp-years">{role.years}</span>
                </button>
                <div className="xp-detail" id={`xp-detail-${index}`}>
                  <div>
                    <p className="xp-role">{role.role}</p>
                    <p className="xp-description">{role.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
