import { ELEMENTS } from "../constants/elements"
import { useAppContext } from "../context/AppContext"
//components
import Element from "./Element"

const ListOfElements = () => {
  const { category } = useAppContext()

  return (
    <div
      className="w-full p-8 mt-10
      flex flex-wrap justify-center
      gap-5"
    >
      {ELEMENTS[category].map((btn) => (
        <Element key={btn.id} classBtn={btn.classBtn} {...btn} />
      ))}
    </div>
  )
}
export default ListOfElements
