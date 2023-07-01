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


  <div>
    <img
      class="absolute top-[160px] left-[287px] w-[437px] h-[530px]"
      alt=""
      src="/bckgrnd-home1.svg"
    />
    <div
      class="absolute top-[227px] left-[320px] w-[418px] h-[225px]"
    >
      <img
        class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/saly25@2x.png"
      />
    </div>
    
    <div
      class="absolute top-[562px] left-[425px] rounded-11xl bg-mediumvioletred-100 shadow-[0px_4px_10px_rgba(255,_255,_255,_0.25)] w-[200px] h-[50px] flex flex-col items-center justify-center cursor-pointer"
      @click="onFrameContainer4Click"
    >
      <div class="relative leading-[20px] font-medium">Create</div>
    </div>
    <div class="absolute top-[512px] left-[373px] leading-[20px] font-medium">
      Buat survey lebih mudah dan cepat
    </div>
    

    <img
      class="absolute top-[160px] left-[772px] w-[437px] h-[530px]"
      alt=""
      src="/bckgrnd-home2.svg"
    />
    <div
      class="absolute top-[140px] left-[914px] w-[220px] h-[279px]"
    >
      <img
        class="absolute h-full w-full top-[2.17%] right-[6.9%] bottom-[-2.17%] left-[-6.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/saly26@2x.png"
      />
    </div>

    <div
      class="absolute top-[562px] left-[914px] rounded-11xl bg-mediumslateblue-100 shadow-[0px_4px_10px_rgba(255,_255,_255,_0.25)] w-[200px] h-[50px] flex flex-col items-center justify-center cursor-pointer"
      @click="onFrameContainer5Click"
    >
      <div class="relative leading-[20px] font-medium">Gabung</div>
    </div>
    <div
      class="absolute top-[442px] left-[888px]"
    >
      <input type="text" name="kode" id="kode" autocomplete="given-name" class="block w-[225px] h-[40px] rounded-[40px] border-0 py-1.5 text-gray-900 shadow-[0px_6px_10px_rgba(255,_255,_255,_0.25)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-mediumslateblue-100 sm:text-xl sm:leading-4" />
    </div>
    <div class="absolute top-[512px] left-[915px] leading-[20px] font-medium">
      Masukkan kode survey
    </div>

  </div>
</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Aktivitas', href: '#', current: false },
]
</script>



<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Home",
    methods: {
      onFrameContainer1Click() {
        this.$router.push("/aktivitasselesai");
      },
      onFrameContainer4Click() {
        this.$router.push("/create-form");
      },
      onFrameContainer5Click() {
        this.$router.push("/in-form");
      },
    },
  });
</script>