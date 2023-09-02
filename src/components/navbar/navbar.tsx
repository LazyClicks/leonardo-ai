import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="navbar bg-info shadow-lg">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Leonardo.Ai</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-primary rounded-full capitalize font-neov w-32 ">
            Register
          </button>
        </div>
      </div>
    </>
  );
});
