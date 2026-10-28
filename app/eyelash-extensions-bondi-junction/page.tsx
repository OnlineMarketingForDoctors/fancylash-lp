import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'

const BOOK_URL =
  'https://www.fresha.com/book-now/fancy-lash-lohuxs9f/all-offer?pId=941881'

const IG_URL = 'https://www.instagram.com/fancy.lash/'

const NAV = [
  { href: '#extensions', label: 'Extensions' },
  { href: '#lift', label: 'Lash Lift' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#instagram', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
]

// Four grid images sourced from fancylash.net's Instagram feed cache,
// each linking to its Instagram reel.
const INSTA_POSTS = [
  {
    img: 'https://fancylash.net/wp-content/uploads/sb-instagram-feed-images/748704645_18610383745058216_3433364977862633821_nlow.webp',
    href: 'https://www.instagram.com/reel/Da2iGRZS3pg/',
  },
  {
    img: 'https://fancylash.net/wp-content/uploads/sb-instagram-feed-images/748026103_18610042714058216_4379074719147366954_nfull.webp',
    href: 'https://www.instagram.com/reel/DazvV2byTgK/',
  },
  {
    img: 'https://fancylash.net/wp-content/uploads/sb-instagram-feed-images/744055680_18609745348058216_5488512509945658133_nfull.webp',
    href: 'https://www.instagram.com/reel/DawxXM-to9f/',
  },
  {
    img: 'https://fancylash.net/wp-content/uploads/sb-instagram-feed-images/743995962_18608781589058216_5205330122671270208_nlow.webp',
    href: 'https://www.instagram.com/reel/DapLeZix-NX/',
  },
]

const EXTENSIONS = [
  {
    c: '#ebc8ce',
    tag: 'One extension per lash',
    name: 'Classic',
    intro:
      'A single premium extension on each natural lash for soft, mascara-like definition that never smudges.',
    meta: 'Full set · from 90 min · infills 2 to 3 wks',
    best: 'A natural, "your lashes but better" everyday look.',
    ticks: [
      'Lash-by-lash application mapped to your eye shape',
      'Feather-light faux-mink lashes, no clumps',
      'Wake up ready with zero morning mascara',
    ],
  },
  {
    c: '#d98c94',
    tag: 'Classic + volume mix',
    name: 'Hybrid',
    intro:
      'A blend of classic lashes and volume fans for a textured, fuller lash line without going full glam.',
    meta: 'Full set · from 105 min · infills 2 to 3 wks',
    best: 'Soft texture and fullness that still reads natural.',
    ticks: [
      'The most popular set for first-time clients',
      'Adds density to sparse or gappy lashes',
      'Customised ratio of classic to volume fans',
    ],
  },
  {
    c: '#735853',
    tag: 'Handmade volume fans',
    name: 'Volume',
    intro:
      'Multiple ultra-fine fans built by hand onto each lash for a soft, fluffy, noticeably fuller finish.',
    meta: 'Full set · from 120 min · infills 2 to 3 wks',
    best: 'Density and fluff with a darker, fuller lash line.',
    ticks: [
      'Lightweight fans that protect your natural lash',
      'Great for fine or fair lashes that need body',
      'Dialled from a soft 3D to a dense, dramatic look',
    ],
  },
  {
    c: '#a97f88',
    tag: 'Maximum density',
    name: 'Mega Volume',
    intro:
      'The fullest, darkest set we offer — the finest lashes fanned for maximum density and drama.',
    meta: 'Full set · from 120 min · infills 2 to 3 wks',
    best: 'The boldest, show-stopping lash line.',
    ticks: [
      'Ultra-fine lashes so the set stays comfortable',
      'A seamless, eyeliner-dark lash line',
      'Perfect for events, photos and a full glam look',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Eyelash Extensions & Lash Lift Bondi Junction | Fancy Lash',
  description:
    'Eyelash extensions and lash lifts in Bondi Junction. Classic, hybrid and volume lash extensions, infills, plus Korean and keratin lash lift and tint. Serving Bondi Beach and the Eastern Suburbs. Book online.',
  alternates: {
    canonical: 'https://lp.fancylash.net/eyelash-extensions-bondi-junction',
  },
}

export default function Page() {
  return (
    <div className="lash-page">
      <SiteHeader bookUrl={BOOK_URL} nav={NAV} />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-eyebrow">Bondi Junction · Eastern Suburbs</p>
          <h1>
            Eyelash Extensions &amp; Lash Lift in <em>Bondi Junction</em>
          </h1>
          <p className="lede">
            Classic, hybrid and volume lash extensions, plus Korean and keratin
            lash lifts and tints — in the heart of Bondi Junction, minutes from
            Bondi Beach and across the Eastern Suburbs.
          </p>
          <div className="hero-cta">
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book your appointment
            </a>
          </div>
          <div className="trust">
            <span>
              <span className="stars">★★★★★</span> <b>4.9</b> from 446 Google
              reviews
            </span>
            <span>
              <b>Certified</b> lash artists
            </span>
            <span>
              Open <b>7 days</b>
            </span>
          </div>
        </div>
      </section>

      {/* EXTENSIONS */}
      <section className="alt" id="extensions">
        <span className="floral floral-tr" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow">Eyelash extensions in Bondi Junction</p>
          <h2 className="strip">
            Lashes <em>made for you</em>
          </h2>
          <p className="lede">
            A full set of eyelash extensions applied lash by lash to open and
            lengthen your eyes. We map every set to your eye shape — from a soft,
            natural finish to full volume — at our Bondi Junction studio.
          </p>

          <div className="cards">
            {EXTENSIONS.map((e) => (
              <article
                key={e.name}
                className="card"
                style={{ ['--c' as string]: e.c } as React.CSSProperties}
              >
                <span className="tag">{e.tag}</span>
                <h3>{e.name}</h3>
                <p className="intro">{e.intro}</p>
                <p className="price-alt">{e.meta}</p>
                <div className="best">
                  <b>Best for</b>
                  {e.best}
                </div>
                <ul className="ticks">
                  {e.ticks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
                  Book {e.name.toLowerCase()} lashes
                </a>
              </article>
            ))}
          </div>
          <p className="small-note">
            New to extensions? Book a full set. Already have lashes on? Infills
            every 2 to 3 weeks keep them full, and we also offer gentle lash
            extension removal. Live pricing and availability show when you book
            online.
          </p>
        </div>
      </section>

      {/* LASH LIFT */}
      <section id="lift">
        <div className="container">
          <p className="eyebrow">Prefer to wear your own lashes?</p>
          <h2 className="strip">
            Korean &amp; keratin <em>lash lift</em>
          </h2>
          <p className="lede">
            A lash lift curls your own lashes from root to tip and sets the
            shape for 6 to 8 weeks — no extensions, no infills. Add a tint and
            they read as length and darkness too, like mascara you did not put
            on.
          </p>

          <div className="cards">
            <article className="card korean">
              <span className="tag">Cysteamine, hydration focused</span>
              <h3>Korean Lash Lift</h3>
              <p className="intro">
                Chemical-free lifting that curls without breakage — gentle,
                hydrating and truly transformative.
              </p>
              <p className="price">
                from $110 <small>/ with tint from $130</small>
              </p>
              <p className="price-alt">45 to 60 min · lasts 6 to 8 weeks</p>
              <div className="best">
                <b>Best for</b>Thick, stubborn, straight or long lashes that
                struggle to hold a curl.
              </div>
              <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
                Book the Korean lift
              </a>
            </article>

            <article className="card keratin">
              <span className="tag">Keratin infused, nourishing</span>
              <h3>Keratin Lash Lift</h3>
              <p className="intro">
                A curl and a conditioning treatment in one. Keratin rebuilds the
                lash while it sets the lift.
              </p>
              <p className="price">
                from $105 <small>/ with tint from $125</small>
              </p>
              <p className="price-alt">45 to 60 min · lasts 6 to 8 weeks</p>
              <div className="best">
                <b>Best for</b>Thin, brittle or damaged lashes, or anyone who
                wants the softest, most natural result.
              </div>
              <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
                Book the Keratin lift
              </a>
            </article>
          </div>
          <p className="small-note">
            Not sure between a lift and extensions? Tell us at booking and your
            Bondi Junction technician will assess your lashes and recommend the
            right option on the day.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="alt" id="pricing">
        <div className="container split">
          <div>
            <p className="eyebrow">Simple, upfront pricing</p>
            <h2 className="strip">
              Lash lift <em>and tint</em>
            </h2>
            <p className="lede">
              A lift changes the shape of your lashes; a tint changes the
              colour. Booked together, they give you the wide-awake, mascara
              look most clients are actually after.
            </p>
            <p>
              Tinting is added during your appointment, straight after the lift
              is set, so it is only $20 and about 10 extra minutes. If you have
              fair, red or grey lashes, it is the part you do not want to skip.
            </p>
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book a lash lift and tint
            </a>
          </div>
          <div className="note">
            <table className="compare" style={{ marginTop: 0 }}>
              <thead>
                <tr>
                  <th>Lash lift prices</th>
                  <th style={{ textAlign: 'right', color: 'var(--ink)' }}>
                    From
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={priceTd}>
                    <b>Korean lash lift</b>
                    <br />
                    <span style={priceSub}>45 to 60 min</span>
                  </td>
                  <td style={priceAmt}>$110</td>
                </tr>
                <tr>
                  <td style={priceTd}>
                    <b>Korean lash lift and tint</b>
                    <br />
                    <span style={priceSub}>most booked</span>
                  </td>
                  <td style={priceAmt}>$130</td>
                </tr>
                <tr>
                  <td style={priceTd}>
                    <b>Keratin lash lift</b>
                    <br />
                    <span style={priceSub}>45 to 60 min</span>
                  </td>
                  <td style={priceAmt}>$105</td>
                </tr>
                <tr>
                  <td style={priceTd}>
                    <b>Keratin lash lift and tint</b>
                    <br />
                    <span style={priceSub}>10 extra minutes</span>
                  </td>
                  <td style={priceAmt}>$125</td>
                </tr>
              </tbody>
            </table>
            <p className="small-note">
              Eyelash extension sets and infills are priced per set — see live
              pricing and availability when you book online.
            </p>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how">
        <div className="container">
          <p className="eyebrow">45 to 60 relaxing minutes</p>
          <h2 className="strip">
            How a lash lift <em>works</em>
          </h2>
          <p className="lede">
            You might know it as a lash perm, an eyelash lift or a lash curl.
            Whatever you call it, the appointment is five quiet steps with your
            eyes closed the whole time — most clients tell us it is the closest
            thing to a nap they get all week.
          </p>
          <ol className="steps">
            <li>
              <h3>Cleanse</h3>
              <p>
                Your lashes and eye area are cleansed of oil, makeup and debris
                so the formula can grip evenly.
              </p>
            </li>
            <li>
              <h3>Shield</h3>
              <p>
                A silicone shield is placed on the lid and your lashes are lifted
                onto it in the curl we have chosen together.
              </p>
            </li>
            <li>
              <h3>Lift</h3>
              <p>
                The lifting solution softens the bonds in the lash so it can be
                reshaped, gently and at your lash&apos;s pace.
              </p>
            </li>
            <li>
              <h3>Set</h3>
              <p>
                A setting solution locks the new shape in. Add a tint here if you
                want darker, fuller looking lashes.
              </p>
            </li>
            <li>
              <h3>Nourish</h3>
              <p>
                A conditioning serum goes on last to hydrate and strengthen. You
                open your eyes and that is it.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* WHY / LOCAL */}
      <section className="alt" id="why">
        <div className="container split">
          <div>
            <p className="eyebrow">Your lash studio in Bondi Junction</p>
            <h2 className="strip">
              Why book with <em>Fancy Lash</em>
            </h2>
            <p className="lede">
              A calm, spotless studio in Bondi Junction with certified artists
              who look after the health of your natural lashes first.
            </p>
            <ul className="plain">
              <li>
                <b>Certified &amp; insured lash artists</b> with thousands of
                sets behind them.
              </li>
              <li>
                <b>Premium, cruelty-free lashes</b> and medical-grade adhesive
                for comfortable, lasting wear.
              </li>
              <li>
                <b>Custom lash mapping</b> designed around your eye shape — never
                a cookie-cutter set.
              </li>
              <li>
                <b>Walk from Westfield Bondi Junction</b> and the train station,
                open 7 days for easy before or after work bookings.
              </li>
              <li>
                <b>4.9 stars from 446 Google reviews</b> and a studio full of
                regulars.
              </li>
            </ul>
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book online
            </a>
          </div>
          <div className="note">
            <p className="eyebrow" style={{ color: '#7a6260', marginBottom: 6 }}>
              Serving the Eastern Suburbs
            </p>
            <h3>Easy to reach</h3>
            <p style={{ fontSize: 16, color: '#4a3f3d', margin: '0 0 14px' }}>
              Our Bondi Junction studio is a quick trip for lash lovers right
              across the east.
            </p>
            <p style={{ fontSize: 15.5, color: '#4a3f3d', margin: 0 }}>
              Bondi Beach · Bondi · Tamarama · Bronte · Waverley · Woollahra ·
              Paddington · Edgecliff · Double Bay · Bellevue Hill · Rose Bay ·
              Vaucluse · Randwick · Coogee · Clovelly
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <p className="eyebrow">Before you book</p>
          <h2 className="strip">
            Questions we get <em>every day</em>
          </h2>
          <div className="faq">
            <details open>
              <summary>How long do eyelash extensions last?</summary>
              <p>
                A full set lasts the length of your natural lash cycle. To keep
                it looking full, most clients book infills every 2 to 3 weeks,
                when roughly half of the extensions have naturally shed with the
                lashes they were attached to.
              </p>
            </details>
            <details>
              <summary>
                Classic, hybrid or volume — which extensions should I choose?
              </summary>
              <p>
                Classic adds one extension per lash for a natural, mascara-like
                look. Hybrid mixes classic and volume fans for soft fullness and
                is our most popular set. Volume and mega volume use handmade fans
                for density and drama. Unsure? Your artist will map a set to your
                eyes and lifestyle at your appointment.
              </p>
            </details>
            <details>
              <summary>Will eyelash extensions damage my natural lashes?</summary>
              <p>
                Not when they are applied correctly. We isolate each natural lash
                and use the right weight and length for it, so your own lashes
                are never overloaded. Keeping up with infills and gentle
                aftercare protects their health.
              </p>
            </details>
            <details>
              <summary>Lash lift or extensions — what is the difference?</summary>
              <p>
                Extensions add length and volume with individual lashes and need
                infills to stay full. A lash lift adds nothing — it curls and
                lifts your own lashes for 6 to 8 weeks with no infills. If you
                love low maintenance and your natural lashes, go for a lift. If
                you want length and drama, go for extensions.
              </p>
            </details>
            <details>
              <summary>How much do lashes cost in Bondi Junction?</summary>
              <p>
                A Korean lash lift is from $110 and a keratin lash lift is from
                $105, with a tint adding $20. Eyelash extension sets and infills
                are priced per set — the live price and availability show when
                you book online.
              </p>
            </details>
            <details>
              <summary>How long does an appointment take?</summary>
              <p>
                A lash lift is 45 to 60 minutes. A full set of extensions takes
                roughly 90 to 120 minutes depending on the style, and infills are
                quicker. Your eyes stay closed and comfortable the whole time.
              </p>
            </details>
            <details>
              <summary>Can I wear mascara with a lift or extensions?</summary>
              <p>
                With a lift, yes after the first 24 to 48 hours, though most
                people stop bothering. With extensions we recommend skipping
                mascara — the set already gives you the look, and oil-based or
                waterproof formulas shorten how long they last.
              </p>
            </details>
            <details>
              <summary>Can I have a lash lift or tint while pregnant?</summary>
              <p>
                Yes, lash lifts and tints are generally considered safe during
                pregnancy. We recommend waiting until after your first trimester
                as a precaution, since the first 12 weeks are the most important
                stage. If you have any concerns, speak with your midwife or
                healthcare professional before booking.
              </p>
            </details>
            <details>
              <summary>Where are you and do I need to book ahead?</summary>
              <p>
                We are at Shop 3, 4-12 Waverley Street, Bondi Junction — a short
                walk from Westfield and the station, and easy to reach from Bondi
                Beach and across the Eastern Suburbs. Booking ahead is strongly
                recommended, as appointments fill early in the week and on
                weekends. You can book online any time, day or night.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="insta alt" id="instagram">
        <div className="container">
          <p className="script-eyebrow">Follow us</p>
          <h2 className="strip">
            On <em>Instagram</em>
          </h2>
          <p className="lede">
            Fresh sets, lifts and a little everyday inspiration from the Bondi
            Junction studio.
          </p>
          <div className="insta-grid">
            {INSTA_POSTS.map((post, i) => (
              <a
                key={i}
                className="insta-tile"
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fancy Lash on Instagram"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt="Fancy Lash on Instagram"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <a
            className="btn btn-pink insta-follow"
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @fancy.lash
          </a>
        </div>
      </section>

      {/* FINAL */}
      <section className="final">
        <div className="container">
          <p className="eyebrow">Bondi Junction · Eastern Suburbs</p>
          <h2 className="strip">
            Your best lashes, <em>in Bondi</em>
          </h2>
          <p className="lede">
            Eyelash extensions, lash lifts and tints by certified artists, a
            short walk from Westfield Bondi Junction. Book online in under a
            minute.
          </p>
          <div className="hero-cta">
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book your appointment
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" id="visit">
        <div className="container">
          <div className="locs">
            <div>
              <h3>Fancy Lash Bondi Junction</h3>
              <p>
                Shop 3, 4-12 Waverley Street
                <br />
                Bondi Junction NSW 2022
              </p>
              <p>
                <a href="tel:0414844666">0414 844 666</a>
              </p>
            </div>
            <div>
              <h3>Opening hours</h3>
              <p>
                Mon to Wed: 10am to 6pm
                <br />
                Thu: 10am to 7pm
                <br />
                Fri: 10am to 6pm
                <br />
                Sat and Sun: 10am to 5pm
              </p>
              <p>
                <a href="mailto:info@fancylash.net">info@fancylash.net</a>
              </p>
            </div>
            <div>
              <h3>Serving the east</h3>
              <p>
                Bondi Beach, Bondi, Bronte, Tamarama, Waverley, Woollahra,
                Paddington, Edgecliff, Double Bay, Bellevue Hill, Rose Bay,
                Vaucluse, Randwick, Coogee and Clovelly.
              </p>
            </div>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Fancy Lash. Eyelash extensions, lash
            lifts and tints in Bondi Junction.
          </div>
        </div>
      </footer>
    </div>
  )
}

const priceTd: React.CSSProperties = {
  width: 'auto',
  fontSize: 16,
  letterSpacing: 0,
  textTransform: 'none',
  color: 'var(--ink)',
}
const priceSub: React.CSSProperties = { color: 'var(--grey)', fontSize: 14 }
const priceAmt: React.CSSProperties = { textAlign: 'right', fontWeight: 700 }
