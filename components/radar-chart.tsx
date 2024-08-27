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

import { Champion } from '@/types/api'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface RadarChartProps {
  data: Champion
}

const RadarChart = ({ data }: RadarChartProps) => {
  const chartData = {
    labels: ['공격', '시야', '수비', '안정성', '야생성', '캐리성'],
    datasets: [
      {
        label: data.champion,
        data: Object.entries(data.average_features).map(([, value]) => value),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: '나의 데이터',
        data: Object.entries(data.user_features).map(([, value]) => value),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
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
        },
        pointLabels: {
          font: {
            size: 16
          }
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
