import React from "react"

const Curation = () => {
  return (
    <div className="w-full mt-8">
      <div className="mb-5">
        <h1 className="font-bold text-3xl mb-1">Curating List</h1>
        <p className="text-muted-foreground">
          Collections of links I wanted to save
        </p>
      </div>
      <div className="prose dark:prose-invert prose-h2:m-1 prose-ul:p-0">
        <div>
          <h2>Inspire</h2>
          <p>
            Things that inspired me the most and changed the way I live, think,
            or do.
          </p>
        </div>
        <ul>
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
            <a href="https://blog.samaltman.com/the-merge">
              The Merge - Sam Altman
            </a>
            <p>
              A post from 2017 of Sam Altman on when and how humans and machines
              will merge.
            </p>
            <q>
              "It is a failure of human imagination and human arrogance to
              assume that we will never build things smarter than ourselves."
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
        <div>
          <h2>Methods</h2>
          <p>Methods I tend to follow</p>
        </div>
        <ul>
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
        <div>
          <h2>Useful</h2>
          <p>Things that I find useful in my life.</p>
        </div>
        <ul>
          <li>
            <a href="http://paulgraham.com/startupideas.html">
              How TO Get Startup Ideas - Paul Graham
            </a>
            <q>
              The way to get startup ideas is not to try to think of startup
              ideas. It's to look for problems, preferably problems you have
              yourself.
            </q>
          </li>
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
