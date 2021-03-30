import { Container } from "@material-ui/core";
import React from "react";
import "./Experience.css";
import car from "../assets/Img_06.png";
import $ from "jquery";

/* JS will not correctly work when switching between desktop and mobile unless in debug mode */

$(function () {
  var timeline = $("#timeline").find(".line");
  var timelineDot = $(timeline).find(".dot");
  var numDots = $(timeline).find(".year.dot").length * 4 + 1;
  var mobileYear = $(timeline).find(".year.dot");
  var mobileDefault = $(timeline).find(".dot.js-mobile-default");

  $(mobileDefault).addClass("active");

  // CONTENT SWITCH
  $(timelineDot).each(function () {
    $(this).click(function () {
      var currentDesc = $("#description").find(".section-wrapper > div");
      $(currentDesc).hide();
      matchContent($(this)).fadeIn();
    });
  });

  var resizeTimer;
  var initialSize = $(window).width();

  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var delayedSize = $(window).width();
      // if we resize but not enough to change layout, proceed as usual
      if (
        (initialSize > 480 && delayedSize > 480) ||
        (initialSize < 481 && delayedSize < 481)
      ) {
        if (initialSize > 480 && delayedSize > 480) {
          desktopTimeline();
        } else if (initialSize < 481 && delayedSize < 481) {
          mobileTimeline();
        }
      }

      // if we resize the page and switch between desktop and mobile layouts, reload the page
      else {
        // location.reload();
        window.location.reload();
      }

      initialSize = delayedSize;
    }, 250);
  });

  // DESKTOP FUNCTIONALITY
  function desktopTimeline() {
    $(timelineDot).each(function () {
      // highlight the appropriate portion of the line as you click the dots
      var ind = Number(findIndex($(this)));
      var x = round((0.9 / numDots) * ind * 100, 4);
      var y = round(((0.9 / numDots) * 100) / 2, 4);
      var z = x + y;

      $(this).click(function () {
        $(timelineDot).removeClass("active complete");
        $(this).addClass("active");
        $(this).prevAll(".dot").addClass("complete");
        $(timeline).css({
          background:
            "linear-gradient(to right, " +
            "#C0392B " +
            z +
            "%, " +
            "#FBFCFC " +
            z +
            "%)",
        });
      });
    });
  }

  // MOBILE FUNCTIONALITY
  function mobileTimeline() {
    $(timelineDot).click(function () {
      var mobileQuarter = $(this).nextUntil(".year.dot");

      if ($(this).hasClass("year")) {
        $(timelineDot).not($(this)).removeClass("active complete");
        $(this).addClass("complete");
        $(this).next().addClass("active");
        $(this).prevAll(".dot.year").addClass("complete");
        $(".dot.quarter").not(mobileQuarter).slideUp(500);
        $(mobileQuarter).slideDown(500);
      } else if ($(this).hasClass("quarter")) {
        var parentYear = $(this).prevUntil(".dot.year");

        $(this).addClass("active");
        $(timelineDot).not($(this)).removeClass("active");
        $(mobileQuarter).add(mobileYear).removeClass("complete");
        $(parentYear)
          .add($(this))
          .add($(this).prevAll(".dot.year"))
          .addClass("complete");
      }
    });
  }

  // RETRIEVE ELEMENT'S INDEX AMONG VISIBLE DOTS
  function findIndex(dataInd) {
    return $(dataInd).attr("data-index");
  }
  // FIND MATCHING CONTENT
  function matchContent(matchedContent) {
    return $("#description").find(
      '.section-wrapper > div[data-index="' +
        $(matchedContent).attr("data-index") +
        '"]'
    );
  }

  // ROUND DECIMALS
  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }

  $(window).resize();
});

// function ChangeActive() {
//   var inputs = $(".input");
//   var paras = $(".description-flex-container").find("p");
//   inputs.click(function () {
//     var t = $(this),
//       ind = t.index(),
//       matchedPara = paras.eq(ind);
//     t.add(matchedPara).addClass("active");
//     inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
//   });
// }

function Experience() {
  // ChangeActive();

  return (
    // <Container className="night">
    //   <div className="surface"></div>
    //   <div className="car">
    //     <img src={car} />
    //   </div>
    // </Container>
    <React.Fragment className="Experience">
      <section id="timeline">
        <div class="section-wrapper">
          <div class="line">
            <div
              data-mobiletext="Quarter 4"
              data-index="1"
              class="quarter q4 y2016 dot complete active"
            ></div>
            <div
              data-mobiletext="2019 Quarter 3"
              data-timelinelabel="1st Year"
              data-index="2"
              class="year y2017 dot complete"
            ></div>
            <div
              data-mobiletext="Quarter 1"
              data-index="2"
              class="quarter q1 y2017 dot complete js-mobile-default"
            ></div>
            <div
              data-mobiletext="Quarter 2"
              data-index="3"
              class="quarter q2 y2017 dot"
            ></div>
            <div
              data-mobiletext="Quarter 3"
              data-index="4"
              class="quarter q3 y2017 dot"
            ></div>
            <div
              data-mobiletext="Quarter 4"
              data-index="5"
              class="quarter q4 y2017 dot"
            ></div>
            <div
              data-mobiletext="2020 Quarter 3"
              data-timelinelabel="2nd Year"
              data-index="6"
              class="year y2018 dot"
            ></div>
            <div
              data-mobiletext="Quarter 1"
              data-index="6"
              class="quarter q1 y2018 dot"
            ></div>
            <div
              data-mobiletext="Quarter 2"
              data-index="7"
              class="quarter q2 y2018 dot"
            ></div>
            <div
              data-mobiletext="Quarter 3"
              data-index="8"
              class="quarter q3 y2018 dot"
            ></div>
            <div
              data-mobiletext="Quarter 4"
              data-index="9"
              class="quarter q4 y2018 dot"
            ></div>
            <div
              data-mobiletext="2021 Quarter 3"
              data-timelinelabel="3rd Year"
              data-index="10"
              class="year y2019 dot"
            ></div>
            <div
              data-mobiletext="Quarter 1"
              data-index="10"
              class="quarter q1 y2019 dot"
            ></div>
            <div
              data-mobiletext="Quarter 2"
              data-index="11"
              class="quarter q2 y2019 dot"
            ></div>
            <div
              data-mobiletext="Quarter 3"
              data-index="12"
              class="quarter q3 y2019 dot"
            ></div>
            <div
              data-mobiletext="Quarter 4"
              data-index="13"
              class="quarter q4 y2019 dot"
            ></div>
            <div
              data-mobiletext="2022 Quarter 3"
              data-timelinelabel="4th Year"
              data-index="14"
              class="year y2020 dot"
            ></div>
            <div
              data-mobiletext="Quarter 1"
              data-index="14"
              class="quarter q1 y2020 dot"
            ></div>
            <div
              data-mobiletext="Quarter 2"
              data-index="15"
              class="quarter q2 y2020 dot"
            ></div>
            <div
              data-mobiletext="Quarter 3"
              data-index="16"
              class="quarter q3 y2020 dot"
            ></div>
            <div
              data-mobiletext="Quarter 4"
              data-index="17"
              class="quarter q4 y2020 dot"
            ></div>
          </div>
        </div>
      </section>
      <section id="description">
        <div class="section-wrapper">
          <h3 className="top-experience-text">Experiences</h3>
          <div data-index="1" class="text-default">
            <p className="year-header">Year 2019, Quarter 2</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">Completed 12th board</li>
                <li className="li-design">
                  Created my own Android Application for JEE mentorship
                </li>
              </ul>
            </p>
          </div>
          <div data-index="2" class="text-default">
            <p>Year 2019, Quarter 3</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                  Interned at Relnto (Nirmaan incubated startup) - Android App
                  Development
                </li>
                <li className="li-design">
                  Started my Intern at Melvano as a Content Developer
                </li>
              </ul>
            </p>
          </div>
          <div data-index="3" class="text-default">
            <p>Year 2019, Quarter 4</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">Completed my Intern at Relnto</li>
                <li className="li-design">Completed my intern at Melvano</li>
                <li className="li-design">
                  Worked at Toppr as a Content Developer
                </li>
                <li className="li-design">
                  Interned at Verzeo in partner with Microsoft - Cyber Security{" "}
                </li>
              </ul>
            </p>
          </div>
          <div data-index="4" class="text-default">
            <p>Year 2020, Quarter 1</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                  Worked at Toppr as a Content Developer
                </li>
              </ul>
            </p>{" "}
          </div>
          <div data-index="5" class="text-default">
            <p>Year 2020, Quarter 2</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                  Started my Internship at SignTalk - Web Developer (ReactJS)
                </li>
              </ul>
            </p>
          </div>
          <div data-index="6" class="text-default">
            <p>Year 2020, Quarter 3</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                  Continued my Internship at SignTalk - Web Developer (ReactJS)
                </li>
                <li className="li-design">
                  Started Internship at Eduvisory - Web Developer (ReactJS)
                </li>
              </ul>
            </p>
          </div>
          <div data-index="7" class="text-default">
            <p>Year 2020, Quarter 4</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                  Winter Intern at Newzera - Mobile App Developer (React Native)
                </li>
                <li className="li-design">
                  Continued my Intern at SignTalk as Web Developer (ReactJS)
                </li>
              </ul>
            </p>
          </div>
          <div data-index="8" class="text-default">
            <p>Year 2021, Quarter 1</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                  Continued my Intern at SignTalk as Web Developer (ReactJS)
                </li>
              </ul>
            </p>
          </div>
          <div data-index="9" class="text-default">
            <p>Year 2021, Quarter 2</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="10" class="text-default">
            <p>Year 2021, Quarter 3</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="11" class="text-default">
            <p>Year 2021, Quarter 4</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="12" class="text-default">
            <p>Year 2022, Quarter 1</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="13" class="text-default">
            <p>Year 2022, Quarter 2</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="14" class="text-default">
            <p>Year 2022, Quarter 3</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="15" class="text-default">
            <p>Year 2022, Quarter 4</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="16" class="text-default">
            <p>Year 2023, Quarter 1</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
          <div data-index="17" class="text-default">
            <p>Year 2023, Quarter 2</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design"></li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Experience;
