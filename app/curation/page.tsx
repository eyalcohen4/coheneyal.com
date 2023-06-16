import React from "react"

const Curation = () => {
  return (
    <div className="prose dark:prose-invert prose-p:mb-0 prose-p:mt-0 prose-h2:mb-2">
      <h1 className="text-3xl font-bold text-white mb-4">My Cuarting Lists</h1>
      <div className="text-gray-500">
        <div className="mb-4 text-white">
          <h2 className="text-xl font-bold">Inspire</h2>
          <p className="text-lg">
            Things that inspired me the most and changed the way I live, think,
            or do.
          </p>
        </div>
        <ul className="list-disc border-b mb-4">
          <li>
            <a href="https://jamesclear.com/great-speeches/what-matters-more-than-your-talents-by-jeff-bezos">
              What Metters More Than Your Talent - Jeff Bezos
            </a>
            <p>
              An inspiring story from Bezos on what important. main quote is:
            </p>
            <q>
              "Jeff, one day you’ll understand that it’s harder to be kind than
              clever."
            </q>
          </li>
          <li>
            <a href="https://www.artlebedev.com/mandership/167/">
              Progressive JPEG Method for Time Managment
            </a>
            <p>
              That is really changed the way I work - make a project 100%
              complete, even if it's 4% of the details.
            </p>
          </li>
          <li>
            <a href="https://www.amazon.com/Tuesdays-Morrie-Greatest-Lesson-Anniversary/dp/076790592X">
              Tuesday with Morrie
            </a>
            <p>
              The best book I've ever read. It teaches gratitude, the fragility
              of life, and appriciation to it. <br />
              "Tuesdays with Morrie is a magical chronicle of their time
              together, through which Mitch shares Morrie's lasting gift with
              the world. "
            </p>
          </li>
          <li>
            <a href="https://web.eecs.utk.edu/~azh/blog/thisprojectwillonlytake.html">
              This project will only take 2 hours
            </a>
            <p>
              A thought experiment about how easy it is to underestimate project
              and not seeing their hidden complexities
            </p>
          </li>
        </ul>
        <div className="mb-4 text-white">
          <h2 className="text-xl font-bold">Methods</h2>
          <p className="text-lg mb-0 mt-0">Methods I tend to follow</p>
        </div>
        <ul className="list-disc border-b mb-4">
          <li>
            <a href="https://www.alexandercowan.com/tutorial-personas-problem-scenarios-user-stories/">
              Personas and Design Thinking
            </a>
            <p>
              very resourcesful and step by step guides for agile design
              thinking. by Alexander Cowan.
            </p>
          </li>
        </ul>
        <div className="mb-4 text-white">
          <h2 className="text-xl font-bold">Useful</h2>
          <p className="text-lg">Things that I find useful in my life.</p>
        </div>
        <ul className="list-disc mb-4">
          <li>
            <a href="https://www.taniarascia.com/">Tania Rascia Blog</a>
            <p>Amazing content and guides for developers from Tanis Rascia.</p>
          </li>
          <li>
            <a href="https://codeguide.co/">Code Guide</a>
            <p>Life rules for HTML and CSS</p>
          </li>
          <li>
            <a href="https://css-tricks.com/snippets/css/scale-on-hover-with-webkit-transition/">
              CSS: Scale on Hover
            </a>
            <p>Scale on Hover snippet for CSS</p>
          </li>
          <li>
            <a href="https://andreasbm.github.io/web-skills/?compact">
              Web Skills
            </a>
            <p>
              Incredible resource of required web skills - HTML, CSS, JS from
              beginner to intermediate
            </p>
          </li>
          <li>
            <a href="https://martinrue.com/my-engineering-axioms/">
              My Engineering Axioms
            </a>
            <p>
              Great rules about engineering from Martin Rue. I found them to be
              aligned with my experience.
            </p>
          </li>
          <li>
            <a href="http://www.databaseanswers.org/data_models/">
              Data Models
            </a>
            <p>Tons of database schemas for tons of use-cases.</p>
          </li>
          <li>
            <a href="https://medium.com/@groksrc/protip-how-to-split-large-branches-into-small-pull-requests-81d607660c05">
              Splitting large branches into small pull requests
            </a>
            <p>Happens to me more then once...</p>
          </li>
          <li>
            <a href="https://boringseo.org/">Boring SEO</a>
            <p>pratical SEO advices</p>
          </li>
          <li>
            <a href="https://github.com/k88hudson/git-flight-rules">
              Git Flight Rules
            </a>
            <p>
              Every once in a while I do a stupid git mistake and this
              repository is full of life savers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Curation
