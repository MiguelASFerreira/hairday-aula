import { scheduleDay } from "../schedules/load.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => scheduleDay()