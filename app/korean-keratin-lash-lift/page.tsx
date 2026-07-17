import { CurlPreview } from '@/components/curl-preview'

const BOOK_URL =
  'https://www.fresha.com/book-now/fancy-lash-lohuxs9f/all-offer?pId=941881'

const IG_URL = 'https://www.instagram.com/fancy.lash/'

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

export default function Page() {
  return (
    <div className="lash-page">
      <header className="site-header">
        <div className="container">
          <a href="https://fancylash.net/" className="brand" aria-label="Fancy Lash home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://fancylash.net/wp-content/uploads/2020/08/logo.png.webp"
              alt="Fancy Lash"
              width={150}
              height={54}
            />
          </a>
          <div className="header-right">
            <a
              className="btn btn-pink btn-sm"
              href={BOOK_URL}
              rel="nofollow"
            >
              Book online
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="hero-eyebrow">Bondi Junction &amp; Chatswood</p>
          <h1>
            Korean &amp; Keratin <em>Lash Lift</em>
          </h1>
          <p className="lede">
            A Korean or keratin lash lift takes your own lashes, curls them from
            root to tip and sets the shape for 6 to 8 weeks. Lift from $105, or
            lift and tint from $125.
          </p>
          <div className="hero-cta">
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book your lash lift
            </a>
          </div>
          <div className="trust">
            <span>
              <span className="stars">★★★★★</span> <b>4.9</b> from 446 Google
              reviews
            </span>
            <span>
              <b>45 to 60 min</b> appointment
            </span>
            <span>
              Lasts <b>6 to 8 weeks</b>
            </span>
          </div>
        </div>
      </section>

      {/* CURL PREVIEW BAND */}
      <section className="curl-band">
        <span className="floral floral-tl" aria-hidden="true" />
        <div className="container curl-band-inner">
          <div>
            <p className="script-eyebrow">See the curl</p>
            <h2 className="strip">
              Your lashes, <em>lifted</em>
            </h2>
            <p className="lede">
              Toggle between the two lifts to preview the shape. Both give you
              six to eight weeks of curled, wide-awake lashes, matched to what
              your lashes need.
            </p>
          </div>
          <CurlPreview />
        </div>
      </section>

      {/* CHOOSE */}
      <section className="alt" id="choose">
        <div className="container">
          <p className="eyebrow">Two lifts, one decision</p>
          <h2 className="strip">
            Which lift is <em>yours</em>?
          </h2>
          <p className="lede">
            Both give you curled, lifted lashes for 6 to 8 weeks. The difference
            is what your lashes need to get there, so we match the formula to
            your lash type rather than the other way around.
          </p>

          <div className="cards">
            <article className="card korean">
              <span className="tag">Cysteamine, hydration focused</span>
              <h3>Korean Lash Lift</h3>
              <p className="intro">
                Chemical free lifting that curls without breakage. The next
                level of lash lifting: gentle, hydrating and truly
                transformative.
              </p>
              <p className="price">
                from $110 <small>/ with tint from $130</small>
              </p>
              <p className="price-alt">45 to 60 min · lasts 6 to 8 weeks</p>
              <div className="best">
                <b>Best for</b>Thick, stubborn, straight or long lashes that
                struggle to hold a curl.
              </div>
              <ul className="ticks">
                <li>
                  <b>Flat silicone shields</b> instead of rounded rods, for a
                  soft, natural curl rather than a harsh crimp
                </li>
                <li>
                  <b>Cysteamine based solution</b> that is kinder than a
                  traditional perm, so lashes stay strong
                </li>
                <li>
                  <b>Root to tip application</b> for an even curl from base to
                  end
                </li>
                <li>
                  <b>Hydration throughout,</b> so lashes come out soft, shiny
                  and healthy
                </li>
                <li>
                  <b>Customised</b> to your eye shape, from a soft lift to a
                  defined curl
                </li>
              </ul>
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
                wants a very soft, natural and nourishing result.
              </div>
              <ul className="ticks">
                <li>
                  <b>Keratin infused formula</b> that strengthens lashes rather
                  than weakening them
                </li>
                <li>
                  <b>Finished with a keratin serum</b> to hydrate and condition
                </li>
                <li>
                  <b>Lifts droopy or downward pointing lashes</b> that get lost
                  behind glasses
                </li>
                <li>
                  <b>No glue and no extensions,</b> ideal if you are sensitive
                  to lash adhesive
                </li>
                <li>
                  <b>Waterproof and mascara friendly</b> after the first 24 to
                  48 hours
                </li>
              </ul>
              <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
                Book the Keratin lift
              </a>
            </article>
          </div>

          <table className="compare">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Korean Lash Lift</th>
                <th>Keratin Lash Lift</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td>From $110, with tint $130</td>
                <td>From $105, with tint $125</td>
              </tr>
              <tr>
                <td>Suits</td>
                <td>Thick, straight, long or stubborn lashes</td>
                <td>Thin, brittle or damaged lashes</td>
              </tr>
              <tr>
                <td>Formula</td>
                <td>Cysteamine, hydration focused</td>
                <td>Keratin infused, strengthening</td>
              </tr>
              <tr>
                <td>The curl</td>
                <td>Soft and flexible, root to tip</td>
                <td>Soft and natural, gently defined</td>
              </tr>
              <tr>
                <td>Shields</td>
                <td>Flat silicone shields</td>
                <td>Silicone shield sized to your lash</td>
              </tr>
              <tr>
                <td>Lasts</td>
                <td>6 to 8 weeks</td>
                <td>6 to 8 weeks</td>
              </tr>
              <tr>
                <td>Upkeep</td>
                <td>None, no infills</td>
                <td>None, no infills</td>
              </tr>
            </tbody>
          </table>
          <p className="small-note">
            Not sure which one? Tell us at booking and your technician will
            assess your lashes and recommend the right lift on the day.
          </p>
        </div>
      </section>

      {/* TINT + PRICES */}
      <section id="tint">
        <div className="container split">
          <div>
            <p className="eyebrow">The pairing almost everyone books</p>
            <h2 className="strip">
              Lash lift <em>and tint</em>
            </h2>
            <p className="lede">
              A lift changes the shape of your lashes. A tint changes the
              colour. Book them together and you get the effect people are
              actually after when they say they want their lashes done.
            </p>
            <p>
              Most natural lashes are darker at the base and fade to fine, pale
              tips that simply disappear. An eyelash tint takes that colour all
              the way to the end, so a lift that was already opening your eye now
              reads as length and thickness too. It is the difference between
              lifted lashes and lifted lashes that look like you are wearing
              mascara.
            </p>
            <p>
              Tinting is added during your appointment, straight after the lift
              is set, so it costs you $20 and about 10 extra minutes. If you have
              fair, red or grey lashes, this is the part you do not want to skip.
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
                  <td
                    style={{
                      width: 'auto',
                      fontSize: 16,
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: 'var(--ink)',
                    }}
                  >
                    <b>Korean lash lift</b>
                    <br />
                    <span style={{ color: 'var(--grey)', fontSize: 14 }}>
                      45 to 60 min
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>$110</td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: 'auto',
                      fontSize: 16,
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: 'var(--ink)',
                    }}
                  >
                    <b>Korean lash lift and tint</b>
                    <br />
                    <span style={{ color: 'var(--grey)', fontSize: 14 }}>
                      most booked
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>$130</td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: 'auto',
                      fontSize: 16,
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: 'var(--ink)',
                    }}
                  >
                    <b>Keratin lash lift</b>
                    <br />
                    <span style={{ color: 'var(--grey)', fontSize: 14 }}>
                      45 to 60 min
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>$105</td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: 'auto',
                      fontSize: 16,
                      letterSpacing: 0,
                      textTransform: 'none',
                      color: 'var(--ink)',
                    }}
                  >
                    <b>Keratin lash lift and tint</b>
                    <br />
                    <span style={{ color: 'var(--grey)', fontSize: 14 }}>
                      10 extra minutes
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>$125</td>
                </tr>
              </tbody>
            </table>
            <p className="small-note">
              Prices are per appointment with no infills to follow, since a lift
              grows out with your own lashes. A tint adds $20 to either lift.
            </p>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="alt" id="how">
        <div className="container">
          <p className="eyebrow">45 to 60 relaxing minutes</p>
          <h2 className="strip">
            How a lash lift <em>works</em>
          </h2>
          <p className="lede">
            You might know it as a lash perm, an eyelash lift or a lash curl.
            Whatever you call it, the appointment is the same five quiet steps
            with your eyes closed the whole time, and most clients tell us it is
            the closest thing to a nap they will get all week.
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

      {/* WHY */}
      <section id="why">
        <div className="container split">
          <div>
            <p className="eyebrow">Lash lift or extensions</p>
            <h2 className="strip">
              Enhance what you already <em>have</em>
            </h2>
            <p className="lede">
              A lift does not add anything to your lashes. It reshapes them,
              which is why there is nothing to fall off, fill in or maintain.
            </p>
            <ul className="plain">
              <li>
                <b>Natural results.</b> Your lashes, lifted, not somebody
                else&apos;s set.
              </li>
              <li>
                <b>No infills.</b> Unlike extensions, once it is done, it is
                done.
              </li>
              <li>
                <b>No lash damage.</b> Both formulas condition as they curl.
              </li>
              <li>
                <b>Six to eight weeks of it,</b> in line with your natural lash
                growth cycle.
              </li>
              <li>
                <b>Swim, sweat and wear mascara</b> after the first 24 to 48
                hours.
              </li>
              <li>
                <b>Minutes back every morning.</b> No curler, no coats, no
                pencil.
              </li>
            </ul>
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book online
            </a>
          </div>
          <div className="note">
            <p
              className="eyebrow"
              style={{ color: '#7a6260', marginBottom: 6 }}
            >
              Aftercare
            </p>
            <h3>The first 48 hours</h3>
            <p style={{ fontSize: 16, color: '#4a3f3d', margin: 0 }}>
              The lift needs a moment to settle. Give it two days and it will
              give you two months.
            </p>
            <ol>
              <li>
                Keep lashes dry for 24 to 48 hours. No steam, sauna, swimming or
                hot showers on the face.
              </li>
              <li>Skip mascara and eye makeup for the first 24 to 48 hours.</li>
              <li>
                Do not rub your lashes or sleep face down while they set.
              </li>
              <li>
                Avoid oil based cleansers and makeup removers around the eyes.
              </li>
              <li>
                Brush lashes through with a clean spoolie to keep the curl
                sitting neatly.
              </li>
              <li>
                A lash serum between appointments keeps them conditioned and
                strong.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt" id="faq">
        <div className="container">
          <p className="eyebrow">Before you book</p>
          <h2 className="strip">
            Questions we get <em>every day</em>
          </h2>
          <div className="faq">
            <details open>
              <summary>How long does a lash lift last?</summary>
              <p>
                Six to eight weeks for both the Korean and the Keratin lift. It
                grows out with your natural lash cycle rather than dropping off,
                so there is no obvious grown out point and no infills to book.
              </p>
            </details>
            <details>
              <summary>Which lift should I choose?</summary>
              <p>
                If your lashes are thick, long, straight or simply refuse to hold
                a curl, go Korean. If they are thin, brittle or a little worse
                for wear, or you just want the softest and most nourishing
                option, go Keratin. Unsure? Book either one and your technician
                will assess your lashes and advise before starting.
              </p>
            </details>
            <details>
              <summary>Will it damage my natural lashes?</summary>
              <p>
                No. Both treatments are designed around lash health. The Korean
                lift uses a hydrating cysteamine formula rather than a harsh perm
                solution, and the Keratin lift uses a keratin infused formula
                that strengthens the lash as it curls. Both finish with a
                conditioning serum.
              </p>
            </details>
            <details>
              <summary>How much does a lash lift cost?</summary>
              <p>
                A Korean lash lift is from $110 and a keratin lash lift is from
                $105. Add a tint and it is $130 or $125. There is nothing to pay
                after that, because a lift has no infills. Both salons charge the
                same.
              </p>
            </details>
            <details>
              <summary>Is a lash lift the same as a lash perm?</summary>
              <p>
                It is the modern version of one. An old style eyelash perm
                wrapped lashes around a rod and used a harsh solution to force a
                tight curl. A lift uses a silicone shield and a conditioning
                formula to lift from the root, so the result is a soft open curl
                instead of a crimp, and your lashes come out of it in better
                condition.
              </p>
            </details>
            <details>
              <summary>Will it work on short lashes?</summary>
              <p>
                Yes. Short lashes are often the most rewarding to lift, because
                straightening them upward reveals length that was pointing
                forwards and hiding. We size the shield to your lash, so the curl
                suits what you have. A tint is worth adding here, as it darkens
                the tips and makes short lashes look noticeably longer.
              </p>
            </details>
            <details>
              <summary>Should I add a tint?</summary>
              <p>
                Most clients do. A lift reshapes your lashes and a tint darkens
                them, including the fine pale tips you cannot normally see.
                Together they read as mascara you did not put on. A tint adds $20
                to either lift.
              </p>
            </details>
            <details>
              <summary>Does it hurt?</summary>
              <p>
                Not at all. Your eyes stay closed and the products never touch
                the eye itself. It is 45 to 60 minutes lying still with your eyes
                shut, and most people find it relaxing enough to fall asleep.
              </p>
            </details>
            <details>
              <summary>Can I wear mascara afterwards?</summary>
              <p>
                Yes, after the first 24 to 48 hours, although plenty of clients
                find they stop bothering. Keep it to a water based formula and
                avoid oil based removers, which can soften the curl over time.
              </p>
            </details>
            <details>
              <summary>Can I have a lash lift with extensions on?</summary>
              <p>
                No. A lift works on your natural lashes, so any extensions need
                to be removed first. If you are moving from extensions to a lift,
                let us know at booking so we can allow time for removal.
              </p>
            </details>
            <details>
              <summary>
                What do the before and after photos really look like?
              </summary>
              <p>
                Realistic, is the honest answer. A lift works with the lashes you
                have, so the change is your own lashes standing up and opening
                the eye rather than a set of extensions. On straight or downward
                lashes the difference is dramatic. On lashes that already curl it
                is a softer refinement. Your technician will tell you which one
                you are before you commit.
              </p>
            </details>
            <details>
              <summary>How soon can I get another one?</summary>
              <p>
                We recommend leaving 6 to 8 weeks between lifts so your lashes
                have grown through their cycle. Lifting sooner or more often than
                that is not necessary and does not do your lashes any favours.
              </p>
            </details>
            <details>
              <summary>Where are you and do I need to book ahead?</summary>
              <p>
                We are in Bondi Junction (Shop 3, 4-12 Waverley Street) and
                Chatswood (Shop T49a, 436 Victoria Ave). Booking ahead is
                strongly recommended, as lash lift appointments fill early in the
                week and on weekends. You can book online any time, day or night.
              </p>
            </details>
            <details>
              <summary>Can I have a lash lift and tint while pregnant?</summary>
              <p>
                Yes, lash lifts and tints are generally considered safe during
                pregnancy. However, we recommend waiting until after your first
                trimester before having the treatment. This is a precautionary
                recommendation, as the first 12 weeks are the most important
                stage of pregnancy. If you have any concerns, we also advise
                speaking with your midwife or healthcare professional before
                booking your appointment.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="insta" id="instagram">
        <div className="container">
          <p className="script-eyebrow">Follow us</p>
          <h2 className="strip">
            On <em>Instagram</em>
          </h2>
          <p className="lede">
            Fresh lifts, tints and a little everyday inspiration from the
            studio.
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
                <img src={post.img} alt="Fancy Lash on Instagram" loading="lazy" />
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
          <p className="eyebrow">Bondi Junction &amp; Chatswood</p>
          <h2 className="strip">
            Wake up with the <em>curl</em>
          </h2>
          <p className="lede">
            Korean lift from $110. Keratin lift from $105. Add a tint for $20.
            Six to eight weeks of lashes you do not have to think about, at
            either of our Sydney salons.
          </p>
          <div className="hero-cta">
            <a className="btn btn-pink" href={BOOK_URL} rel="nofollow">
              Book your lash lift
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="locs">
            <div>
              <h3>Lash lift Bondi Junction</h3>
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
              <h3>Lash lift Chatswood</h3>
              <p>
                Shop T49a / 436 Victoria Ave
                <br />
                Chatswood NSW 2067
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
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Fancy Lash. Eyelash extensions, lash
            lifts and brow treatments across Sydney.
          </div>
        </div>
      </footer>
    </div>
  )
}
