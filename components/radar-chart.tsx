'use client'

import type { ChartOptions } from 'chart.js'

import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface RadarChartProps {
  data: {
    name: string
    stats: number[]
  }
}

const RadarChart = ({ data }: RadarChartProps) => {
  const chartData = {
    labels: ['Attack', 'Defense', 'Magic', 'Difficulty'],
    datasets: [
      {
        label: data.name,
        data: data.stats,
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1
      }
    ]
  }

  const options: ChartOptions<'radar'> & ChartOptions = {
    responsive: true,
    scales: {
      r: {
        max: 10,
        min: 0,
        ticks: {
          display: false, // 숫자 숨기기
          sampleSize: 1 // 눈금 개수
        },
        grid: {
          // color: 'rgba(255, 255, 255, 0.2)' // 그리드 라인 색상 조절
        }
      }
    },
    animation: {
      duration: 500, // 애니메이션 지속 시간
      easing: 'easeInOutCubic', // 애니메이션 효과
      loop: false
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return <Radar data={chartData} options={options} />
}

export default RadarChart
