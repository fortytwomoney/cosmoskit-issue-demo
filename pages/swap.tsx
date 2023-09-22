import Swap from '@/components/Swap/Swap'

const SwapPage = () => {
  return <Swap />
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const {
//     fromChain = 'neutron',
//     toChain = 'osmosis',
//     fromToken = 'NTRN',
//     toToken = 'OSMO',
//     redirecTo = null,
//   } = query

//   return {
//     props: {
//       fromChain,
//       toChain,
//       fromToken,
//       toToken,
//       redirecTo,
//     },
//   }
// }

export default SwapPage
