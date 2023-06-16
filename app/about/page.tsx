import React from "react"
import { Balancer } from "react-wrap-balancer"

import { ProfilePicture } from "@/components/profile-picture"

const About = () => {
  return (
    <div className="px-8 md:px-0 pb-8 pt-6 space-y-8 max-w-2xl">
      <ProfilePicture />
      <div className="prose dark:prose-invert">
        <p className="text-xl font-bold">Hey! I'm Eyal from Tel Aviv.</p>
        <h3>TL;DR </h3>
        <p>
          <Balancer>
            I'm passionate about building software, startups, and helping others
            build software.
          </Balancer>
        </p>
        <p>
          I recently closed my startup,{" "}
          <a href="https://desertlion.io">Desert Lion</a>. Together with my
          co-founders, We built a time-travel front-end debugging and monitoring
          technology.
        </p>
        <p>
          I'm also a software consultant - I help startups bring their software
          ideas to life and achieve their goals. I love sharing my software and
          business insights and often write articles.
        </p>
        <p>
          I'm currently writing a newsletter and bringing new products to the
          market.
        </p>
        <h3>About</h3>
        <p>
          I started learning how to code at a front-end development boot camp in
          2016. I was lucky enough to get accepted even tho the requirement was
          a BSc degree. I worked hard there to grasp the basics of Javascript
          and the web.
        </p>
        <p>
          Over the past seven years, I've had the privilege to work with several
          companies and build various products. Three years ago, I decided to
          work independently and help companies bring their software ideas to
          life and achieve their goals. I'm also leading the Front-End Experts
          Community at <a href="https://a.team"> A.Team</a>.
        </p>
        <p>
          As a consultant, I worked for{" "}
          <a href="https://getbonfire.xyz">Bonfire</a>,{" "}
          <a href="https://getbalance.com">Balance</a>, and{" "}
          <a href="https://lovestoriestv.com">LoveStoriesTV</a>.
        </p>

        <p>
          My first job in 2016 was as a full-stack developer at{" "}
          <a href="https://devsense.co.il"> DevSense</a>, where I built the
          Israeli PizzaHut website and Holyp, popular travel deals app.
        </p>
        <p>
          I then joined <a href="https://myplay.com">MyPlay</a>, a video sports
          startup, and worked there for two years. <br />I then worked for{" "}
          <a href="https://ironsrc.com">ironSource</a> (now Unity), a giant
          mobile company.
        </p>
        <p>
          I'm also a mentor at{" "}
          <a href="https://www.magshimim.cyber.org.il/">Magshimim</a>, where I
          teach youngsters on how to create real-world projects. It's a program
          that teach youth about cyber and computers, from the Israeli Ministry
          of Defence.
        </p>
        <p>
          In 2020 I wrote a book called{" "}
          <a href="https://gumroad.com/l/zero-to-app-react-native">
            From 0 to App
          </a>
          , a complete React-Native tutorial in Hebrew. It all started when my
          friends asked me how to learn to code and continued when the number of
          them grew.
        </p>
        <p>
          <Balancer>
            I haven't always been in the software world. I played and coached
            football for many years. I even managed a league in my community
            village (with 600 participants). I'm also trying to finish my
            psychology degree at the Open University of Israel. While studying,
            I built <a href="https://kvozut.co.il">Kvozut</a>. It's a product
            for students in my university, used by tens of thousands of
            students.
          </Balancer>
        </p>
      </div>
    </div>
  )
}

export default About
