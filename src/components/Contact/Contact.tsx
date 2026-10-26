import { useState, type FormEvent } from 'react';
import { contact } from '../../content';
import { Reveal } from '../Reveal/Reveal';
import './Contact.css';

const details = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
  { label: 'GitHub', value: 'github.com/12tifa12', href: contact.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/mostafa-mohamed', href: contact.linkedin },
];

export const Contact = () => {
  const [message, setMessage] = useState('');

  // There is no form backend: the message opens in the visitor's email app, ready to send.
  const send = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent('A project from your portfolio');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <Reveal>
          <h2 className="contact-prompt" id="contact-heading">
            <span className="contact-prompt-soft">Have something you want built?</span>
            <span>Tell me about it here.</span>
          </h2>
        </Reveal>
        <Reveal order={1}>
          <form className="contact-form" onSubmit={send}>
            <input
              className="contact-input"
              type="text"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="A booking site for my studio"
              aria-labelledby="contact-heading"
              aria-describedby="contact-hint"
              required
            />
            <button className="contact-submit" type="submit" aria-label="Send by email">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 10h13M11 4.5 16.5 10 11 15.5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </form>
          <p className="contact-hint" id="contact-hint">This opens your email app with your message filled in.</p>
        </Reveal>
        <Reveal order={2}>
          <dl className="contact-details">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>
                  <a
                    href={detail.href}
                    {...(detail.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {detail.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};
