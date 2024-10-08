import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a datamínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()
        
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // Recuperar o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")
        
        if (!hourSelected) {
            return alert("Selecione a hora!")
        }

        // Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")


        // Inserir a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        // Gera um id
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento!")
        console.log("Error:", error)
    }
}