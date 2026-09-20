import Image from "next/image";

const OLD_SITE_URL = "https://bluedoorartgallery.com/";

export default function Home() {
  return (
    <main className="comingSoon">
      <div className="wave waveOne" aria-hidden="true" />
      <div className="wave waveTwo" aria-hidden="true" />

      <section className="card" aria-labelledby="coming-soon-heading">
        <Image
          className="logo"
          src="/earth-and-tide-logo.jpg"
          alt="Earth & Tide Art"
          width={1408}
          height={768}
          priority
          sizes="(max-width: 720px) 92vw, 720px"
        />

        <div className="content">
          <p className="eyebrow">A new chapter is on the way</p>
          <h1 id="coming-soon-heading">We&apos;re undergoing a rebrand.</h1>
          <p className="intro">
            Earth &amp; Tide Art is getting a new home. While we finish creating
            the new website, you can continue browsing and shopping on my
            previous site Blue Door Art Gallery.
          </p>

          <a
            className="button"
            href={OLD_SITE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Visit Blue Door Art Gallery
            <span aria-hidden="true">→</span>
          </a>

          <p className="comingSoonText">
            New Earth &amp; Tide Art website coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
