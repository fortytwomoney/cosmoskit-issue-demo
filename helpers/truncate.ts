export const truncate = (address: string | undefined, prefix: string | undefined) => {
  if (!address || !prefix) return

  const tail = address.slice(-1 * 4, address.length)
  return `${prefix}...${tail}`
}
