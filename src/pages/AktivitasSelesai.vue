<!--<template>
  <div
    class="relative bg-default-white w-full h-[864px] overflow-hidden text-center text-lg text-dimgray-100 font-inter"
  >
    <div
      class="absolute top-[285px] left-[1396px] rounded-[50%] bg-mediumvioletred-300 [filter:blur(100px)] w-[283px] h-[283px]"
    />
    <div
      class="absolute top-[512px] left-[1120px] rounded-[50%] bg-mediumslateblue-200 [filter:blur(100px)] w-[591px] h-[591px]"
    />
    <div
      class="absolute top-[0px] left-[0px] bg-neutral-silver shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1536px] h-[100px] overflow-hidden"
    >
      <img
        class="absolute h-2/5 w-[13.02%] top-[30%] right-[79.17%] bottom-[30%] left-[7.81%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo2-11@2x.png"
      />
      <div
        class="absolute top-[38px] left-[1377px] w-[38.75px] h-[25px] flex flex-col items-center justify-start gap-[5px]"
      >
        <div class="relative bg-darkslategray-200 w-[38.75px] h-[5px]" />
        <div class="relative bg-darkslategray-200 w-[38.75px] h-[5px]" />
        <div class="relative bg-darkslategray-200 w-[38.75px] h-[5px]" />
      </div>
      <div
        class="absolute top-[38px] left-[670px] w-[220px] h-6 overflow-hidden flex flex-row items-center justify-start gap-[25px]"
      >
        <div
          class="w-[85px] h-6 flex flex-row items-center justify-start gap-[10px] cursor-pointer"
          @click="onFrameContainerClick"
        >
          <img class="relative w-6 h-6" alt="" src="/home-duotone1.svg" />
          <div class="relative leading-[20px] font-medium">Home</div>
        </div>
        <div
          class="w-[110px] h-6 flex flex-row items-center justify-start gap-[10px] text-mediumslateblue-100"
        >
          <img class="relative w-6 h-6" alt="" src="/time1.svg" />
          <div class="relative leading-[20px] font-medium">Aktivitas</div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-[160px] left-[120px] rounded-xl box-border w-[206px] h-10 border-[1px] border-solid border-mediumpurple-100"
    />
    <div
      class="absolute top-[170px] left-[244px] leading-[20px] font-semibold cursor-pointer"
      @click="onDibuatTextClick"
    >
      Dibuat
    </div>
    <div
      class="absolute top-[165px] left-[130px] rounded-xl bg-mediumorchid w-[86px] h-[30px] flex flex-col py-0 px-[11px] box-border items-start justify-center text-default-white"
    >
      <div class="relative leading-[20px] font-semibold">Selesai</div>
    </div>
    <div
      class="absolute top-[260px] left-[120px] rounded-3xs bg-default-white shadow-[3px_6px_7px_rgba(0,_0,_0,_0.25)] box-border w-[1296px] h-[504px] border-[1px] border-solid border-black"
    />
    <div
      class="absolute top-[290px] left-[142px] w-[611px] h-[211px] flex flex-row items-center justify-start gap-[22px] text-default-white"
    >
      <div class="relative w-[294.5px] h-[211px]">
        <div
          class="absolute top-[4px] left-[0px] rounded-3xs bg-mediumpurple-300 [filter:blur(40px)] w-[286.5px] h-[207px]"
        />
        <div
          class="absolute top-[0px] left-[8px] rounded-3xs bg-gainsboro box-border w-[286.5px] h-[207px] border-[1px] border-solid border-mediumpurple-100"
        />
        <div
          class="absolute top-[167px] left-[76px] rounded-3xs bg-mediumvioletred-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[150px] h-[30px] flex flex-col items-center justify-center"
        >
          <div class="relative leading-[20px] font-semibold">Preview</div>
        </div>
        <div
          class="absolute top-[137px] left-[28px] leading-[20px] font-semibold text-black"
        >
          Pemrogramman Web
        </div>
        <img
          class="absolute top-[0px] left-[8px] rounded-t-3xs rounded-b-none w-[286.5px] h-[127px] object-cover"
          alt=""
          src="/frame-9@2x.png"
        />
      </div>
      <div class="relative w-[294px] h-[211px]">
        <div
          class="absolute top-[4px] left-[0px] rounded-3xs bg-mediumpurple-300 [filter:blur(40px)] w-[286.5px] h-[207px]"
        />
        <div
          class="absolute top-[0px] left-[7.5px] rounded-3xs bg-gainsboro box-border w-[286.5px] h-[207px] border-[1px] border-solid border-mediumpurple-100"
        />
        <div
          class="absolute top-[167px] left-[76px] rounded-3xs bg-mediumvioletred-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[150px] h-[30px] flex flex-col py-0 px-[39px] box-border items-end justify-center"
        >
          <div class="relative leading-[20px] font-semibold">Preview</div>
        </div>
        <div
          class="absolute top-[137px] left-[28px] leading-[20px] font-semibold text-black"
        >
          Final Project
        </div>
        <img
          class="absolute top-[0px] left-[7.5px] rounded-t-3xs rounded-b-none w-[286.5px] h-[127px] object-cover"
          alt=""
          src="/frame-91@2x.png"
        />
      </div>
    </div>
  </div>
</template>-->

<template>
  <div
    class="relative bg-default-white w-full h-[864px] overflow-hidden text-lg text-default-white font-inter"
  >
    <Disclosure as="nav" class="bg-neutral-silver shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-[100px]">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex lg:flex-1 items-center">
              <img class="block h-10 w-auto lg:hidden" src="public/logo2-11@2x.png" alt="Your Company" />
              <img class="hidden h-10 w-auto lg:block" src="public/logo2-11@2x.png" alt="Your Company" />
            </div>
            <div class="hidden lg:flex lg:gap-x-12 ">
              <div class="flex space-x-4">
                <h v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? ' text-mediumvioletred-100' : 'text-black hover:text-mediumvioletred-100', 'px-3 py-2 text-base font-medium cursor-pointer']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</h>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-neutral-silver text-base focus:outline-none">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-12 w-12 rounded-full" src="https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <h href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Your Profile</h>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <h href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Settings</h>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <h href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Sign out</h>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="h" :href="item.href" :class="[item.current ? 'bg-mediumvioletred-100 text-white' : 'text-black hover:bg-gray-200', 'block rounded-md px-3 py-2 text-base font-medium cursor-pointer']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  
  </div>


  <div>

  </div>
  
</template>


<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'Aktivitas', href: '#', current: true },
]
</script>



<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "AktivitasSelesai",
    methods: {
      onFrameContainerClick() {
        this.$router.push("/home");
      },
      onDibuatTextClick() {
        this.$router.push("/aktivitasdibuat");
      },
    },
  });
</script>
