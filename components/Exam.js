import { Box, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

export default function Exam ({ uuid }) {
  const [exam, setExam] = useState({})

  fetch(`/api/exam/${uuid}`).then(async (response) => {
    setExam(await response.json())
  })

  // adjust color palette to match 5/4/3/2/1
  const colorPalette = ['#f4511e', '#fb8c00', '#ffc107', '#8bc34a', '#26a69a', '#00bcd4', '#03a9f4', '#2196f3', '#3f51b5', '#5e35b1']

  return (
    <Box>
      <HStack>
        <Box>
          <h2>{exam.year}</h2>
          <h1>{exam.name}</h1>
        </Box>
        <PieChart
          data={exam.global_percentages.map((val, idx) => { return { title: 5 - idx, value: val, color: colorPalette[idx] } })}
          label={({ dataEntry }) => (
            dataEntry.title
          )}
          labelPosition={110} // a percentage
          labelStyle={(index) => ({
            fill: colorPalette[index],
            fontSize: '16px',
            fontFamily: 'sans-serif',
            pointerEvents: 'none',
            userSelect: 'none'
          })}
          // segmentsStyle={(index) => {
          //   const segStyle = { transition: 'stroke .2s', cursor: 'pointer' }
          //   if (index === focused) {
          //     segStyle.filter = 'brightness(85%)'
          //   }
          //   return segStyle
          // }}
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
