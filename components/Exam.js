import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Cookies from 'js-cookie'
import { useToast, Button, Box, Stack, HStack } from "@chakra-ui/react"
import { Component, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PieChart } from 'react-minimal-pie-chart';

export default function Exam({ uuid }) {

  let [exam, setExam] = useState({})

  let uuid = router.query.uuid; 
  if (uuid) {
    fetch(`/api/exam/${uuid}`).then(async (response) => {
      setExam(await response.json());
    })
  }

  return (
    <Box>
      <HStack>
        <Box>
          <h2>{exam.year}</h2>
          <h1>{exam.name}</h1>
        </Box>
        <PieChart 
          data={exam.global_percentages.map((val, idx) => { return {title: 5-idx, value: val, color: colorPalette[idx]} })}
          label={( {dataEntry} ) => (
            dataEntry.title
          )}
          labelPosition={110} // a percentage
          labelStyle={(index) => ({
            fill: pieData[index].color,
            fontSize: "16px",
            fontFamily: 'sans-serif',
            pointerEvents: 'none',
            userSelect: 'none',
          })}
          segmentsStyle={(index) => {
            let segStyle = { transition: 'stroke .2s', cursor: 'pointer'}
            if (index == focused) {
              segStyle['filter'] = 'brightness(85%)'
            } 
            return segStyle
          }}
          radius={150}
          viewBoxSize={[800, 400]}
          center={[400, 200]}
          // segmentsShift={(index) => (index == selected ? 4 : 0)}
          animate={true}
          animationDuration={500}
          animationEasing="ease-out"
          reveal={100}
          // onClick={(event, index) => {
          //   setSelected(index === selected ? undefined : index)
          // }}
          // onMouseOver={(_, index) => {
          //   setFocused(index);

          // }}
          // onMouseOut={() => {
          //   setFocused(undefined);
          // }}
        />
      </HStack>
    </Box>
  )
}