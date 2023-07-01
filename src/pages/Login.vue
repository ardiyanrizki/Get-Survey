<!--<template>
  <div
    class="relative bg-default-white w-full h-[864px] overflow-hidden text-center text-lg text-dimgray-200 font-inter"
  >
    <div class="absolute top-[-365px] left-[-519px] w-[1849.07px] h-[1483.4px]">
      <div
        class="absolute top-[1194.13px] left-[0px] rounded-259xl-7 bg-default-white box-border w-[1018.26px] h-[334.02px] [transform:_rotate(-30deg)] [transform-origin:0_0] border-[3px] border-solid border-blueviolet-200"
      />
      <div
        class="absolute top-[640.93px] left-[571.94px] rounded-259xl-7 bg-default-white box-border w-[1281.85px] h-[334.02px] [transform:_rotate(-30deg)] [transform-origin:0_0] border-[3px] border-solid border-fuchsia"
      />
    </div>
    <div class="absolute top-[-345px] left-[-510px] w-[1703px] h-[1412.01px]">
      <div
        class="absolute top-[607.38px] left-[492.72px] rounded-259xl-7 [background:linear-gradient(221.71deg,_#d9bbff_26.1%,_#8f00ff)] w-[1214.76px] h-[316.54px] [transform:_rotate(-30deg)] [transform-origin:0_0]"
      />
      <div
        class="absolute top-[1137.88px] left-[0px] rounded-259xl-7 [background:linear-gradient(69.33deg,_#ff25cf_37.06%,_#ff8ce6)] shadow-[-211.04669189453125px_-370.94732666015625px_119.46px_rgba(0,_0,_0,_0),_-135.15850830078125px_-237.45062255859375px_109.31px_rgba(0,_0,_0,_0.01),_-76.07282257080078px_-133.49671936035156px_92.14px_rgba(0,_0,_0,_0.03),_-33.78962707519531px_-59.27033233642578px_68.32px_rgba(0,_0,_0,_0.04),_-8.49356746673584px_-14.771422386169434px_37.48px_rgba(0,_0,_0,_0.05),_0px_0px_0px_rgba(0,_0,_0,_0.05)] w-[964.96px] h-[316.54px] [transform:_rotate(-30deg)] [transform-origin:0_0]"
      />
    </div>
    <div
      class="absolute top-[80px] left-[518px] rounded-3xs [background:linear-gradient(131.11deg,_#d6b3f1,_rgba(235,_123,_199,_0.6))] shadow-[13px_13px_20px_5px_rgba(0,_0,_0,_0.3)] w-[500px] h-[575px] overflow-hidden"
    >
      <b
        class="absolute top-[70px] left-[195px] text-21xl leading-[20px] text-mediumslateblue-100"
        >Login</b
      >
      <div
        class="absolute top-[485px] left-[109px] text-base leading-[20px] cursor-pointer text-mediumslateblue-100"
        @click="onBelumPunyaAkunClick"
      >
        <span class="font-medium">Belum punya akun? </span>
        <b class="text-mediumvioletred-100">Daftar</b>
        <span class="font-medium"> sekarang!</span>
      </div>
      <div
        class="absolute top-[390px] left-[175px] rounded-11xl bg-mediumslateblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[150px] h-[45px] flex flex-col py-3 px-0 box-border items-center justify-end cursor-pointer text-default-white"
        @click="onFrameContainer1Click"
      >
        <div class="relative leading-[20px]">Login</div>
      </div>
      <div
        class="absolute top-[330px] left-[50px] w-[143px] h-5 flex flex-row items-center justify-start gap-[20px] text-mini"
      >
        <div class="relative rounded-[5px] bg-default-white w-5 h-5" />
        <div class="relative leading-[20px]">Remember Me</div>
      </div>
      <div
        class="absolute top-[250px] left-[40px] rounded-11xl bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[420px] h-[50px] flex flex-row py-2.5 px-[30px] box-border items-center justify-start gap-[247px]"
      >
        <div class="relative leading-[20px]">Password</div>
        <img
          class="relative w-[30px] h-[30px]"
          alt=""
          src="/view-hide-light.svg"
        />
      </div>
      <div
        class="absolute top-[170px] left-[40px] rounded-11xl bg-default-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[420px] h-[50px] flex flex-col py-0 px-[30px] box-border items-start justify-center"
      >
        <div class="relative leading-[20px]">Email</div>
      </div>
    </div>
  </div>
</template>-->

<!-- <template>
  <div>
    <img
      class="absolute top-[0px] left-[0px] bg-"
      alt=""
      src="public/Frame 130.png"
    />
  </div>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p>
    </div>
  </div>

</template> -->

<template>
  <div
    class="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('public/Frame 130.png')"
  >
    <div
      class="card login-form bg-gradient-to-br from-purple-300 to-br to-pink-300 shadow-xl rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
    >
      <div class="card-body">
        <div
          class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
              class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-700"
            >
              Login
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Password</label
                  >
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member? {{ " " }}
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Start a 14 day free trial</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  methods: {
    onBelumPunyaAkunClick() {
      this.$router.push("/daftar");
    },
    onFrameContainer1Click() {
      this.$router.push("/home");
    },
  },
});
</script>
