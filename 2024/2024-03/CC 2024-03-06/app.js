//======================================
//SH - IMPLEMENT GRADIENT BUTTON
//======================================

// Your task is to implement animation for gradient on hover, video of how it should work attached
// You can change any lines of code here and final result may vary from the example, its okay

const Component = () => {
	return (
  	<div className="container">
      <button>
      <span>
        CTA BUTTON
      </span>
      </button>
      
      <video autoplay="true" src="https://mock-file.s3.amazonaws.com/Screen+Recording+2024-02-17+at+09.10.03.mov"></video>
  	</div>
  )
}

ReactDOM.render(<Component />, document.querySelector("#app"))
