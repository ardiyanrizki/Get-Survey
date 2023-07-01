<template>
  <div
    class="relative bg-default-white w-full h-[864px] overflow-hidden text-center text-lg text-black font-inter"
  >
    <div
      class="absolute top-[285px] left-[1396px] rounded-[50%] bg-mediumvioletred-300 [filter:blur(100px)] w-[283px] h-[283px]"
    />
    <div
      class="absolute top-[512px] left-[1120px] rounded-[50%] bg-mediumslateblue-200 [filter:blur(100px)] w-[591px] h-[591px]"
    />
    <div
      class="absolute top-[0px] left-[0px] bg-neutral-silver shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1536px] h-[100px] overflow-hidden text-dimgray-100"
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
          class="w-[110px] h-6 flex flex-row items-center justify-start gap-[10px] cursor-pointer"
          @click="onFrameContainer1Click"
        >
          <img class="relative w-6 h-6" alt="" src="/time.svg" />
          <div class="relative leading-[20px] font-medium">Aktivitas</div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-[160px] left-[120px] text-21xl leading-[20px] font-medium text-darkorchid"
    >
      Judul
    </div>
    <div
      class="absolute top-[250px] left-[206px] text-[inherit] leading-[20px] font-medium font-inherit"
    >
      <ul class="m-0 pl-6">
        Kapan kamu biasanya mengakses media sosial?
      </ul>
    </div>
    <div class="absolute top-[300px] left-[270px] leading-[20px] font-medium">
      Pagi
    </div>
    <div
      class="absolute top-[300px] left-[230px] rounded-[50%] bg-plum w-5 h-5"
    />
    <div
      class="absolute top-[340px] left-[230px] rounded-[50%] bg-plum w-5 h-5"
    />
    <div
      class="absolute top-[380px] left-[229px] rounded-[50%] bg-plum w-5 h-5"
    />
    <div class="absolute top-[340px] left-[270px] leading-[20px] font-medium">
      Siang
    </div>
    <div class="absolute top-[380px] left-[269px] leading-[20px] font-medium">
      Malam
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "InForm",
    methods: {
      onFrameContainerClick() {
        this.$router.push("/home");
      },
      onFrameContainer1Click() {
        this.$router.push("/aktivitasselesai");
      },
    },
  });
</script>
