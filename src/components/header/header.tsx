import { component$ } from "@builder.io/qwik";
import bg from "~/assets/images/header-bg.svg";

export default component$(() => {
  return (
    <>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bg}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="header-bg"
            height={800}
            width={800}
          />
          <div>
            <h1 class="text-5xl font-bold">
              Generate any podcast idea in your mind in one click
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
