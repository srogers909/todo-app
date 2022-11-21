export default function Utilities() {
  function createUniqueID(): number {
    return Math.floor(Math.random() * Date.now())
  }

  return {
    createUniqueID
  }
}