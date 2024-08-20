import Anchor from "@/components/common/Anchor";

export default function Introduction() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">
        What&apos;s up? Great to meet you! 👋
      </h2>
      <div className="space-y-2">
        <p>
          I&apos;m James Doh, and I&apos;m a junior at the&nbsp;
          <Anchor
            href="https://www.upenn.edu"
            text="University of Pennsylvania"
          />
          &nbsp;studying Computer Science 💻, with a concentration in Artificial
          Intelligence. 🤖
        </p>
        <p>
          One of the coolest experiences this year was definitely interning at&nbsp;
          <Anchor href="https://www.soundable.health" text="Soundable Health" />
          , a digital healthcare startup that builds some cool products that
          analyze everyday physiological sounds using AI and provide patients
          with effective health-monitoring solutions. I worked at its
          office in Seoul, making some cool projects with a team of awesome
          developrs, PhD&apos;s, and designers!
        </p>
        <div>
          <p>
            Some of my favorite projects &#40;more found @&nbsp;
            <Anchor href="/projects" text="/projects" />
            &#41;:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <Anchor
                href="https://penn-free-food-exchange.vercel.app"
                text="Penn Free Food Exchange"
              />
            </li>
            <li>
              <Anchor
                href="https://www.string-search-visualizer.com"
                text="String search algorithm visualizer"
              />
            </li>
            <li>
              <Anchor href="https://trial.proudp.com" text="proudP web trial" />
            </li>
          </ul>
        </div>
        <div>
          <p>
            Apart from building software, I was also a big part of the teaching
            community at Penn:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Teaching Assistant @&nbsp;
              <Anchor
                href="https://www.cis.upenn.edu/~cis110/current"
                text="CIS-1100"
              />
            </li>
            <li>
              Teaching Assistant @&nbsp;
              <Anchor
                href="https://www.cis.upenn.edu/~cis1210/current/index.html"
                text="CIS-1210"
              />
            </li>
            <li>
              Programming TA @&nbsp;
              <Anchor
                href="https://pennfirstplus.upenn.edu/pre-freshman-program"
                text="Pre-Freshman Program"
              />
            </li>
          </ul>
        </div>
        <p>
          If I&apos;m not in front of my computer, you can probably find me
          listening to music 🎧 &#40;
          <Anchor
            href="https://www.youtube.com/watch?v=pTg3gFYqjBY"
            text="mostly rap + r&b"
          />
          &#41;, working out 🏋️, or hanging out with my friends. 👥
        </p>
      </div>
    </div>
  );
}
