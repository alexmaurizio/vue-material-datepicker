<style lang="scss">
  .datepicker-container {
    position: relative;
  }
</style>

<template>
  <div class="datepicker-container">
    <input type="text" :class="classDesign" :value="date_formatted" @click="showDatepicker">

    <input type="hidden" :id="id" :name="name" :value="date_raw">

    <datepicker-agenda :disable-passed-days="disablePassedDays" :doubled="doubled" :displayHeader="displayHeader"
                       :disabled-days="disabledDays" :lang="lang" :orientation="orientation" :show="isShow"
                       :roundStyle="roundStyle" :alwaysShow="alwaysShow" @change="selectDate" @hide="hideDatePicker"
                       @cancel="cancelDateSelection">
    </datepicker-agenda>
  </div>
</template>

<script>
  import moment from 'moment';

  import DatepickerAgenda from './components/DatepickerAgenda.vue';

  export default {
    components: {
      'datepicker-agenda': DatepickerAgenda
    },
    props: {
      classDesign: {type: String, default: ''},
      disablePassedDays: {type: Boolean, default: false},
      disabledDays: {
        type: Array, default() {
          return []
        }
      },
      doubled: {type: Boolean, default: false},
      format: {type: String, default: 'YYYY-MM-DD'},
      id: {type: String, default: 'vue-datepicker'},
      lang: {type: String, default: 'en'},
      name: {type: String, default: 'datepicker'},
      orientation: {type: String, default: 'portrait'},
      alwaysShow: {type: Boolean, default: false},
      displayHeader: {type: Boolean, default: true},
      roundStyle: {type: Boolean, default: true}
    },
    data() {
      return {
        date: '',
        isShow: false
      };
    },
    computed: {
      date_formatted() {
        if (!this.date) return '';
        return this.date.format(this.format);
      },
      date_raw() {
        if (this.date) return this.date.format('YYYY-MM-DD');
        return '';
      }
    },
    mounted() {
      moment.locale(this.lang);
      if (this.alwaysShow) {
        this.showDatepicker();
      }
    },
    methods: {
      selectDate(newDate) {
        this.date = newDate;
        this.$emit('update:chooseDate', newDate);
      },
      showDatepicker() {
        this.isShow = true;
        this.$emit('update:isVisible', true);
        if (!this.alwaysShow) {
          setTimeout(() => document.addEventListener('click', this.hideDatePicker), 0);
        }
      },
      hideDatePicker() {
        if (!this.alwaysShow) {
          this.isShow = false;
          this.$emit('update:isVisible', false);
          document.removeEventListener('click', this.hideDatePicker);
        }
      },
      cancelDateSelection() {
        this.$emit('update:chooseDate', '');
        if (!this.alwaysShow) {
          this.hideDatePicker();
        }
      }
    }
  };
</script>
