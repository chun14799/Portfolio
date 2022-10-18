import React from "react";
import "./AboutMe.scss";
const AboutMe = () => {
  return (
    <div className="mystory mt-8">
      <div className="container">
        <h2 className="text-white text-5xl">About Me</h2>
        <p className="text-xl">
          I was born in 1999 at HCM city. Like everyone, I started my college
          life at 18 in University of Technology and Education, but in this
          chapter of my life, I met some life incident, in that time, I needed
          to leave school to stable my life, so I dropped out of school about
          1,5 year.
          <img
            src="https://www.kindpng.com/picc/m/436-4360621_transparent-pencil-and-paper-png-illustration-png-download.png"
            alt=""
            className="my-3 w-full"
          />
          After that, I noticed that everyone around me is going to graduate,
          started their career and I'm just go half of my college life. I need
          to hurry, so I hit the books, I just thought about how to pass the
          subject, no matter what I do and whether it's illegal or not, that
          make my knowlegde base weaker than usual student. <br />
          But, life is life, after quickly graduate, I'm learning web
          development in early 2022, which I heard is a trending job. I found
          out about front-end and it made me excited when I saw the change of
          the display just by coding, so that I decided to focus in this job, I
          found some video tutorial on youtube, the comnuity on facebook and a
          course about front-end and learnt them. <br />
          The opportunity for me just comes , and you too, keep it up, do your
          best... thanks.
          <span className="flex justify-center items- my-3 w-full">
            <img
              src="https://controlpublicidad.com/uploads/2020/06/paisaje-urbano-090252.jpg"
              alt=""
              className="w-full
              "
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
