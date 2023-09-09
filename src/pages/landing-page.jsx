import hero from '../assets/chloe_bulton.jpg'
/*
import per from '../assets/handmade.jpg'
import pot from '../assets/handmade-2.jpg'
import plates from '../assets/peripheral-4.jpg' */

const LandingPage = () => {
  return (
    <>
      <div className="h-[100vh] relative w-full ">
        <span className="absolute bottom-0 left-0 right-0 top-0 w-full h-full z-10 justify-end bg-black/20"></span>
        <div className="absolute left-0 right-0 h-[100vh]">
          <img
            className="w-full h-full object-cover"
            src={hero} alt="Ceramic pots" />
        </div>

        <div className="relative z-20 m-auto mx-[5vw] my-0 py-40 justify-center flex flex-col items-end gap-[1rem] border-red-100 max-w-[1200px]">
          <h1 className="font-bold">Discover <br /> Handcrafted <br /> Magic</h1>
          <h3>Timeless designs for your modern home.</h3>
          <button type="button" className="rounded-lg bg-[#d8d7d5] font-bold text-[#00000088] w-100 mt-1 p-5 px-10 hover:cursor-pointer">Explore the Collection</button>
        </div>
      </div>

      {/* <main className='w-[100vw] m-auto my-0'>

        <section className='w-full relative h-[65vh] overflow-hidden' style={{ border: '2px solid red'}}>
          <div className='w-1/2 h-[45%] overflow-hidden left-0 absolute z-10'>
            <img
              className=''
              src={per} alt="A pot" />
          </div>

          <div className='w-1/2  overflow-hidden right-0 bottom-0 object-bottom absolute'>
            <img
              className='max-w-full object-cover'
              src={plates} alt="A pot" />
          </div>

          <div className='w-1/2 overflow-hidden absolute  bottom-0'>
            <img
              className='max-w-full object-bottom'
              src={pot} alt="A pot" />
          </div>

        </section>
      </main> */}
    </>
  )
}

export default LandingPage
