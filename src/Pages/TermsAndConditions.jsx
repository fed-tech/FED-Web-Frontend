import React, { useEffect } from "react";
import "./Css/termsandpolicies.css";

function TermsAndConditions() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy_policies">
      <div className="privacy_policies_content">
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to <strong>Federation of Entrepreneurship </strong> at Kalinga
          Institute of Industrial Technology ! We are excited to have you join
          our community of aspiring entrepreneurs. Please read the following
          Terms and Conditions carefully, as they outline the rules and
          guidelines governing your participation in the society.
        </p>
        <p>
          <strong>1. Membership: </strong>
          <br />
          a. Membership in <strong>Federation of Entrepreneurship </strong> is
          open to all currently enrolled students at Kalinga Institute of
          Industrial Technology. <br />
          b. By becoming a member, you agree to abide by these Terms and
          Conditions and any additional rules or guidelines set forth by the
          society.
        </p>
        <p>
          <strong>2. Code of Conduct:</strong> <br />
          a. Treat all members, guests, and society organizers with respect,
          kindness, and professionalism. <br />
          b. Maintain a supportive and inclusive environment, refraining from
          any form of discrimination, harassment, or bullying. <br />
          c. Avoid engaging in activities that may bring disrepute to the
          society or college. <br />
          d. Adhere to ethical business practices and encourage integrity and
          honesty among members. <br />
          e. Respect the confidentiality of sensitive information shared within
          the society.
        </p>
        <p>
          <strong>3. Society Events and Activities: </strong> <br />
          a. Participate actively in society events, workshops, seminars, and
          other activities organized by the Entrepreneurship Society. <br />
          b. Notify the society organizers in advance if you are unable to
          attend an event or activity after registering.
          <br /> c. Be punctual and respectful of the schedules and timelines
          established for events.
        </p>
        <p>
          <strong>4. Intellectual Property:</strong> <br />
          a. Respect the intellectual property rights of others, including but
          not limited to copyrights, trademarks, and patents. <br />
          b. Do not use the society platform to share or distribute copyrighted
          or proprietary material without the necessary permissions.
        </p>
        <p>
          <strong>5. Personal Liability: </strong>
          <br />
          a. Participate in society activities at your own risk. <br />
          b. <strong>Federation of Entrepreneurship </strong> and its organizers
          shall not be held liable for any personal injury, loss, damage, or
          theft that may occur during society events.
        </p>
        <p>
          <strong>6. Data Privacy:</strong> <br />
          a. <strong>Federation of Entrepreneurship </strong> will collect and
          store personal information in accordance with applicable data
          protection laws. <br />
          b. By joining the society, you consent to the collection, storage, and
          processing of your personal information for society-related purposes.
        </p>
        <p>
          <strong>7. Amendments and Termination:</strong> <br />
          a.
          <strong>Federation of Entrepreneurship</strong> reserves the right to
          amend these Terms and Conditions at any time. Any changes will be
          communicated to the members in advance. <br />
          b. The society organizers may terminate your membership if you violate
          these Terms and Conditions or engage in behavior that is deemed
          harmful to the society or its members.
        </p>
        <p>
          <strong>8. Governing Law:</strong> <br />
          a. These Terms and Conditions shall be governed by and construed in
          accordance with the laws of Bhubaneswar,Odisha,India. <br />
          b. Any disputes arising out of or in connection with these Terms and
          Conditions shall be subject to the exclusive jurisdiction of the
          courts in Bhubaneswar,Odisha,India.
        </p>
        <p>
          <strong>9. Payments:</strong> <br />
          a. all the payments done through this website is refundable by{" "}
          <strong>Federation of Entrepreneurship </strong> <br />
          b. The organisation never ask for payment other than this website
        </p>
        <p>
          By joining <strong>Federation of Entrepreneurship </strong> at Kalinga
          Institute of Industrial Technology, you acknowledge that you have
          read, understood, and agreed to these Terms and Conditions. Failure to
          comply with these terms may result in the termination of your
          membership.
        </p>
        <p>
          If you have any questions or concerns regarding these Terms and
          Conditions, please contact the society organizers for clarification.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
