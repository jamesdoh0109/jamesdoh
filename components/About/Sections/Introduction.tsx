import Link from "@/components/common/Link";

export default function Introduction() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">
        What&apos;s up? Great to meet you! 👋
      </h2>
      <div className="space-y-2">
        <p>
          I&apos;m James Doh, and I&apos;m a rising junior at the&nbsp;
          <Link
            href="https://www.upenn.edu"
            text="University of Pennsylvania"
          />
          &nbsp;studying Computer Science 💻, with a concentration in Artificial
          Intelligence. 🤖
        </p>
        <p>
          These past couple years have been quite a journey for me—I decided to
          take a leave of absence from school, and completed the mandatory
          military service in South Korea. 🇰🇷 🪖 Before returning back to Penn
          this fall, I&apos;m interning at&nbsp;
          <Link href="https://www.soundable.health" text="Soundable Health" />
          &nbsp;at its Seoul office, helping build some cool products that
          analyze everyday physiological sounds using AI and provide patients
          with effective health-monitoring solutions.
        </p>
        <div>
          <p>
            Some of my favorite projects &#40;more found @&nbsp;
            <Link href="/projects" text="/projects" />
            &#41;:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <Link
                href="https://penn-free-food-exchange.vercel.app"
                text="Penn Free Food Exchange"
              />
            </li>
            <li>
              <Link
                href="https://www.string-search-visualizer.com"
                text="String search algorithm visualizer"
              />
            </li>
            <li>
              <Link href="https://trial.proudp.com" text="proudP web trial" />
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
              Teaching Assistant @&nbsp;
              <Link
                href="https://www.cis.upenn.edu/~cis110/current"
                text="CIS-1100"
              />
            </li>
            <li>
              Teaching Assistant @&nbsp;
              <Link
                href="https://www.cis.upenn.edu/~cis1210/current/index.html"
                text="CIS-1210"
              />
            </li>
            <li>
              Programming TA @&nbsp;
              <Link
                href="https://pennfirstplus.upenn.edu/pre-freshman-program"
                text="Pre-Freshman Program"
              />
            </li>
          </ul>
        </div>
        <p>
          When I&apos;m not in front of my computer, you can probably find me
          listening to music 🎧 &#40;
          <Link
            href="https://www.youtube.com/watch?v=pTg3gFYqjBY"
            text="mostly rap + r&b"
          />
          &#41;, working out 🏋️, or hanging out with my friends. 👥
        </p>
      </div>
    </div>
  );
}
