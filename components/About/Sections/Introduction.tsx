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
          I previously interned at&nbsp;
          <Anchor href="https://www.soundable.health" text="Soundable Health" />
          , a digital healthcare startup based in Seoul that analyzes
          everyday physiological sounds using AI and provides patients with
          effective health-monitoring solutions. Next summer, I will be
          interning at&nbsp;
          <Anchor href="https://www.rilla.com/" text="Rilla" />, a startup that 
          builds AI speech analytics software for home improvement and services industry! 
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
            Apart from building software, I&apos;ve also been a big part of the
            teaching community at Penn:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Teaching Assistant for&nbsp;
              <Anchor
                href="https://www.cis.upenn.edu/~cis3200/current"
                text="CIS-3200"
              />
              &nbsp;&#40;Starting Spring 2025&#41;
            </li>
            <li>
              Teaching Assistant for&nbsp;
              <Anchor
                href="https://www.cis.upenn.edu/~cis110/current"
                text="CIS-1100"
              />
            </li>
            <li>
              Teaching Assistant for&nbsp;
              <Anchor
                href="https://www.cis.upenn.edu/~cis1210/current/index.html"
                text="CIS-1210"
              />
            </li>
            <li>
              Programming TA for&nbsp;
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
            href="https://www.youtube.com/watch?v=6ZfuoPN_xeE"
            text="mostly rap + r&b"
          />
          &#41;, working out 🏋️, or hanging out with my friends. 👥
        </p>
      </div>
    </div>
  );
}
