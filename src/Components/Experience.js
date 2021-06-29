import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Experience.css";
import car from "../assets/Img_06.png";
import $ from "jquery";

/* JS will not correctly work when switching between desktop and mobile unless in debug mode */

function Experience() {
  useEffect(() => {
    $(function () {
      console.log("Yeah1");
      var timeline = $("#timeline").find(".line");
      var timelineDot = $(timeline).find(".dot");
      var numDots = $(timeline).find(".year.dot").length * 4 + 1;
      var mobileYear = $(timeline).find(".year.dot");
      var mobileDefault = $(timeline).find(".dot.js-mobile-default");

      $(mobileDefault).addClass("active");

      // CONTENT SWITCH
      $(timelineDot).each(function () {
        console.log("Yeah2");
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
            console.log("Yeah");
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
          console.log("Yeah3");
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

    function ChangeActive() {
      var inputs = $(".input");
      var paras = $(".description-flex-container").find("p");
      inputs.click(function () {
        var t = $(this),
          ind = t.index(),
          matchedPara = paras.eq(ind);
        t.add(matchedPara).addClass("active");
        inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
      });
    }

    ChangeActive();
  }, []);

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
                  Created my own Android Application for JEE mentorship - Trajektory on Google Play ( <a href="https://play.google.com/store/apps/details?id=com.sanchit.trajektory">Link</a> )
                </li>
                <p className="li_text">
                       - Worked on Android Studio (Java) + Firebase (Backend)<br/>
                       - Integrated Push Notifications + Mentor Matching Algorithm<br/>
                       - Integrated Google Ads + course Material <br/>
                       - Gave Realtime chat feature to user using Firebase </p>
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
                <p className="li_text">
                       - Created an Android Application to help People in College to Rent and Lend things on this platform and manage the delivery , payment and gaurantee of their items . ( <a href="https://github.com/0xsanchit/Relnto">Project Link</a> )
                        </p>
                <li className="li-design">
                  Started my Intern at Melvano as a Content Developer
                </li>
                <p className="li_text">
                       - Helped Solve Doubts and questions for students preparing for JEE 
                        </p>
              </ul>
            </p>
          </div>
          <div data-index="3" class="text-default">
            <p>Year 2019, Quarter 4</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">Completed my Intern at Relnto</li>
                <p className="li_text">
                       - The Application was completed but the seniors graduated and it couldnt be launched . 
                        </p>
                <li className="li-design">Completed my intern at Melvano</li>
                <p className="li_text">
                       - Solved 1000+ questions at Melvano 
                        </p>
                <li className="li-design">
                  Worked at Toppr as a Content Developer
                </li>
                <p className="li_text">
                       - Started at Toppr to help students preparing for JEE
                        </p>
                <li className="li-design">
                  Interned at Verzeo in partner with Microsoft - Cyber Security{" "}
                </li>
                <p className="li_text">
                       - Worked on Cyber Security Fundamentals , such as learning Kali Linux , working with wifi scanners , learning to crack basic WEP , WPA , WPA2 . Airmon-ng , little bit of SQL Injection .
                        </p>
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
                <p className="li_text">
                       - Started at Toppr to help students preparing for JEE
                    </p>
                        <li className="li-design">
                  Worked at Photo Book (Nirmaan Incubated StartUp) as Android Developer
                </li>
                <p className="li_text">
                       - Worked on Android Studio (Java) + Firebase (Backend)
                    <br/> - Integrated Razorpay payment gateway <br/>
                    - User has the functionality to upload photos and get their photobook created and mailed to them in various designs 
                  </p>

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
                <p className="li_text">
                      - Learn React Basics , learnt JavaScript <br/>
                      - Explored the CodeBase and understood it <br/>
                      - Worked on a guided automated tour of the Website from scratch 
                </p>
                <li className="li-design">
                  Started and Completed Internship at Campo - Marketing and Research
                </li>
                <p className="li_text">
                      - Created posters for the Company <br/>
                      - Explored their business ideas and gave insights <br/>
                      - Contacted customers to sell them the services  <br/>
                      - Contacted companies to sell the new Game developed by Campo <br/>
                </p>
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
                <p className="li_text">
                      - Worked on the whole Login System and navbar and creating questions <br/>
                      - Working on the quiz system
                </p>
                <li className="li-design">
                  Started Internship at Eduvisory - Full Stack Developer
                </li>
                <p className="li_text">
                      - Worked to create forms and submit contact info using MongoDB<br/>
                      - Worked to do research and provide them information about payment gateways 
                </p>

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
                <p className="li_text">
                       - Worked on React Native (Frontend) + AWS (Backend) + GraphQL (Backend) <br/>
                       - Learn VTL language and created some Pipelines for Chat features . 
                        </p>
                <li className="li-design">
                  Continued my Intern at SignTalk as Web Developer (ReactJS) ( <a href="https://signtalk.in/learnisl/learn/">Link</a> )
                </li>
                <p className="li_text">
                      - Worked on Integrating Video-React features 
                  <br/>- Worked on Integrating Quiz features 
                </p>
                <li className="li-design">
                  Worked at CampK12 
                </li>
                <p className="li_text">
                      - Helped students of all classes learn coding in MIT AppInventor 
                      - Helped them make various mobile apps 
                </p>
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
                <p className="li_text">
                       - Revamped the dashboard page using React-slick and material UI . Created swivel and fade animation . <br/>
                       - Created cards for Island Levels and created animatins . 
                        </p>
                    <li className="li-design">
                  Worked on my StartUp (Android Application) - Upsilon ( <a href="https://play.google.com/store/apps/details?id=com.sanchit.Upsilon">Link</a> )
                </li>
                <p className="li_text">
                       - An Android Application to help connect students to tutors . <br/>
                       - Promotes local tutors business as well as easy online / offline class management <br/>
                       - Android Studio (Java) + Node JS + MongoDB Realm
                        </p>
                        <li className="li-design">
                  Worked on my BlockChain Project (FlashLoans + Arbitrage) ( <a href="https://github.com/0xsanchit/FlashLoan">Link</a> )
                </li>
                <p className="li_text">
                       - Uses Aave Flash Loan + Solidity Contract to borrow a huge amount of crypto without collateral just for 1 transaction . <br/>
                       - Can be combined with Arbitrage to prune high profits . (Working on this)
                        </p>
              </ul>
            </p>
          </div>
          <div data-index="9" class="text-default">
            <p>Year 2021, Quarter 2</p>
            <p className="p-design">
              <ul className="ul-design">
                <li className="li-design">
                    Started my Internship at MentorMatch (Full Stack Developer)
                </li>
                <p className="li_text">
                       - Worked as a Full Stack Developer to develop their Website . Worked on react-calendar , Chakra-UI , nodejs etc. 
                        </p>
                        <li className="li-design">
                    Started my Internship at Digital Outcomes (Data Scientistg)
                </li>
                <p className="li_text">
                       - Worked as a DataScientist to develop a ML product for Prospect-Intelligence . The python program I created , parses the linkedIn profile of a User and then applies some models combined with other data to give you important details which can be used to sell him products . 
                        </p>
                    <li className="li-design">
                    Started and Completed my Internship at Caanvi ( MIT Based StartUp )
                </li>
                <p className="li_text">
                       - Worked as a React JS Webdeveloper to develop their front-end . 
                        </p>
                        <li className="li-design">
                    Worked as Freelancer for a foreign Company ( Bookit Sports - California ) to integrate MongoDB Realm (Backend) for Chat Features
                </li>
                <p className="li_text">
                       - Worked as a freelancer to help them integrate MongoDB Realm Sync in their android application for their chat feature
                        </p>
              </ul>
            </p>
          </div>
          <div data-index="10" class="text-default">
            <p>Year 2021, Quarter 3</p>
            <p className="p-design">
              <ul className="ul-design">
              <li className="li-design">
                    Continued my Internship at MentorMatch 
                </li>
                <p className="li_text">
                       - Continued as a Full Stack Developer to develop their Website . Worked on react-calendar , Chakra-UI , nodejs etc. 
                        </p>
                        <li className="li-design">
                    Continued my Internship at Digital Outcomes 
                </li>
                <p className="li_text">
                       - Worked as a DataScientist to develop a ML product for Prospect-Intelligence . The python program I created , parses the linkedIn profile of a User and then applies some models combined with other data to give you important details which can be used to sell him products . 
                        </p>
                        <li className="li-design">
                    Continued my Work at my startUp Upsilon
                </li>
    
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
