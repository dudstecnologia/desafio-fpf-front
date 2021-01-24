export function setParticipantes (state, data) {
    state.participantes = data
}

export function addParticipante (state, data) {
    state.participantes.push(data)
}

export function deleteParticipante (state, data) {
    state.participantes = state.participantes.filter(p => p.id !== data)
}
