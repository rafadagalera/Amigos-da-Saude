import MqttClient from '../mqtt/mqttClient'

export default function App(){
    return(
        <div>
            <h1>Pega o quiz do pai</h1>
            <MqttClient></MqttClient>
        </div>
    )
}