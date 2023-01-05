import React from "react";
import "./css1/youtube.css";
function Youtube(props)
{
    return(
        <div className="modal">
         <div className="descriptiondiv">
           <h4 className="heading1">Description:</h4>
           <p className="firstdiv">
           The FEDpreneur Show is a Federation KIIT podcast series in which we host India's most successful entrepreneurs and attempt to unearth their secrets to success while learning entertainingly! Every conversation on The FEDpreneur Show offers the audience intellectual, educational, and extraordinary learning possibilities. It's about a visionary entrepreneur session with a group of multi-talented and experienced business owners. With a forthcoming podcast, "The FEDpreneur Show," where we host India's top success stories and strive to dig out their secrets to success, learning, and fun, it would help our young minds stand firm in marketing and startup endeavors!
           </p>
         </div>
         <div>
            <h4 className="heading2">Watch More</h4>
            <div className="watchmore">
                <div className="div1">
                    <div className="underdiv1">
                        <div className="items">
                            <div className="imagediv">
                              <img src="https://i.ytimg.com/vi/tqGsqwp67-g/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAajJb7ww7UYPUEd4PIFTbhXOGZCg"></img>
                            </div>
                            <div className="eti">
                                <h4 className="empowering">Empowering through Innovation</h4>
                                <h4 className="ep">EP 03</h4>
                                <p className="">
                                The FEDpreneur Show is a Federation KIIT podcast series in which we host India's most successful entrepreneurs and attempt to unearth their secrets to success while learning entertainingly! Every conversation on The FEDpreneur Show offers the audience intellectual, educational, a...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div2"></div>
                <div className="div3"></div>
            </div>
         </div>
        </div>
    );
}
export default Youtube;
