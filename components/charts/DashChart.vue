<template>
  <div class="main-section">
    <div class="is-flex">
      <div class="col">
        <h1>Dashboard</h1>
        <div class="seperator" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-8">
        <vue-frappe
          id="test"
          :labels="[
            '12am-3am',
            '3am-6am',
            '6am-9am',
            '9am-12pm',
            '12pm-3pm',
            '3pm-6pm',
            '6pm-9pm',
            '9pm-12am',
          ]"
          title="Customers patronage chart"
          type="pie"
          :height="300"
          :colors="['purple', '#ffa3ef', 'light-blue']"
          :dataSets="this.data"
        >
        </vue-frappe>
      </div>
      <div class="column is-4">
        <!-- <pie-chart/> -->
        <div class="admin_header">
          <i>Chestnut and Bolt Technology</i>
          <p><i>content managment system</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PieChart from '~/components/charts/PieChart.vue'

export default {
  components: {
    // PieChart
  },
  data() {
    return {
      data: [
        {
          values: [25, 40, 30, 35, 8, 52, 17, -4],
        },
        {
          values: [25, 50, -10, 15, 18, 32, 27, 14],
        },
        {
          values: [15, 20, -3, -15, 58, 12, -17, 37],
        },
      ],
      maxSlices: 8,
    };
  },
};
</script> 

