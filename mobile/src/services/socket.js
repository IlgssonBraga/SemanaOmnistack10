import socketio from 'socket.io-client'

const socket = socketio('http://10.0.0.110:3333',{
    autoConnect: false,
})

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev',subscribeFunction)
}

function connect(latidude, longitude, techs){
    socket.io.opts.query = {
        latidude,
        longitude,
        techs,
    }
    socket.connect()
    
    
}

function disconnect(){
    if(socket.connect){
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}
