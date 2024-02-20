<template>
  <div class="calendar">
    <div class="header">
      <button @click="previousMonth">前の月</button>
      <span>{{ currentMonth }} {{ currentYear }}</span>
      <button @click="nextMonth">次の月</button>
    </div>
    <div class="day-names">
      <div v-for="dayName in dayNames" :key="dayName" class="day-name">
        {{ dayName }}
      </div>
    </div>
    <div class="days">
      <div v-for="day in daysInMonth" :key="day" class="day" :class="{ 'selected': isSelectedDay(day) }" @click="selectDay(day)">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentDate = ref(new Date());
const currentMonth = computed(() => currentDate.value.toLocaleString('ja', { month: 'long' }));
const currentYear = computed(() => currentDate.value.getFullYear());
const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
const selectedDate = ref(null);

const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => i + 1);
});

function previousMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
}

function nextMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
}

function selectDay(day) {
  selectedDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), day);
}

function isSelectedDay(day) {
  if (!selectedDate.value) return false;
  return selectedDate.value.getDate() === day &&
         selectedDate.value.getMonth() === currentDate.value.getMonth() &&
         selectedDate.value.getFullYear() === currentDate.value.getFullYear();
}
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.day-names, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
}

.day-name, .day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.selected {
  background-color: red;
  color: white;
}
</style>
