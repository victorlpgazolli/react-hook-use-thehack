import React from "react"
import { useTheHack } from './index'
import { act, renderHook } from "@testing-library/react-hooks"
import { waitFor } from "@testing-library/react"

describe('useTheHack', () => {
  test('scraping thehack.com.br first page', async () => {

    const {
      result,
      waitForNextUpdate
    } = renderHook(() => useTheHack());

    await waitForNextUpdate();


    expect(result.current.posts).toBeCalledWith(expect.any(Array))

  })

})
