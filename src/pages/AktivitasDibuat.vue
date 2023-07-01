<template>
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
          <img class="relative w-6 h-6" alt="" src="/time2.svg" />
          <div class="relative leading-[20px] font-medium">Aktivitas</div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-[160px] left-[120px] rounded-xl box-border w-[206px] h-10 border-[1px] border-solid border-mediumpurple-100"
    />
    <div
      class="absolute top-[165px] left-[230px] rounded-xl bg-mediumorchid w-[86px] h-[30px] flex flex-col items-center justify-center text-default-white"
    >
      <div class="relative leading-[20px] font-semibold">Dibuat</div>
    </div>
    <div
      class="absolute top-[170px] left-[141px] leading-[20px] font-semibold cursor-pointer"
      @click="onSelesaiTextClick"
    >
      Selesai
    </div>
    <div
      class="absolute top-[260px] left-[120px] rounded-3xs bg-default-white shadow-[3px_6px_7px_rgba(0,_0,_0,_0.25)] box-border w-[1296px] h-[504px] border-[1px] border-solid border-black"
    />
    <div
      class="absolute top-[290px] left-[142px] w-[295px] h-[211px] text-black"
    >
      <div
        class="absolute top-[4px] left-[0px] rounded-3xs bg-mediumpurple-200 [filter:blur(40px)] w-[286.5px] h-[207px]"
      />
      <div
        class="absolute top-[0px] left-[8px] rounded-3xs bg-gainsboro box-border w-[286.5px] h-[207px] border-[1px] border-solid border-slateblue"
      />
      <div
        class="absolute top-[167px] left-[28px] leading-[20px] font-semibold"
      >
        Final Project
      </div>
      <img
        class="absolute top-[0px] left-[8px] rounded-t-3xs rounded-b-none w-[287px] h-[152px] object-cover"
        alt=""
        src="/frame-92@2x.png"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "AktivitasDibuat",
    methods: {
      onFrameContainerClick() {
        this.$router.push("/aktivitasselesai");
      },
      onSelesaiTextClick() {
        this.$router.push("/aktivitasselesai");
      },
    },
  });
</script>
