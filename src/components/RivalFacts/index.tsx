import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import data from '@site/src/data/rivals.json';
import { rivalWords as w } from './words';

/**
 * The dated facts each "Moving to HabitForge" guide prints, read from one copy of the app's
 * `docs/comparison-hub/competitors.json`. The app's contract test fails when the two differ.
 *
 * A raw anchor with its `rel` written out, because this is the only place the docs link to a third
 * party: new tab, `noopener noreferrer nofollow`. Docusaurus prerenders it, so it is in the built HTML.
 */
type Fact = { status: string; source?: string; checkedOn?: string };
type Price = {
  plan: string;
  amount: number | null;
  period: string;
  note?: string;
  source: string;
  checkedOn: string;
};
type Rival = {
  slug: string;
  name: string;
  officialUrl: string;
  lastChecked: string;
  prices: Price[];
  features: Record<string, Fact>;
};

const RIVALS = data.competitors as Rival[];
const OURS = data.ours as Record<string, string>;

const longDate = (iso: string): string =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${iso}T00:00:00Z`),
  );

const host = (url: string): string => new URL(url).hostname.replace(/^www\./, '');

function priceText(price: Price): string {
  if (price.amount === null) return w.amountNotStated;
  if (price.amount === 0) return w.free;
  const money = Number.isInteger(price.amount) ? `$${price.amount}` : `$${price.amount.toFixed(2)}`;
  const period = w.period[price.period as keyof typeof w.period];
  return period ? `${money} ${period}` : money;
}

const statusText = (status: string): string => w.status[status as keyof typeof w.status];

/** A link to a third party: a new tab, no ranking credit, no referrer. */
export function Out({ href, children }: { href: string; children: ReactNode }): ReactNode {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow">
      {children}
    </a>
  );
}

function rivalOf(slug: string): Rival {
  const rival = RIVALS.find((candidate) => candidate.slug === slug);
  if (!rival) throw new Error(`RivalFacts: no rival "${slug}" in src/data/rivals.json`);
  return rival;
}

/** The guide's dated fact table: prices with plan names, then every feature row. */
export function Facts({ slug }: { slug: string }): ReactNode {
  const rival = rivalOf(slug);
  return (
    <>
      <p>
        <strong>
          {w.lastChecked} {longDate(rival.lastChecked)}.
        </strong>{' '}
        {w.checkNote} <Out href={rival.officialUrl}>{w.checkSite(rival.name)}</Out>.
      </p>
      <table>
        <caption>{w.pricesCaption(rival.name)}</caption>
        <thead>
          <tr>
            <th scope="col">{w.plan}</th>
            <th scope="col">{w.price}</th>
            <th scope="col">{w.terms}</th>
            <th scope="col">{w.source}</th>
          </tr>
        </thead>
        <tbody>
          {rival.prices.map((price) => (
            <tr key={`${price.plan}-${price.period}`}>
              <th scope="row">{price.plan}</th>
              <td>{priceText(price)}</td>
              <td>{price.note}</td>
              <td>
                <Out href={price.source}>{host(price.source)}</Out>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <caption>{w.featuresCaption(rival.name)}</caption>
        <thead>
          <tr>
            <th scope="col">{w.feature}</th>
            <th scope="col">{rival.name}</th>
            <th scope="col">HabitForge</th>
          </tr>
        </thead>
        <tbody>
          {data.features.map(({ key, label }) => {
            const fact = rival.features[key];
            return (
              <tr key={key}>
                <th scope="row">{label}</th>
                <td>
                  {statusText(fact.status)}
                  {fact.source ? (
                    <>
                      {' '}
                      (<Out href={fact.source}>{host(fact.source)}</Out>)
                    </>
                  ) : null}
                </td>
                <td>{statusText(OURS[key])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

/** The index page's list: one guide per rival, with the date its facts were read. */
export function RivalList(): ReactNode {
  return (
    <ul>
      {RIVALS.map((rival) => (
        <li key={rival.slug}>
          <Link to={`/docs/compare/${rival.slug}`}>{w.guideLink(rival.name)}</Link>
          {' · '}
          {w.lastChecked.toLowerCase()} {longDate(rival.lastChecked)}
        </li>
      ))}
    </ul>
  );
}
