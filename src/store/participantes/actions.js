import axios from 'axios'

export function getParticipantesApi (context) {
    axios.get('http://fpf.eduardo/api/participantes')
        .then(({ data }) => {
            context.commit('setParticipantes', data)
        })
}
