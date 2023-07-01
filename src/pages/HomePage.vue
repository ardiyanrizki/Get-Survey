<template>
  <div
    class="relative bg-default-white w-full h-[3381px] overflow-hidden text-center text-base text-default-white font-inter"
  >


  <header class="bg-[#D8C2E9]">
    <nav class="mx-auto flex max-w-7xl h-[100px] items-center justify-between px-10 lg:px-8 " aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-10 w-auto" src="public/logo2-11@2x.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <h href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-mediumvioletred-100 cursor-pointer">Home</h>
        <h href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-mediumvioletred-100 cursor-pointer">About</h>
        <h href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-mediumvioletred-100 cursor-pointer">Anggota</h>
        <h href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-mediumvioletred-100 cursor-pointer">Pricing</h>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="rounded-3xs bg-mediumvioletred-100 w-[110px] h-[45px] flex flex-col items-center justify-center cursor-pointer">
          <h href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></h>
        </div>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden font-inter" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="public/logo2-11@2x.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <h href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 cursor-pointer">Home</h>
              <h href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 cursor-pointer">About</h>
              <h href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 cursor-pointer">Anggota</h>
              <h href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 cursor-pointer">Pricing</h>
            </div>
            <div class="py-6">
              <h href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-mediumvioletred-100 hover:text-white">Log in</h>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>


  <div class="flex">
      <div>
        <h1 
          class="absolute top-[180px] left-[120px] text-[60px] flex text-darkorchid text-left items-center "
        >
          Solusi Terbaik untuk <br />
          Survei Online yang <br>
          Efisien!
        </h1>
        <p 
          class="absolute top-[480px] left-[120px] text-lg tracking-[0.5px] leading-[20px] text-black text-left"
        >
          Buat survei anda dalam beberapa menit dengan lebih mudah.
        </p>
        <button 
          class="absolute top-[540px] left-[120px] rounded-3xs bg-mediumvioletred-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[186px] h-[55px] flex flex-row pt-0 px-5 pb-[18px] box-border items-end justify-center gap-[15px] cursor-pointer text-left text-lg"
          @click="onFrameContainer18Click"
        >
          <div class="relative tracking-[0.5px] leading-[20px] font-semibold text-white">
            Get Started
          </div>
          <img class="relative w-[25px] h-[15.63px]" alt="" src="/vector.svg" />
        </button>
      </div>
      <lottie-player class="absolute top-[100px] right-[100px]" src="https://assets4.lottiefiles.com/private_files/lf30_zqp6f9bt.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px;"  loop autoplay></lottie-player>
  </div>


  <div>
    <img
      class="absolute top-[729px] right-[-100px] w-[2275px] h-[790px] opacity-[0.8]"
      alt=""
      src="/background.svg"
    />
    <div
      class="absolute top-[934px] left-[192px] w-[1139px] h-[374px] text-sm text-darkslateblue-100 font-poppins"
    >
      <img
        class="absolute top-[0px] left-[0px] w-[381px] h-[372px]"
        alt=""
        src="/skilss.png"
      />
      <div
        class="absolute top-[82px] left-[503px] w-[636px] h-[210px] flex flex-col items-start justify-start gap-[40px] text-justify text-lg text-default-white font-inter"
      >
        <img
          class="relative w-[300px] h-[60px] object-cover"
          alt=""
          src="/logo2-1@2x.png"
        />
        <div
          class="relative tracking-[0.5px] leading-[22px] flex items-center w-[636px]"
        >
          Get Survey adalah sebuah perusahaan yang bergerak di bidang penelitian
          dan survei. Perusahaan ini menyediakan layanan untuk mengumpulkan data
          dan informasi dari responden dengan tujuan untuk mendapatkan wawasan
          dan pemahaman yang lebih baik tentang berbagai topik dan masalah yang
          relevan.
        </div>
      </div>
    </div>
  </div>


  <div>
    <h1 class="absolute top-[1545px] left-[660px] text-21xl tracking-[0.5px] leading-[22px] text-mediumslateblue-100 text-justify"
    >
      VISI & MISI
    </h1>
    <div
      class="absolute top-[1581px] left-[104px] w-[1316px] h-[531px] text-justify text-xl text-mediumblue"
    >
      <div
        class="absolute top-[51px] left-[0px] w-[780px] h-[480px] flex flex-col items-center justify-end"
      >
        <div
          class="w-[45px] h-[210px] overflow-hidden shrink-0 flex flex-col items-start justify-end gap-[166px]"
        >
          <b class="relative tracking-[0.5px] leading-[22px]">VISI</b>
          <b class="relative tracking-[0.5px] leading-[22px]">MISI</b>
        </div>
        <div
          class="relative w-[780px] h-[440px] overflow-hidden shrink-0 mt-[-170px] text-lg text-black"
        >
          <div
            class="absolute top-[0px] left-[0px] rounded-3xs box-border w-[780px] h-[93px] border-[1px] border-solid border-mediumslateblue-100"
          />
          <div
            class="absolute top-[184px] left-[0px] rounded-3xs box-border w-[780px] h-64 border-[1px] border-solid border-mediumslateblue-100"
          />
          <div
            class="absolute top-[12px] left-[16px] w-[746px] h-[408px] overflow-hidden flex flex-col items-center justify-start gap-[122px]"
          >
            <div
              class="relative tracking-[0.5px] leading-[22px] flex items-center w-[746px]"
            >
              Menjadi pemimpin global dalam menyediakan solusi survei yang
              inovatif dan memberdayakan organisasi serta individu untuk
              mengumpulkan dan menganalisis data dengan cepat, akurat, dan
              efektif.
            </div>
            <div
              class="relative text-[inherit] tracking-[0.5px] leading-[22px] font-inherit flex items-center w-[746px]"
            >
              <ul class="m-0 pl-6">
                <li class="mb-0">
                  Memberikan platform survei yang mudah digunakan dan intuitif,
                  memungkinkan pengguna untuk membuat, mengirim, dan
                  menganalisis survei dengan mudah.
                </li>
                <li class="mb-0">
                  Menyediakan berbagai fitur dan alat analisis yang canggih
                  untuk membantu pengguna mendapatkan wawasan yang berharga dari
                  data survei mereka.
                </li>
                <li class="mb-0">
                  Menjaga kehandalan dan keamanan data dengan
                  mengimplementasikan langkah-langkah keamanan yang ketat dan
                  menjaga privasi pengguna.
                </li>
                <li class="mb-0">
                  Menghadirkan pengalaman pelanggan yang luar biasa dengan
                  memberikan dukungan pelanggan yang responsif dan solusi
                  masalah yang cepat.
                </li>
                <li>
                  Terus berinovasi dan mengembangkan fitur baru untuk memenuhi
                  kebutuhan survei yang berkembang dengan teknologi terbaru dan
                  tren industri.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute h-[87.01%] w-[31.91%] top-[0%] right-[0%] bottom-[12.99%] left-[68.09%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/saly10@2x.png"
      />
    </div>
  </div>


  <div class=" absolute top-[2300px] left-[0px] bg-white w-[1280px] mx-32">
    <div>
      <div class="justify-center">
        <h2 class="text-21xl font-bold tracking-tight text-mediumslateblue-100">Anggota</h2>
        <p class="mt-10 text-lg leading-[20px] text-black">Kelompok ini dibentuk untuk menyelesaikan tugas Final Project mata kuliah Pemrograman Web</p>
      </div>
    </div>
    <div class="mx-auto mt-12 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <ul role="list" class="grid gap-x-8 gap-y-12 xl:grid-cols-3 xl:gap-y-16 xl:col-span-3">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="h-20 w-20 rounded-full" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base font-semibold leading-[15px] tracking-normal text-black">{{ person.name }}</h3>
              <p class="text-mini font-semibold text-left leading-[15px] text-mediumblue">{{ person.role }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>


  <div>
    <img
      class="absolute h-[9.95%] w-[20.1%] top-[62.67%] right-[83.66%] bottom-[27.37%] left-[-4%] max-w-full overflow-hidden max-h-full"
      alt=""
      src="/daun-kiri.svg"
    />
    <img
      class="absolute h-[9.95%] w-[20.1%] top-[62.67%] right-[-5%] bottom-[27.37%] left-[83.66%] max-w-full overflow-hidden max-h-full"
      alt=""
      src="/daun-kanan.svg"
    />
    <img
      class="absolute top-[2970px] left-[1258px] w-[316px] h-[272px] object-cover"
      alt=""
      src="/dayflow-tree@2x.png"
    />
    <img
      class="absolute top-[2800px] left-[-200px] w-[1219.02px] h-[714px]"
      alt=""
      src="/bckgrnd-bwh.svg"
    />
  </div>


  <div>
    <div
      class="absolute top-[3256px] left-[0px] bg-darkslategray-100 w-[1536px] h-[125px] overflow-hidden flex flex-col py-0 pr-[668.126953125px] pl-[668px] box-border items-center justify-center gap-[16px]"
    >
      <img
        class="relative w-[199.87px] h-10 object-cover"
        alt=""
        src="/logo3-1@2x.png"
      />
      <div class="relative leading-[20px]">Copyright © 2023</div>
    </div>
  </div>


  </div>


</template>


<script setup>

  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    PopoverGroup,
  } from '@headlessui/vue'
  import {
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'


  const people = [
    {
      name: 'Faiq Hidayat Dzakwan_4274',
      role: '-',
      imageUrl:
        'https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598',
    },
    {
      name: 'Ardiyan Rizki Nugraha_4275',
      role: 'UI Design/ Front-end',
      imageUrl:
        'public/ardiyan.jpg',
    },
    {
      name: 'Ilham Ibnu Pranata_4289',
      role: '-',
      imageUrl:
        'https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598',
    },
    {
      name: 'Dika isnaida_4292',
      role: '-',
      imageUrl:
        'https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598',
    },
    {
      name: 'Hardy Wisnu Ramanto_4300',
      role: '-',
      imageUrl:
        'https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598',
    },
    {
      name: 'Lucky Hanindriyo_4313',
      role: '-',
      imageUrl:
        'https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598',
    },
    {
      name: 'Muhammad Taqiyuddin_4328',
      role: '-',
      imageUrl:
        'https://img.freepik.com/free-photo/orangutang-chilling-out-hammock_181624-45402.jpg?w=826&t=st=1688025295~exp=1688025895~hmac=c8d560db1b3f528a6bb1e210273d804e868ec3d91e751c92d77bc3765bded598',
    },
  ]
  

  const mobileMenuOpen = ref(false)


</script>


<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "HomePage",
    methods: {
      onFrameContainer18Click() {
        this.$router.push("/login");
      },
      onLoginTextClick() {
        this.$router.push("/daftar");
      },
      onButtonContainer1Click() {
        this.$router.push("/login");
      },
      onAboutTextClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='frameContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPriceTextClick() {
        this.$router.push("/price");
      },
    },
  });
</script>