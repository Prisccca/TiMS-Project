let time = ["Laura", "Pedro", "Joao", "Vinicius", "Carlos", "Maria", "Leonardo", "Ana", "Daniela",
    "Marcos", "Wesley", "Luiza", "Daiane", "Felipe", "Teodoro", "Helena", "Natalia", "Beatriz", "Eduardo", "Caio"]

let time_aux = []
let time_aux2 = []
let time_aux_ciclo3 = []
let ciclo_aux = []
let ciclo_aux2 = []


let ciclos = {
    "ciclo1": [
        ["Laura", "Pedro", "Joao", "Vinicius"],
        ["Carlos", "Maria", "Leonardo", "Ana"],
        ["Daniela", "Marcos", "Wesley", "Luiza"],
        ["Daiane", "Felipe", "Teodoro", "Helena"],
        ["Natalia", "Beatriz", "Eduardo", "Caio"]
    ],
    "ciclo2": [
        ["Teodoro", "Daiane", "Luiza"],
        ["Carlos", "Joao", "Helena"],
        ["Daniela", "Pedro", "Caio"],
        ["Leonardo", "Maria", "Laura"],
        ["Beatriz", "Marcos", "Vinicius"],
        ["Natalia", "Felipe", "Eduardo"],
        ["Ana", "Wesley"]
    ],
    "ciclo3": []
}


//cria a quantidade de times do ciclo 3 

for (let i = 0; i < 5; i++) {
    let idx = [Math.floor(Math.random() * time.length)]
    membro = time[idx]
    time.splice(idx, 1)
    time_aux_ciclo3[0] = membro

    for (let t in time) {
        time_aux2.push(time[t])
    }
    for (let v1 in ciclos) {
        ciclo_aux = ciclos[v1]
        for (let v2 in ciclo_aux) {
            ciclo_aux2 = ciclo_aux[v2]
            for (let v3 in ciclo_aux2) {
                if (ciclo_aux2[v3] === membro) {
                    time_aux = ciclo_aux2
                    for (let v4 in time_aux) {
                        for (let v5 in time_aux2) {
                            if (time_aux[v4] === time_aux2[v5]) {
                                time_aux2.splice(v5, 1)
                            }
                        }
                    }
                }
            }
            ciclo_aux2 = []
        }
        ciclo_aux = []
    }

    for (let j = 1; j < 4; j++) {
        let idx2 = [Math.floor(Math.random() * time_aux2.length)]
        let membro2 = time_aux2.splice(idx2, 1)
        time_aux_ciclo3[j] = membro2[0]
    }

    for (let m in time) {
        for (let k in time_aux_ciclo3) {
            if (time[m] === time_aux_ciclo3[k]) {
                time.splice(m, 1)
            }
        }
    }
    ciclos["ciclo3"].push(time_aux_ciclo3)
    time_aux_ciclo3 = []
    time_aux2 = []
}

document.write(ciclos["ciclo3"][0])
document.write('<br>')
document.write(ciclos["ciclo3"][1])
document.write('<br>')
document.write(ciclos["ciclo3"][2])
document.write('<br>')
document.write(ciclos["ciclo3"][3])
document.write('<br>')
document.write(ciclos["ciclo3"][4])
