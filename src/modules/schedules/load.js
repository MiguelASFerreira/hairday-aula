import { scheduleFetchByDays } from "../../services/schedule-fetch.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function scheduleDay() {
    // Obtém a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDays(date)
    console.log(dailySchedules)

    schedulesShow({ dailySchedules })
    // Renderiza as horas disponíveis
    hoursLoad({ date })
}