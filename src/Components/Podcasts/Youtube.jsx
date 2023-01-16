import React, { useState, useEffect } from "react";
import image from "./css1/images/image-27.png";
import image1 from "./css1/images/image-29.png";
import image2 from "./css1/images/youtube-28.png";
import "./css1/youtube.css";
import Card from "./Card";
const cardList = [
  {
    episode: "EP 03",
    image: image,
    title: "Empowering through Innovation",
    para: `The FEDpreneur Show is a Federation KIIT podcast series in which we host India's most successful entrepreneurs and attempt to unearth their secrets to success while learning entertainingly! Every conversation on The FEDpreneur Show offers the audience intellectual, educational, and extraordinary learning possibilities. It's about a visionary entrepreneur session with a group of multi-talented and experienced business owners. With a forthcoming podcast, "The FEDpreneur Show," where we host India's top success stories and strive to dig out their secrets to success, learning, and fun, it would help our young minds stand firm in marketing and startup endeavors!`,
  },
  {
    episode: "EP 02",
    image: image1,
    title: "Skills Always Reign Supreme",
    para: `Hello Viewers! <br>
    The FEDpreneur Show is our new podcast series in which we host India's most successful entrepreneurs and strive to uncover their secrets to success, learning, and entertainment! Every conversation on The FEDpreneur Show provides the viewer with intellectual, educational, and extreme learning opportunities. It is about a visionary entrepreneur session with several multi-talented and experienced entrepreneurs. It would aid our young brains to stand strong in marketing and startup endeavors with an upcoming podcast, "The FEDpreneur Show," where we host India's best success stories and aim to dig out their secrets to success, learning, and enjoyment!<br>
    Today's audio has an in-depth chat with Nimish Keshri about building start-ups in India, their philosophy, secrets, ups and downs along the way, and many other fascinating information.<br>
    Nimish Keshri is the founder and CEO of the EdTech business SkillVERTEX. SkillVERTEX is an online learning platform where students may explore and select from a variety of courses. SkillVERTEX provides their customers with a placement programme to assist them develop their abilities in the workplace. <br>
    Follow us on : <br>
    Instagram: <a href="https://www.instagram.com/fedkiit/" target="_blank" >https://www.instagram.com/fedkiit/</a>  <br>
    LinkedIn :  <a href="https://www.linkedin.com/company/fedkiit" target="_blank">https://www.linkedin.com/company/fedkiit</a>  <br>
    
    Guest of honor: Nimish Keshri (Instagram: <a href="https://instagram.com/who_nk?utm_medi..." target="_blank" >https://instagram.com/who_nk?utm_medi...</a> )<br>
    Podcaster: Aniket Patro (Instagram: <a href="https://instagram.com/ankp04?utm_medi..." target="_blank" >https://instagram.com/ankp04?utm_medi...</a> ) <br>
    SkillVERTEX ( <a href="https://skillvertex.in" target="_blank" >https://skillvertex.in</a>)`,
    link: `<iframe width="1020" height="574" src="https://www.youtube.com/embed/_MQdy0jUR7I?autoplay=1&mute=1&enablejsapi=1&rel=0" title="SKILLS always reign SUPREME | EP 02 | The FEDpreneur Show" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `,
  },
  {
    episode: "EP 01",
    image: image2,
    title: "Low CGPA !! Multiple Backlogs!!?? Mind grind of an Entrepreneur !",
    para: `Hello Viewers!
    <br>
    The FEDpreneur Show is our new podcast series in which we host India's most successful entrepreneurs and strive to uncover their secrets to success, learning, and entertainment! Every conversation on The FEDpreneur Show provides the viewer with intellectual, educational, and extreme learning opportunities. It is about a visionary entrepreneur session with several multi-talented and experienced entrepreneurs. It will aid our young brains to stand strong in marketing and startup endeavours with an upcoming podcast, "The FEDpreneur Show," where we host India's best success stories and aim to dig out their secrets to success, learning, and enjoyment!<br>
    Today's audio episode includes an in-depth discussion with Niket Raj Dwivedi on developing start-ups in India, their philosophy, their secrets, and many other topics.
    <br>
    FED's creator, Niket Raj Dwivedi, is also the CEO of The Write Order, India's fastest growing publishing business situated in Bangalore, Karnataka. He is a wonderful writer, an incredible poet, and a successful entrepreneur, the creator of the Federation of Entrepreneurship-KIIT, also known as the KIIT's Lone Wolf. This entrepreneurial interview is extremely useful since it gives a step-by-step instruction on how to launch a firm with only a business idea. The Indian startup landscape is unique, and this video might help you learn more.<br>
    This Indian podcast is hopefully going to spread a lot of knowledge and education amongst the various segments of the society.
    <br>
    Ambar Bishun & Niket Raj Dwivedi are here to discuss the grind before the success of The Write Order.
    <br>
    Stay connected with the Federation of Entrepreneurship Development-KIIT via our social media platforms to know more about us.<br>
    Follow us on :
    <br>
    Instagram: <a href="https://www.instagram.com/fedkiit/" target="_blank" >https://www.instagram.com/fedkiit/</a>   <br>
    LinkedIn : <a href="https://www.linkedin.com/company/fedkiit" target="_blank">https://www.linkedin.com/company/fedkiit</a>  <br>
    Facebook:  <a href="https://www.facebook.com/fedkiit" target="_blank">https://www.facebook.com/fedkiit</a> https://www.facebook.com/fedkiit    
    <br>
    Guest of honour: Niket Raj Dwivedi (Instagram: <a href="https://www.instagram.com/niketrajdwi..." target="_blank" >https://www.instagram.com/niketrajdwi...</a>) <br>
    Podcaster: Ambar Bishun (Instagram: <a href="https://www.instagram.com/august_boy_99" target="_blank" >https://www.instagram.com/august_boy_99/</a>) <br>
    Host: Mayank Rai (Instagram: <a href="https://www.instagram.com/mayankkkk._0/" target="_blank" >https://www.instagram.com/mayankkkk._0/</a>) <br>
    The Write Order (Instagram: <a href="https://www.instagram.com/thewriteorder/" target="_blank" >https://www.instagram.com/thewriteorder/</a>) <br>
    <br>
    Cheers <br>
    TEAM FED`,
    link: `<iframe width="1020" height="574" src="https://www.youtube.com/embed/TZkBzFK_zQU?autoplay=1&mute=1&enablejsapi=1&rel=0" title="Low CGPA !! Multiple Backlogs!!?? Mind grind of an Entrepreneur ! The FEDpreneur Show - Episode 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `,
  },
];
function Youtube(props) {
  const [count, setCount] = useState([]);
  return (
    <div className="mainbody">
      <div className="container1">
        <div className="container2">
          <iframe
            className="video_content"
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/tqGsqwp67-g"
            title="Empowering through Innovation | EP 03 | The FEDpreneur Show"
            frameborder="0"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="descriptiondiv">
        <h4 className="heading1">Description:</h4>
        <p className="firstdiv">
          The FEDpreneur Show is a Federation KIIT podcast series in which we
          host India's most successful entrepreneurs and attempt to unearth
          their secrets to success while learning entertainingly! Every
          conversation on The FEDpreneur Show offers the audience intellectual,
          educational, and extraordinary learning possibilities. It's about a
          visionary entrepreneur session with a group of multi-talented and
          experienced business owners. With a forthcoming podcast, "The
          FEDpreneur Show," where we host India's top success stories and strive
          to dig out their secrets to success, learning, and fun, it would help
          our young minds stand firm in marketing and startup endeavors!
        </p>
      </div>
      <div className="bottomcontainer">
        <h4 className="heading2">Watch More</h4>
        <div className="watchmore">
          {cardList.map((cardList) => {
            return (
              <Card
                episode={cardList.episode}
                image={cardList.image}
                title={cardList.title}
                para={cardList.para}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Youtube;
