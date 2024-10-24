import MqttClient from '../mqtt/mqttClient'

export default function QuizArduino(){
    return(
        <div>
            <h1>Pega o quiz do pai</h1>
            <MqttClient></MqttClient>
        </div>
    )
}