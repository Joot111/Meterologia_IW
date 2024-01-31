import './App.css';
import React, { useState, useEffect } from 'react';

function Tempo({ info, pesquisa }) {

  return (
    <>
      <h1>Portugal Condições Meteorológicas:</h1>
      {info.map(tempo => (
        <>
          {pesquisa === "" ?
            <>
              <div className='lista_Tempo'>
                <div>
                  <span className='tab_span'>{tempo.local}</span>
                  <span className='tab_img'><img width="50px" height="50px" src={tempo.tempoSimbolo} /></span>
                  <span>{tempo.temperaturaAtual}</span>
                </div>
              </div>
            </> :
            tempo.local.toString().toLowerCase().startsWith(pesquisa) &&
            <>
              <div className=''>
                <h2>{tempo.local}</h2>
              </div>
              <div className='Tempo'>
                <div className='Cartao_Tempo'>
                  <div className='Cartao_Tempo_Header'>
                    <span>Tempo Atual</span>
                    <span className='horas'>12:10</span>
                  </div>                
                  <div className='Temp'>
                    <div className='TempAtual'>
                      <span className='temp_img'><img width="92px" height="92px" src={tempo.tempoSimbolo} /></span>
                      <span className='Temperatura'>{tempo.temperaturaAtual}</span>
                      <h2>{tempo.tempo}</h2>
                    </div>
                  </div>
                  <div className='Cartao_Tempo_Painel'>
                    <h3>Max:  {tempo.temperaturaMáxima}</h3>
                    <h3>Min:  {tempo.temperaturaMínima}</h3>
                    <h3>Vento:   {tempo.velociadadeDoVento}</h3>
                    <h3>Rajadas de Vento:  {tempo.rajadasDeVento}</h3>
                  </div>
                </div>
              </div>
              <div className='Ar'>
                <div className='Cartao_Tempo_Header'>
                    <span>Qualidade do Ar</span>
                </div>  
                <div>
                  <h3>Qualidade do Ar: {tempo.qualidadeDoAr}</h3>
                  <h3>Humidade do Ar: {tempo.humidade}</h3>
                  <h3>Precipitação: {tempo.precipitação}</h3>
                </div>
              </div>
            </>
          }
        </>
      )
      )
      }
    </>
  );

}

export default Tempo;