import { component$ } from "@builder.io/qwik";
import bg from "~/assets/images/header-bg.svg";
import effect from "~/assets/images/effect.svg";

export default component$(() => {
  return (
    <>
      <div class="hero h-screen items-start bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse justify-around w-screen">
          <img
            src={bg}
            class="max-w-lg lg:max-w-2xl"
            alt="header-bg"
            height={800}
            width={800}
          />
          <div>
            <h1 class="text-5xl font-bold font-neov">
              Generate any podcast idea in your mind in one click
            </h1>
            <p class="py-6 font-neov">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <div class="w-full">
          <img
            src={effect}
            class="absolute -bottom-44 w-[100%]"
            alt="effect"
            height={800}
            width={800}
          />
        </div>
      </div>
    </>
  );
});
