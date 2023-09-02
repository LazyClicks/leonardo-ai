import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import heartFace from "~/assets/images/heart-face.svg";
import bang from "~/assets/images/bang.svg";
import ImgstarGreen from "~/assets/images/green-star.png?jsx";
import ImgstarYellow from "~/assets/images/yellow-star.png?jsx";
import ImgstarPink from "~/assets/images/pink-star.png?jsx";

export default component$(() => {
  return (
    <>
      <div class="h-screen flex flex-col justify-center items-center px-24">
        <div class="flex pb-44 pt-[40rem]">
          <div>
            <img
              src={heartFace}
              class="min-w-max"
              alt="heart face"
              height={293}
              width={305}
            />
          </div>
          <div class="w-[70%]">
            <h3 class="text-5xl mb-5">
              What is <span>Leanardo.Ai?</span>
            </h3>
            <p class=" text-lg">
              Leonardo.Ai is an AI platform that helps you create podcasts. Just
              give it an idea, and it will generate a podcast script for you in
              text format You can then use the script to create an audio
              podcast.Leonardo is free to use for basic features, and there are
              paid plans available for businesses and teams. Here are some of
              the benefits of using Leonardo.Ai to create podcasts: Save
              time,Improve quality,Get feedback and Collaborate with others
            </p>
          </div>
        </div>
        {/* second */}
        <div class="flex flex-row w-full justify-center">
          <div class="w-[70%]">
            <h3 class="text-5xl mb-5">Can experts use Leonardo.Ai.</h3>
            <p class="mb-6 text-lg">
              Leonardo.Ai has the potential to revolutionize the podcast field.
              By making it easier and faster to create high-quality podcasts,
              Leonardo can help more people start and grow their podcast
              businesses.Experts in the podcast field can use Leonardo to reach
              another level by:
            </p>
            <ul class="list-inside flex-col">
              <li class="flex items-start gap-2 mb-3">
                <ImgstarGreen />
                Creating more content: Leonardo can help experts create more
                content by automating the scriptwriting process. This frees up
                experts' time so they can focus on other aspects of their
                podcast business, such as promoting and distributing their
                content.
              </li>
              <li class="flex items-center gap-2 mb-3">
                <ImgstarYellow />
                Improving the quality of their content: Leonardo can help
                experts improve the quality of their content by generating
                scripts that are both creative and engaging. This can help
                experts attract more listeners and build a loyal audience.
              </li>
              <li class="flex items-center gap-2">
                <ImgstarPink />
                Experimenting with new formats: Leonardo can help experts
                experiment with new podcast formats, such as interview shows,
                narrative podcasts, and comedy podcasts. This can help experts
                find new ways to connect with their audience and stay ahead of
                the competition.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={bang}
              class="min-w-max"
              alt="heart face"
              height={293}
              width={305}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
