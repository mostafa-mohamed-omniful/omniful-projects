import { useReducedMotion } from 'framer-motion';
import { blurt, contact, jackaroo } from '../../content';
import { Reveal } from '../Reveal/Reveal';
import './Work.css';

const Arrow = () => (
  <svg className="site-button-arrow" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path d="M3 9h11M9.5 4 14.5 9l-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const external = { target: '_blank', rel: 'noopener noreferrer' };

type ProjectTextProps = {
  title: string;
  tagline: string;
  description: string;
};

const ProjectText = ({ title, tagline, description }: ProjectTextProps) => (
  <>
    <Reveal>
      <h3 className="work-title site-display">{title}</h3>
      <p className="work-tagline">{tagline}</p>
    </Reveal>
    <Reveal order={1}>
      <p className="work-description">{description}</p>
    </Reveal>
  </>
);

const Facts = ({ facts }: { facts: { value: string; label: string }[] }) => (
  <dl className="work-facts">
    {facts.map((fact) => (
      <div key={fact.label}>
        <dt className="site-display">{fact.value}</dt>
        <dd>{fact.label}</dd>
      </div>
    ))}
  </dl>
);

const Features = ({ features }: { features: string[] }) => (
  <ul className="work-features">
    {features.map((feature) => <li key={feature}>{feature}</li>)}
  </ul>
);

const Blurt = () => (
  <article className="work-block work-blurt">
    <div className="work-phones">
      <Reveal>
        <figure>
          <div className="work-phone">
            {/* The real app on larger screens. On a phone an embedded app would trap scrolling, so it opens instead. */}
            <iframe
              className="work-phone-live"
              src={blurt.app}
              title="Blurt, running live"
              loading="lazy"
              allow="microphone"
            />
            <a className="work-phone-open" href={blurt.app} {...external} aria-label="Open Blurt">
              <img src={blurt.home.src} alt={blurt.home.alt} width={390} height={844} loading="lazy" />
            </a>
          </div>
          <figcaption className="work-live-caption">Running live, so try it: tap Type instead</figcaption>
        </figure>
      </Reveal>
      <Reveal className="work-phone-still" order={1}>
        <figure>
          <div className="work-phone">
            <img src={blurt.review.src} alt={blurt.review.alt} width={390} height={844} loading="lazy" />
          </div>
          <figcaption>The review step, after talking</figcaption>
        </figure>
      </Reveal>
      <Reveal className="work-phone-still work-phone-extra" order={2}>
        <figure>
          <div className="work-phone">
            <img src={blurt.shopping.src} alt={blurt.shopping.alt} width={390} height={844} loading="lazy" />
          </div>
          <figcaption>Shopping, sorted by aisle</figcaption>
        </figure>
      </Reveal>
    </div>

    <div className="work-text">
      <ProjectText {...blurt} />
      <Reveal order={2}>
        <Facts facts={blurt.facts} />
        <Features features={blurt.features} />
        <p className="work-built">Built with {blurt.built}</p>
        <p className="work-note">{blurt.note}</p>
        <div className="work-actions">
          <a className="site-button" href={blurt.app} {...external}>Open Blurt <Arrow /></a>
          <a href={blurt.code} {...external}>Read the code</a>
        </div>
      </Reveal>
    </div>
  </article>
);

const Jackaroo = () => {
  const reduceMotion = useReducedMotion();
  return (
    <article className="work-block work-jackaroo">
      <Reveal className="work-film">
        <figure>
          <video
            src={jackaroo.loop}
            poster={jackaroo.poster}
            width={1280}
            height={720}
            muted
            loop
            playsInline
            autoPlay={!reduceMotion}
            controls={!!reduceMotion}
            preload="metadata"
            aria-label="A recording of Jackaroo being played: marbles moving around the board as cards are played"
          />
          <figcaption>Recorded from the running game, against three CPUs</figcaption>
        </figure>
      </Reveal>

      <div className="work-text">
        <ProjectText {...jackaroo} />
        <Reveal order={2}>
          <Facts facts={jackaroo.facts} />
          <Features features={jackaroo.features} />
          <p className="work-built">Built with {jackaroo.built}</p>
          <div className="work-actions">
            <a className="site-button" href={jackaroo.code} {...external}>Read the code <Arrow /></a>
          </div>
        </Reveal>
      </div>
    </article>
  );
};

export const Work = () => (
  <section className="work" id="work" aria-labelledby="work-heading">
    <Reveal>
      <h2 className="work-heading site-display" id="work-heading">Work</h2>
    </Reveal>
    <Blurt />
    <Jackaroo />
    <Reveal>
      <p className="work-more-link">
        <a href={contact.github} {...external}>Everything else is on GitHub</a>
      </p>
    </Reveal>
  </section>
);
