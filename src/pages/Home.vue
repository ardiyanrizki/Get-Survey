<template>
  <div
    class="relative bg-default-white w-full h-[864px] overflow-hidden text-center text-lg text-default-white font-inter"
  >
    <div
      class="absolute top-[0px] left-[0px] bg-neutral-silver shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1536px] h-[100px] overflow-hidden text-mediumslateblue-100"
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
          class="w-[85px] h-6 flex flex-row items-center justify-start gap-[10px]"
        >
          <img class="relative w-6 h-6" alt="" src="/home-duotone.svg" />
          <div class="relative leading-[20px] font-medium">Home</div>
        </div>
        <div
          class="w-[110px] h-6 flex flex-row items-center justify-start gap-[10px] cursor-pointer text-dimgray-100"
          @click="onFrameContainer1Click"
        >
          <img class="relative w-6 h-6" alt="" src="/time.svg" />
          <div class="relative leading-[20px] font-medium">Aktivitas</div>
        </div>
      </div>
    </div>
    <img
      class="absolute top-[160px] left-[772px] w-[437px] h-[530px]"
      alt=""
      src="/group-22.svg"
    />
    <div
      class="absolute top-[140px] left-[914px] shadow-[0px_15px_15px_rgba(0,_0,_0,_0.25)] w-[220px] h-[279px]"
    >
      <img
        class="absolute h-full w-full top-[2.17%] right-[6.9%] bottom-[-2.17%] left-[-6.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/saly26@2x.png"
      />
    </div>
    <img
      class="absolute top-[160px] left-[287px] w-[437px] h-[530px]"
      alt=""
      src="/group-21.svg"
    />
    <div
      class="absolute top-[227px] left-[320px] shadow-[0px_15px_15px_rgba(0,_0,_0,_0.25)] w-[418px] h-[225px]"
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
    <div
      class="absolute top-[562px] left-[914px] rounded-11xl bg-mediumslateblue-100 shadow-[0px_4px_10px_rgba(255,_255,_255,_0.25)] w-[200px] h-[50px] flex flex-col items-center justify-center cursor-pointer"
      @click="onFrameContainer5Click"
    >
      <div class="relative leading-[20px] font-medium">Gabung</div>
    </div>
    <div
      class="absolute top-[442px] left-[885px] rounded-[40px] bg-lightgray shadow-[0px_6px_10px_rgba(255,_255,_255,_0.25)] w-[250px] h-[50px]"
    />
    <div class="absolute top-[512px] left-[915px] leading-[20px] font-medium">
      Masukkan kode survey
    </div>
  </div>
</template>
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
