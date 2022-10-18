import React from "react";
import "./Introduce.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Introduce = () => {
  const [ImText] = useTypewriter({
    words: ["I'm"],
  });
  const [nameText] = useTypewriter({
    words: ["Hoàng Long"],
  });
  return (
    <div className="container">
      <div className="relative w-full text-3xl px-8 sm:px-12 lg:px-5 xl:px-0 mb-10 md:mb-16 lg:mb-20 mt-8">
        <div className="introduce flex items-center justify-between">
          <div className="introduce_content ml-2">
            <h2 className="text-7xl text-white">
              Hi, <span>{ImText}</span>{" "}
              <span className="nameText">{nameText}</span>
              <Cursor />
            </h2>
            <div className="bio_description">
              <div className="my-10 text-lg">
                <p className="my-4">Welcome to my portfolio !</p>{" "}
                <p className="mb-5">
                  I enjoyed building a front-end of website, where I can see the
                  change of the display, <br />
                  it's make me excited. Beside that, I also love playing with
                  dog.{" "}
                </p>
              </div>
              <div className="mt-5"></div>
              <div className="title-content">
                <div class="title-content__container inline-flex overflow-hidden font-semibold items-center">
                  <p class="title-content__container__text m-0  inline-flex">
                    I'm a
                  </p>
                  <span className="blinker">[</span>
                  <ul class="title-content__container__list text-center list-none">
                    <li className="title-content__container__list__item m-0">
                      Software Enginner
                    </li>
                    <li className="title-content__container__list__item m-0">
                      Gamer
                    </li>
                    <li className="title-content__container__list__item m-0">
                      Dog Lover
                    </li>
                    <li className="title-content__container__list__item m-0">
                      Manga/Anime Lover
                    </li>
                  </ul>
                  <span className="blinker">]</span>
                </div>
              </div>
            </div>
            <div className="mt-12"></div>
            <div className="resume-btn w-fit">
              <a
                href="../../images/CV_HoangLong.pdf"
                download="hoanglong_resume.pdf"
              >
                <button className="resume-button px-5 py-2 text-center uppercase relative   font-normal select-none rounded-xl">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div className="introduce_img relative mb-10 sm:mb-0">
            <div className="w-20 h-20 rounded-full absolute bg-fourth bg-opacity-70 scale-[2] z-[-1] right-10 top-10 blur-3xl pointer-events-none"></div>
            <img
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/158796248_1744191735754372_4285603490763316376_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=RSeVOOVG6NMAX8BRqfD&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT9jeuTFQli1H5QzQ_QQfzzwBYOYWrtO6XuSbvQG7rPaBA&oe=635A3BE0"
              alt="My Avatar"
              className="anime-shake avatar-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
