import React from 'react'
import "../css/LetsTalkBusiness.css"

export default function LetsTalkBusiness() {
  return (
        <div class="letsTalkBusiness">
            <div class="letsTalkBusiness-left">
                <p class="business-heading">Let's Talk <span>Business</span></p>
                <p class="business-text">
                    We'd love to hear from you! Whether you are curious about how our society works, how you can
                    participate in our webinars and events, any recent updates or anything that interest you -
                    we're ready to answer any and all of your questions!
                </p>
            </div>
            <div class="letsTalkBusiness-right">
                <form>
                    <div>
                        <label for="Name">Name:</label>
                        <input type="text" name="Name" />
                    </div>
                    <div>
                        <label for="Email">Email:</label>
                        <input type="email" name="Email"/>
                    </div>
                    <div>
                        <label for="Message" id="message">Message:</label>
                        <textarea name="Message"cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" name="submit">Send</button>
                </form>
            </div>
        </div>
  )
}
