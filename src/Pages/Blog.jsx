// import React from "react";
// import Button from "@material-ui/core/Button";
// import Tooltip from "@material-ui/core/Tooltip";

// export default function App() {
//   return (
//     <div className="App">
//       <Tooltip
//         title="Tooltip for the register button"
//         placement="top"
//       >
//         <Button variant="contained">Register</Button>
//       </Tooltip>
//     </div>
//   );
// }

// import React from "react";
// import ReactTooltip from "react-tooltip";

// export default function App() {
//   return (
//     <div className="App">
//       <button data-tip data-for="registerTip">
//         Register
//       </button>

//       <ReactTooltip id="registerTip" place="top" effect="solid">
//         Tooltip for the register button
//       </ReactTooltip>
//     </div>
//   );
// }



import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Blog=()=>{
	return (
		<div>
			<h4>Popup - GeeksforGeeks</h4>
			<Popup trigger=
				{<button> Click to open modal </button>}
				modal nested>
				{
					close => (
						<div className='modal'>
                     	<div className='content'>
								Welcome to GFG!!!
							</div>
							<div>
								<button onClick=
									{() => close()}>
										Close modal
								</button>
							</div>
						</div>
					)
				}
			</Popup>
		</div>
	)
};
export default Blog