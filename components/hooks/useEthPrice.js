import useSWR from "swr"


const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
const COURSE_PRICE = 15

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data.market_data.current_price.usd ?? null
}

export const useEthPrice = () => {
  const { data, isValidating, ...rest } = useSWR(URL, fetcher, { refreshInterval: 10000 })
  return {
    eth: {
      data,
      ...rest,
      perCourse: (data && (COURSE_PRICE / Number(data)).toFixed(6)) ?? null
    }
  }
}