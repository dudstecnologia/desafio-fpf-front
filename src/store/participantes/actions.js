import http from '../../service/http'

export function getParticipantesApi (context) {
    http.get('/participantes')
        .then(({ data }) => {
            context.commit('setParticipantes', data)
        })
}
