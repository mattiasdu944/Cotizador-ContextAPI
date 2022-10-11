
import "../styles/Spinner.css"
const Spinner = () => {
  return (
    <div className="w-full justify-center items-center text-4xl font-bold text-indigo-500 pt-10 text-center">
        <div className="sk-chase text-center">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </div>
  )
}

export default Spinner