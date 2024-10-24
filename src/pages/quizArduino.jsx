import MqttClient from '../mqtt/mqttClient'

export default function QuizArduino(){
    return(
        <div className=''>
            <h1 className=''>Pega o quiz do pai</h1>
            <MqttClient/>
        </div>
    )
}