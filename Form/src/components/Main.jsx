import women from "../assets/images/1.avif"
const Main = () => {
  return (
    <>
       <div className="container flex items-center h-screen justify-center w-full" style={{ backgroundColor:'rgba(247,248,249,1)'}}>
          <div className="container max-w-screen-md rounded-lg flex justify-between h-auto items-center drop-shadow-2xl bg-white"style={{height:'38rem'}}>
                <div className="left p-10">
                  <div className="heading">
                      <h1 className="text-[#fe5d5b] font-sans text-3xl font-medium">Create Account</h1>
                  </div>
                </div>    
                <div className="right">
                    <img src={women} alt="" className="w-60 object-cover rounded-lg" style={{height:'38rem'}} />
                </div> 
          </div>
       </div>
    </>
  )
}

export default Main