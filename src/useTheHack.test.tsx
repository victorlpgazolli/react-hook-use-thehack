import React from "react"
import { useTheHack } from './index'
import { act, renderHook } from "@testing-library/react-hooks"
import { waitFor } from "@testing-library/react"

describe('useTheHack', () => {
  test('scraping thehack.com.br first page', async () => {

    const {
      result,
    } = renderHook(() => useTheHack({
      slug: "na-pandemia-novas-fraudes-crescem-na-internet-e-afetam-brasileiros"
    }));


  })

})
