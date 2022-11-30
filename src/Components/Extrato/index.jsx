import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from '../../info'
import styled from "styled-components";
import Itens from "../Itens";



const Extrato = () => {
  return(
    <Box>
      {
        extratoLista.updates.map(({id, type, from, value, date}) => {
          return(
          <Itens key={id} type={type} from={from} value={value} date={date} />
        )})
      }
      <Botao>Ver mais</Botao>
    </Box>
  )
}

export default Extrato