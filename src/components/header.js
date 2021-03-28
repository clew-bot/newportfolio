import React from "react";
import Hidebtn from "./hidebutton.js";
import BigTable from "./table.js";

function Navbarr() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://github.com/clew-bot"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
          >
            <path
              d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                >
                  <path
                    d="M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/chad-lew-7586711a0/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                >
                  <path
                    d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <img
        src="./assets/images/newnew.png"
        alt="me"
        style={{ maxWidth: "100%" }}
      />
      <div className="jumbotron">
        <h1>50 Projects in 100 Days Challenge</h1>
        <br></br>
        <p>
          We're going to be using Bootstrap for this project. This will be the
          50 projects in 100 days challenge. I will be attempting to code a
          small project every 2 days for 100 days straight. Why? Because it's
          fun and will hopefully help me bring out creative ideas in the long
          run. Right now I'm lack some self-creativity and I need a way to look
          forward. So Here we go and welcome all! Granted there will be times I
          will get stuck, but that's okay. What's programming without getting
          stuck right?
        </p>
        <p>
          More often than not I will try and post the projects up on github for
          a working repo
        </p>
        <p>
          These projects will be mostly based in React but I will do some
          vanilla Javascript with cool libraries every now and then.
        </p>
        <Hidebtn />
        <br />
        <div className="card">
          <div className="card-header">
            <h1>START DATE: MARCH 22, 2021</h1>
            <h1>END DATE: JULY 30, 2021</h1>
          </div>
        </div>
      </div>
      <BigTable />
      <br></br>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Updated Projects will go here:</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            I will keep this updated as much as possible in order to follow up
            with my dedication.
          </p>
        </div>
        <div className="jumbotron">
          <div className="card-body" id="ass1">
            Assignment #1 : This website
          </div>
          <h5>March 22, 2021 - March 23, 2021</h5>
          <h6>Details:</h6>
          <p>
            Today I will be making this website and try to document little
            projects I will be attempting to complete within every 2 days. These
            projects will be small but very logical where it would take more
            than a day to complete. Completed basic web page layout along with a
            table to keep track of my projects as I go along. So far I have not
            have had any problems, which is nice, we're off to a good start.
            Tomorrow I will be pushing this up to a hosting site and it will be
            live.
          </p>
          <p>
            Day 2: The site is pushed on vercel and making a couple of styling
            changes going forward. Site will be SEO optimized as best as
            possible.
          </p>
        </div>
        <div className="card-body">
          <div className="card-text">
            <p>Assignment #2 : Wonderful Pagination</p>
            <h5>March 24, 2021 - March 26, 2021</h5>
            <h6>Details:</h6>
            <p id="slice">
              One of the key things to making a responsive website functional
              and easy to navigate is the ability to paginate certain items
              displayed. Today I delved in learning pagination with a basic API
              call to jsonplaceholder sample posts. The key to making pagination
              is the slice method, it looks VERY intimidating at first but all
              it is is
              <code> data.slice(indexOfFirstData, indexOfLastData)</code>. What
              this essentially means is to slice out certain data so we only
              show that amount. Once I got the hang of it down I swapped out
              that boring API for something more....fun, like Pokemon! We're now
              using <a href="https://pokeapi.co/">this API</a> to make a
              'Pokedex' like app. If you think I did this by myself you'd be
              lying to yourself. Google and youtube is my best-friend, I managed
              to find a couple good videos, one specially from Travery Media. On
              that note I have already thought of plans I want to accomplish
              tomorrow.
            </p>
            <br></br>
            <p>
              Day 2: The poke's link to an json page displaying all facts. This
              project wasn't too bad in the beginning but once the first call is
              made, at least 1 other call is going to be made to receive data.
              Tomorrow will be tackling nesting API calls with Axios in React.
            </p>
          </div>
        </div>
        <div className="jumbotron">
          <div className="card-body" id="ass1">
            Assignment #3 : API Literature
          </div>
          <h5>March 27, 2021 - March 29, 2021</h5>
          <h6>Details:</h6>
          <p id="ass3">
            Well that took a lot longer than it should have. Good news I figured
            out how to do it within a couple hours. When clicked on Pokemon,
            another API will be sent out given the Pokemon name as the
            parameter. Bad news something went terribly wrong with my github and
            my code doesn't work anymore. Which is fine because it sucked anyway
            and I will start fresh on that. My pagination Repo is kinda fucked
            up in terms of merging and pushing. I should have just started a
            brand new one, but I got cocky and lazy. Once I figure out how to
            solve that I will, but for now, it's not a big deal since we are
            just startig over from scratch. As for the actual code it wasn't too
            bad, I made a regular function that gets called in an onClick and
            logs out the specific mon. Tomorrow I should quickly make a template
            and continue on nested API calls to grab more specific information
            such as berry types, movesets, natures.
          </p>
          <p>
            Day 2: Started over a new repo and went successfully! Spent the
            whole day stretching out this API to get more poke details. Multiple
            small accomplishments led to what I was trying to make. Pagination
            working with the API along with the details. The API is now I think
            I might continue this project for another 2 days to run more API's.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
