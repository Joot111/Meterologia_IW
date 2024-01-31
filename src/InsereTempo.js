import React, { useState, useEffect } from 'react';
import "./InsereTempo.css";

const Insere = () => {

    const sendLoginInfo = async (email, password) => {
        try {
            // const response = await fetch('https://api.sheety.co/272ea837f9f1630e722be20ebe12f7b3/tempo/tempo', { - original
            //const response = await fetch('https://api.sheety.co/143d3a99cbe53d62a0cc649674db7d79/tempo/tempo', { - substituto
            const response = await fetch('./data.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tempo: {
                        local: local,
                        tempoSimbolo: tempoSimbolo,
                        tempo: tempo,
                        temperaturaAtual: temperaturaAtual,
                        temperaturaMáxima: temperaturaMáxima,
                        temperaturaMínima: temperaturaMínima,
                        humidade: humidade,
                        precipitação: precipitação,
                        velociadadeDoVento: velociadadeDoVento,
                        qualidadeDoAr: qualidadeDoAr,
                        rajadasDeVento: rajadasDeVento,
                        id: id + 1,
                    },
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Network response was not ok: ${response.status} - ${errorMessage}`);
            } else {
                //...
            }
        } catch (error) {
            console.error('Error sending login info:', error);
            //....
        }
    };

    return (
        <div>
            <form className="container">
                <div>

                </div>
            </form>
        </div>
    );
};
export default Insere;