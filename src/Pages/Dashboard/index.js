

import { useState, useEffect } from 'react'
import { getDeviceApiList } from '../../Services/api'

export default function Dashboard() {

  const [listOfDevices, setListOfDevices] = useState([])

  useEffect(() => {
    async function getDeviceList() {
      try {
        const res = await getDeviceApiList()
        if (res.status === 200) return setListOfDevices(res.data)

      } catch (error) {

      }
    }
    getDeviceList()
  }, [])

  return (
    <div>
      {listOfDevices?.length && listOfDevices.map((device) => {
        return (
          <div key={device.id}>
            <div>{device.system_name}</div>
            <div>{device.type}</div>
            <div>{device.hdd_capacity}</div>
          </div>
        )
      })}
    </div>
  )
}