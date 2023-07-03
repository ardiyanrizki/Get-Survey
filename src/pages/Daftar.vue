<template>
  <div
    class="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('public/backgroundregister.png')"
  >
    <div
      class="card login-form bg-gradient-to-br from-pink-300 to-br to-purple-300 shadow-xl rounded-lg w-1/3 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
    >
      <div class="card-body">
        <div
          class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
              class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-pink-500"
            >
              Register
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Username</label
                >
                <div class="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autocomplete="username"
                    class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email
                </label>
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

              <div class="mb-3">
                <label
                  for="nama"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Nama Lengkap</label
                >
                <div class="flex gap-2">
                  <input
                    type="text"
                    class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="nama"
                  />
                  <input
                    type="text"
                    class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="nama"
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
                  class="flex w-full justify-center rounded-full bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Already have an account? {{ " " }}
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Login</a
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
  name: "Daftar",
  methods: {
    onSudahPunyaAkunClick() {
      this.$router.push("/login");
    },
    onFrameContainer6Click() {
      this.$router.push("/home");
    },
  },
});
</script>
