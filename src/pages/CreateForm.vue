<template>
  <div
    class="relative bg-default-white w-full h-[864px] overflow-hidden text-center text-lg text-black font-inter"
  >
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
      class="absolute top-[174px] left-[187px] rounded-3xs bg-mediumpurple-100 [filter:blur(40px)] w-[1134px] h-[150px]"
    />
    <div
      class="absolute top-[170px] left-[201px] rounded-3xs bg-gainsboro box-border w-[1134px] h-[150px] border-[2px] border-solid border-mediumpurple-100"
    />
    <div
      class="absolute top-[235px] left-[241px] text-21xl leading-[20px] font-medium text-darkorchid"
    >
      Judul
    </div>
    <div
      class="absolute top-[354px] left-[187px] rounded-3xs bg-mediumpurple-100 [filter:blur(40px)] w-[1134px] h-[350px]"
    />
    <div
      class="absolute top-[350px] left-[201px] rounded-3xs bg-gainsboro box-border w-[1134px] h-[350px] border-[2px] border-solid border-mediumpurple-100"
    />
    <div
      class="absolute top-[380px] left-[231px] bg-default-white w-[801px] h-[60px]"
    />
    <div class="absolute top-[400px] left-[272px] leading-[20px] font-medium">
      Pertanyaan
    </div>
    <div
      class="absolute top-[380px] left-[1057px] bg-default-white w-[250px] h-[60px]"
    />
    <div class="absolute top-[400px] left-[1116px] leading-[20px] font-medium">
      Multiple choice
    </div>
    <div
      class="absolute top-[480px] left-[246px] rounded-[50%] bg-default-white w-5 h-5"
    />
    <div
      class="absolute top-[520px] left-[246px] rounded-[50%] bg-default-white w-5 h-5"
    />
    <div
      class="absolute top-[560px] left-[246px] rounded-[50%] bg-default-white w-5 h-5"
    />
    <div class="absolute top-[480px] left-[286px] leading-[20px] font-medium">
      Option 1
    </div>
    <div class="absolute top-[520px] left-[284px] leading-[20px] font-medium">
      Option 2
    </div>
    <div class="absolute top-[560px] left-[284px] leading-[20px] font-medium">
      Option 3
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "CreateForm",
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
