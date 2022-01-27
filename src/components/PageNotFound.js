import React from 'react';

export const PageNotFound = () => {
  return (
  <div style={{marginTop: '3rem',display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
      <h1>UPS!!Está tratando de acceder a una página inexistente</h1>
       
      <img src={"/not-found.jpg"} alt="pagina no encontrada"/>
  </div>);
};
