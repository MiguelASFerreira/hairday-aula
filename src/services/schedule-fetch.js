import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDays({ date }) {
  try {
    // Fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para JSON
    const data = await response.json();

    // Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    // Retotna os datas filtradas
    return dailySchedules;
  } catch (error) {
    alert(
      "Não foi possível buscar os agendamentos do dia selecionado. Tente Novamente mais tarde!"
    );
    console.log("Error:", error);
  }
}
