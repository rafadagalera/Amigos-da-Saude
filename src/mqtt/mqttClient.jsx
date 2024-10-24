import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const MqttClient = () => {
    const [messages, setMessages] = useState([]);
    const [client, setClient] = useState(null);

    useEffect(() => {
        const options = {
            username: 'dagalera',
            password: '!senhasecreta',
            clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
        };
        const mqttClient = mqtt.connect('wss://mqtt-dashboard.com:8884/mqtt', options);


        // Set up event handlers
        mqttClient.on('connect', () => {
            console.log('Connected to MQTT broker');
            mqttClient.subscribe('teste/dagalera', (err) => {
                if (err) {
                    console.error('Subscription error:', err);
                } else {
                    console.log('Subscribed to topic');
                }
            });
        });

        mqttClient.on('message', (topic, message) => {
            console.log('Message received:', topic, message.toString());
            setMessages((prevMessages) => [...prevMessages, message.toString()]);
        });

        mqttClient.on('error', (error) => {
            console.error('MQTT Client Error:', error);
        });

        // Clean up on component unmount
        return () => {
            mqttClient.end();
        };
    }, []);

    return (
        <div>
            <h1>MQTT Messages</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default MqttClient;
