export function setParticipantes (state, data) {
    state.participantes = data
}

export function addParticipante (state, data) {
    state.participantes.push(data)
}
