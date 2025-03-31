import ComputerContainer from "./Computer/ComputerContainer"

const Services = () => {
  return (
    <section className="h-full overflow-hidden flex ml-[15px] mr-[15px]">
        <div className="w-[50%] flex flex-col justify-center">
          <h1>Olá</h1>
        </div>

        <div className="w-[50%] flex flex-col justify-center">
        <ComputerContainer />
        </div>
    </section>
  )
}

export default Services
